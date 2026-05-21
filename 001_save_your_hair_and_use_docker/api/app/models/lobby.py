from pydantic import BaseModel

class Lobby(BaseModel):
    id: str
    name: str

class LobbyMessage(BaseModel):
    message: str