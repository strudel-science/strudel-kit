from sqlalchemy import select
from app.models import User
from app.database import SessionDep


def get_user_by_id(db: SessionDep, user_id: int) -> User | None:
    user = db.scalar(select(User).filter_by(id=user_id))
    return user


def get_users(db: SessionDep) -> list[User]:
    users = db.scalars(select(User)).all()
    return users
