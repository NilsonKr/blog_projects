from typing import Annotated
from fastapi import Depends

from app.core.database import get_session, Session

Session_dep = Annotated[Session, Depends(get_session)]
