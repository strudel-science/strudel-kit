from typing import Annotated
import os
from fastapi import Depends
from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Session


DATABASE_URI = os.getenv("DATABASE_URI", "sqlite+pysqlite:///./database.db")
engine = create_engine(DATABASE_URI)

class Base(DeclarativeBase):
    pass

# Import models here so they are registered with Base.metadata
# This must happen after Base is defined but before metadata is used
from app import models

def get_session():
    with Session(engine) as session:
        yield session
        session.commit()


SessionDep = Annotated[Session, Depends(get_session)]