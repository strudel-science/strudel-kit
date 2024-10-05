from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship

from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

    contributions = relationship("Contribution", back_populates="user")
    occurrences = relationship("Occurrence", back_populates="user")


class Occurrence(Base):
    __tablename__ = "occurrences"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    user_id = Column(Integer, ForeignKey("users.id"))

    user = relationship("User", back_populates="occurrences")


class Contribution(Base):
    __tablename__ = "contributions"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    user_id = Column(Integer, ForeignKey("users.id"))

    user = relationship("User", back_populates="contributions")
    files = relationship("File", back_populates="contribution")


class File(Base):
    __tablename__ = "files"

    id = Column(Integer, primary_key=True, index=True)
    file_name = Column(String, index=True)
    file_type = Column(String)
    content = Column(Text)
    contribution_id = Column(Integer, ForeignKey("contributions.id"))

    contribution = relationship("Contribution", back_populates="files")
