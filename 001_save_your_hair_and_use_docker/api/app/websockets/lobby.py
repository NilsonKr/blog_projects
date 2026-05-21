from typing import Dict
from uuid import uuid4
from fastapi import APIRouter, WebSocket, WebSocketDisconnect 
from pydantic import ValidationError

from ..models.lobby import  LobbyMessage

router = APIRouter(prefix="/lobby", tags=["lobby"])

class ConnectionManager:
    def __init__(self):
        self.active: Dict[str, WebSocket] = {}
  
    async def register(self,  ws: WebSocket):
        client_id = str(uuid4())
        self.active[client_id] = ws
        return client_id

    def disconnect(self, client_id: str):
        self.active.pop(client_id, None)

    async def broadcast(self, remitent: str, message):
        for cid, ws in self.active.items():
            if cid != remitent:
              await ws.send_json(message)

manager = ConnectionManager()


@router.websocket("/ws")
async def lobby(websocket: WebSocket):
    await websocket.accept()
    client_id = await manager.register(websocket)
    await websocket.send_text(client_id)

    try:
        while True:
            payload = await websocket.receive_json()

            try: 
                data = LobbyMessage.model_validate(payload)

            except ValidationError:
                await websocket.send_text('Wrong data model')
                continue
            
            await manager.broadcast(
                remitent=client_id, 
                message=data.model_dump()
            )
                        
    except WebSocketDisconnect:
        manager.disconnect(client_id)
        print("Client disconnected")