from typing import Optional
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from app.database import Base


class User(Base):
    __tablename__ = "user_account"

    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str]
    fullname: Mapped[Optional[str]]
    orcid: Mapped[Optional[str]]
    is_admin: Mapped[bool] = mapped_column(default=False)
    profile_url: Mapped[Optional[str]]