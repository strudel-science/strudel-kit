from pydantic import BaseModel
from typing import List, Optional


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    is_active: bool

    class Config:
        orm_mode = True


class OccurrenceBase(BaseModel):
    title: str
    description: Optional[str] = None


class OccurrenceCreate(OccurrenceBase):
    pass


class Occurrence(OccurrenceBase):
    id: int
    user_id: int

    class Config:
        orm_mode = True


class FileBase(BaseModel):
    file_name: str
    file_type: str
    content: Optional[str] = None


class FileCreate(FileBase):
    pass


class File(FileBase):
    id: int
    contribution_id: int

    class Config:
        orm_mode = True


class ContributionBase(BaseModel):
    title: str
    description: Optional[str] = None


class ContributionCreate(ContributionBase):
    pass


class Contribution(ContributionBase):
    id: int
    user_id: int
    files: List[File] = []

    class Config:
        orm_mode = True
