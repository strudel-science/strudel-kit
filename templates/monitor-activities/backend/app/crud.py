from sqlalchemy import select

from app.database import SessionDep
from app.models import User


def get_user_by_id(db: SessionDep, user_id: int) -> User | None:
    user = db.scalar(select(User).filter_by(id=user_id))
    return user


def get_users(db: SessionDep) -> list[User]:
    users = db.scalars(select(User)).all()
    return users
