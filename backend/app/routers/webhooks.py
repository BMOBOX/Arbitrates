from fastapi import APIRouter, Request, status
from ..errors import not_found
from ..models import ApiResponse, WebhookCreate, WebhookList, WebhookRecord
from ..storage import webhook_store
from ..supabase_client import supabase

router = APIRouter(prefix="/api/webhooks", tags=["webhooks"])


@router.post("/", response_model=ApiResponse, status_code=status.HTTP_201_CREATED)
async def create_webhook(request: Request) -> ApiResponse:
    payload = await request.json()
    source = request.headers.get("X-GitHub-Event")
    if source:
        source = source.strip()
    if not source:
        source = "github"
    record = webhook_store.add(WebhookCreate(source=source, payload=payload))
    # res = supabase.table('hello').select('*')
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
