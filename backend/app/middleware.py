import os
from typing import Iterable

import hmac
import hashlib

from fastapi import Request
from fastapi.responses import JSONResponse

from .models import ApiResponse

from dotenv import load_dotenv
load_dotenv()


EXEMPT_PATHS: Iterable[str] = (
    "/",
    "/openapi.json",
    "/docs",
    "/redoc",
)


def _get_expected_key() -> str:
    return os.getenv("API_KEY")

async def _get_expected_signature(request: Request) -> str | None:
    body = await request.body()
    github_webhook_secret = os.getenv("GITHUB_WEBHOOK_SECRET")

    if not github_webhook_secret:
        return None

    expected_signature = hmac.new(
        github_webhook_secret.encode(),
        body,
        hashlib.sha256,
    ).hexdigest()

    return f"sha256={expected_signature}"

def _extract_signature(request: Request) -> str | None:
    gh_signature = request.headers.get("X-Hub-Signature-256")

    if gh_signature:
        return gh_signature.strip()
    return None

def _extract_token(request: Request) -> str | None:
    api_key = request.headers.get("X-API-Key")

    if api_key:
        return api_key
    auth_header = request.headers.get("Authorization", "")
    if auth_header.startswith("Bearer "):
        return auth_header.removeprefix("Bearer ").strip()
    return None


def is_exempt(path: str) -> bool:
    if path in EXEMPT_PATHS:
        return True
    return any(path.startswith(prefix + "/") for prefix in EXEMPT_PATHS)


def auth_failed() -> JSONResponse:
    return JSONResponse(
        status_code=401,
        content=ApiResponse(success=False, message="Unauthorized").model_dump(),
    )


async def api_key_middleware(request: Request, call_next):
    path = request.url.path

    if path.startswith("/api/webhooks") and request.method == "GET" and not is_exempt(path):
        return await call_next(request)
    if path.startswith("/api/webhooks") and request.method == "POST" and not is_exempt(path):
        gh_signature = _extract_signature(request)
        expected_signature = await _get_expected_signature(request)
        if (
            not gh_signature
            or not expected_signature
            or not hmac.compare_digest(expected_signature, gh_signature)
        ):
            print("Webhook signature rejected: missing or mismatch", flush=True)
            return auth_failed()

    return await call_next(request)
