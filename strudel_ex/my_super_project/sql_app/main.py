from fastapi import Depends, FastAPI, HTTPException, UploadFile, File
from sqlalchemy.orm import Session
from . import crud, models, schemas
from .database import SessionLocal, engine

# Drop all tables 
models.Base.metadata.drop_all(bind=engine)

# Create all tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)


@app.get("/users/", response_model=list[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@app.post("/users/{user_id}/occurrences/", response_model=schemas.Occurrence)
def create_occurrence_for_user(user_id: int, occurrence: schemas.OccurrenceCreate, db: Session = Depends(get_db)):
    return crud.create_occurrence(db=db, occurrence=occurrence, user_id=user_id)


@app.get("/occurrences/", response_model=list[schemas.Occurrence])
def read_occurrences(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    occurrences = crud.get_occurrences(db, skip=skip, limit=limit)
    return occurrences


@app.post("/users/{user_id}/contributions/", response_model=schemas.Contribution)
def create_contribution_for_user(user_id: int, contribution: schemas.ContributionCreate, db: Session = Depends(get_db)):
    return crud.create_contribution(db=db, contribution=contribution, user_id=user_id)


@app.get("/contributions/", response_model=list[schemas.Contribution])
def read_contributions(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    contributions = crud.get_contributions(db, skip=skip, limit=limit)
    return contributions


@app.post("/contributions/{contribution_id}/files/", response_model=schemas.File)
async def create_file_for_contribution(contribution_id: int, file: UploadFile = File(...), db: Session = Depends(get_db)):
    content = await file.read()
    content_str = content.decode("utf-8")
    file_data = schemas.FileCreate(file_name=file.filename, file_type=file.content_type)
    return crud.create_file(db=db, file=file_data, contribution_id=contribution_id, content=content_str)


@app.get("/files/", response_model=list[schemas.File])
def read_files(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    files = crud.get_files(db, skip=skip, limit=limit)
    return files
