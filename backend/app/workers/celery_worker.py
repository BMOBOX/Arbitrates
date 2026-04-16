import os
from celery import Celery
from dotenv import load_dotenv

load_dotenv()

def resolve_broker_url() -> str:
    return (
        os.getenv("CELERY_BROKER_URL")
        or os.getenv("CELERY_BACKEND_URL")
        or "redis://redis:6379/0"
    )


celery = Celery(
    "arbitrates",
    broker=resolve_broker_url(),
)
