from fastapi import FastAPI

from .routes import scripts_router, subjects_router
from .websockets import lobby_router

app = FastAPI()

app.include_router(scripts_router)
app.include_router(subjects_router)
app.include_router(lobby_router)

@app.get("/")
async def root():
    return {"message": "Happy coding with FastAPI! and docker"}
