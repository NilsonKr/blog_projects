from datetime import datetime
from sqlmodel import SQLModel, Field

class Subject(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    name: str
    pic: str
    created_at: datetime = Field(default_factory=datetime.now)
