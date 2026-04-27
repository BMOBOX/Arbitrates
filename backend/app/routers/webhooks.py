from fastapi import APIRouter, Request, Header, status
from ..errors import not_found
from ..models import ApiResponse, WebhookCreate, WebhookList, WebhookRecord
from ..storage import webhook_store
from ..supabase_client import supabase
from app.tasks.agent import process_webhook

router = APIRouter(prefix="/api/webhooks", tags=["webhooks"])


@router.post("/", response_model=ApiResponse, status_code=status.HTTP_201_CREATED)
async def create_webhook(request: Request,
    x_hub_signature_256: str = Header(...),
    x_github_event: str = Header(...),       # push, pull_request, issues, etc.
    x_github_delivery: str = Header(...),    # unique ID for this delivery
    x_github_hook_id: str = Header(None),    # webhook ID
                         ):
    """
        
    """
    payload = await request.json()
    source = request.headers.get("X-GitHub-Event")
    if source:
        source = source.strip()
    if not source:
        source = "github"
    
    # Store to Supabase
    supabase.table("github_webhooks").insert({
        "event_type": x_github_event,
        "delivery_id": x_github_delivery,
        "payload": payload,
        "signature": x_hub_signature_256,
    }).execute() 
   
    # Dispatch Celery task (agent processing) Non blocking process
    process_webhook.delay(x_github_event, x_github_delivery, payload)

    return ApiResponse(success=True, message="Webhook recieved")


@router.get("/", response_model=ApiResponse)
async def list_webhooks() -> ApiResponse:
    items = webhook_store.list()
    payload = WebhookList(items=items, total=len(items))
    return ApiResponse(success=True, message="Webhooks retrieved", data=payload)


@router.get("/{record_id}", response_model=ApiResponse)
async def get_webhook(record_id: int) -> ApiResponse:
    record = webhook_store.get(record_id)
    if not record:
        raise not_found("Webhook not found")
    return ApiResponse(success=True, message="Webhook retrieved", data=record)
