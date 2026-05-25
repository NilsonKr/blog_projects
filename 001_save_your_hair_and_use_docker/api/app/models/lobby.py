from datetime import datetime
from pydantic import BaseModel, Field

class Lobby(BaseModel):
    id: str
    name: str

class LobbyMessage(BaseModel):
    name: str
    msg: str

class LobbyMessageResponse(LobbyMessage):
    created_at: datetime = Field(default_factory=datetime.now)
