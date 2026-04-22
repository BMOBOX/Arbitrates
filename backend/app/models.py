from datetime import datetime
from typing import Any, Dict, List, Optional

from pydantic import BaseModel, Field


class ApiResponse(BaseModel):
    success: bool
    message: str
    data: Optional[Any] = None


class ErrorDetail(BaseModel):
    type: str
    message: str
    detail: Optional[Any] = None


class WebhookCreate(BaseModel):
    source: Optional[str] = Field(None, min_length=1, max_length=100)
    payload: Dict[str, Any]


class WebhookRecord(BaseModel):
    id: int
    source: str
    payload: Dict[str, Any]
    received_at: datetime


class WebhookList(BaseModel):
    items: List[WebhookRecord]
    total: int
