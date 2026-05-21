from sqlmodel import create_engine, Session

from .config import settings

engine = create_engine(
    settings.DATABASE_URL,
    echo=True,
    pool_pre_ping=True,
)

async def get_session():
    with Session(engine) as session:
        yield session
