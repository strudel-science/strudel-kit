from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class User(Base):
    __tablename__ = "user_account"

    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str]
    fullname: Mapped[str | None]
    orcid: Mapped[str | None]
    is_admin: Mapped[bool] = mapped_column(default=False)
    profile_url: Mapped[str | None]
