from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import router


app = FastAPI()

origins = [
    "http://localhost:5175",
    "http://localhost:5174",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)