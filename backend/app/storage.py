from datetime import datetime
from threading import Lock
from typing import List

from .models import WebhookCreate, WebhookRecord


class WebhookStore:
    def __init__(self) -> None:
        self._items: List[WebhookRecord] = []
        self._lock = Lock()
        self._next_id = 1

    def add(self, payload: WebhookCreate) -> WebhookRecord:
        with self._lock:
            record = WebhookRecord(
                id=self._next_id,
                source=payload.source,
                payload=payload.payload,
                received_at=datetime.utcnow(),
            )
            self._items.append(record)
            self._next_id += 1
            return record

    def list(self) -> List[WebhookRecord]:
        with self._lock:
            return list(self._items)

    def get(self, record_id: int) -> WebhookRecord | None:
        with self._lock:
            return next((item for item in self._items if item.id == record_id), None)


webhook_store = WebhookStore()
