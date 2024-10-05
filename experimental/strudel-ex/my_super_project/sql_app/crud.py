from sqlalchemy.orm import Session
from . import models, schemas


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def create_user(db: Session, user: schemas.UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(email=user.email, hashed_password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def create_occurrence(db: Session, occurrence: schemas.OccurrenceCreate, user_id: int):
    db_occurrence = models.Occurrence(**occurrence.dict(), user_id=user_id)
    db.add(db_occurrence)
    db.commit()
    db.refresh(db_occurrence)
    return db_occurrence


def get_occurrences(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Occurrence).offset(skip).limit(limit).all()


def create_contribution(db: Session, contribution: schemas.ContributionCreate, user_id: int):
    db_contribution = models.Contribution(**contribution.dict(), user_id=user_id)
    db.add(db_contribution)
    db.commit()
    db.refresh(db_contribution)
    return db_contribution


def get_contributions(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Contribution).offset(skip).limit(limit).all()


def create_file(db: Session, file: schemas.FileCreate, contribution_id: int, content: str):
    db_file = models.File(
        file_name=file.file_name,
        file_type=file.file_type,
        content=content,
        contribution_id=contribution_id
    )
    db.add(db_file)
    db.commit()
    db.refresh(db_file)
    return db_file


def get_files(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.File).offset(skip).limit(limit).all()
