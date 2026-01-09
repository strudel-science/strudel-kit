from fastapi import APIRouter, HTTPException
from app.crud import get_user_by_id, get_users
from app.database import SessionDep


router = APIRouter()

@router.get("/user/{user_id}")
async def read_user(db: SessionDep, user_id: int):
    user = get_user_by_id(db, user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.get("/users")
async def read_users(db: SessionDep):
    users = get_users(db)
    if users is None:
        raise HTTPException(status_code=404, detail="Could not retrieve users")
    return users