from datetime import datetime
from sqlmodel import SQLModel
from pydantic import HttpUrl

class SubjectBase(SQLModel):
    name: str
    pic: str

class SubjectRead(SubjectBase):
    id: int
    created_at: datetime

class SubjectCreate(SubjectBase):
    pic: HttpUrl

class SubjectUpdate(SubjectBase):
    name: str | None = None
    pic: str | None = None