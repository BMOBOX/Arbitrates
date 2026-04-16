from fastapi import FastAPI, Request, HTTPException

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World 🚀"}

@app.post("/api/webhook")
async def webhook(request: Request):
    try:
        body = await request.body()
        print(body.decode())
        return {"ok": True}
    except Exception as e:
        print("Webhook error:", e)
        return {"ok": False}
