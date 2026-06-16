from fastapi import APIRouter, HTTPException
from sqlmodel import select

from app.models.subjects import Subject
from app.schemas.subject import SubjectRead

from app.deps import Session_dep

router = APIRouter(prefix="/scripts", tags=["scripts"])

@router.post("/create_subjects", status_code=201, response_model=list[SubjectRead])
async def create_sample_subjects(session: Session_dep):
    subject_1 = Subject(name="Omali", pic="https://pbs.twimg.com/media/GXZMabjbwAIu4jr.jpg")
    subject_2 = Subject(name="Pepe Carlo", pic="https://i.ytimg.com/vi/lwdAgaKd2_I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDRsn-CQImDXh_aNCkzh5uq19nw8w")
    
    session.add(subject_1)
    session.add(subject_2)  

    session.commit()
    
    session.refresh(subject_1)
    session.refresh(subject_2)
    
    return [subject_1, subject_2]