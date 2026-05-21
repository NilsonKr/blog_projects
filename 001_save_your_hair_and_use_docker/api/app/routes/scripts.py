from fastapi import APIRouter, HTTPException
from sqlmodel import select

from app.models.subjects import Subject
from app.schemas.subject import SubjectRead

from app.deps import Session_dep

router = APIRouter(prefix="/scripts", tags=["scripts"])

@router.post("/", status_code=201, response_model=list[SubjectRead])
async def create_sample_subjects(session: Session_dep):
    subject_1 = Subject(name="Ppepe carlo", pic="https://example.com/subject1.jpg")
    subject_2 = Subject(name="SSDSUD", pic="https://example.com/subject2.jpg")
    
    session.add(subject_1)
    session.add(subject_2)  

    session.commit()
    
    session.refresh(subject_1)
    session.refresh(subject_2)
    
    return [subject_1, subject_2]