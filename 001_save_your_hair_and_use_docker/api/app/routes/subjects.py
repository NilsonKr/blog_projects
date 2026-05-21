from fastapi import APIRouter, HTTPException
from sqlmodel import select

from app.models.subjects import Subject
from app.schemas.subject import SubjectRead

from app.deps import Session_dep

router = APIRouter(prefix="/subjects", tags=["subjects"])

@router.get("/", status_code=200, response_model=list[SubjectRead])
async def get_subjects(session: Session_dep):
    subjects = session.exec(select(Subject)).all()
    return subjects