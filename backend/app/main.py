from fastapi import FastAPI, HTTPException, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

from app.middleware import api_key_middleware
from app.models import ApiResponse
from app.routers.health import router as health_router
from app.routers.webhooks import router as webhooks_router

app = FastAPI(title="Arbitrates API", version="1.0.0")

app.middleware("http")(api_key_middleware)

app.include_router(health_router)
app.include_router(webhooks_router)


@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException) -> JSONResponse:
    return JSONResponse(
        status_code=exc.status_code,
        content=ApiResponse(
            success=False,
            message=str(exc.detail),
        ).model_dump(),
    )


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError) -> JSONResponse:
    return JSONResponse(
        status_code=422,
        content=ApiResponse(
            success=False,
            message="Validation error",
            data=exc.errors(),
        ).model_dump(),
    )


@app.exception_handler(Exception)
async def unhandled_exception_handler(request: Request, exc: Exception) -> JSONResponse:
    return JSONResponse(
        status_code=500,
        content=ApiResponse(
            success=False,
            message="Unexpected server error",
            data={"error": str(exc)},
        ).model_dump(),
    )
