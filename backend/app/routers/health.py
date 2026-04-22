from fastapi import APIRouter

from ..models import ApiResponse

router = APIRouter(tags=["health"])


@router.get("/", response_model=ApiResponse)
async def read_root() -> ApiResponse:
    return ApiResponse(success=True, message="Service is healthy", data={"status": "ok"})
