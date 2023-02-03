from . models import Profile
from fastapi import FastAPI
from . import database
from .routers import groups, organisation, publication, uploads, users, login, media_uploads, auth, generate_report
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(auth.router)
app.include_router(users.router)
app.include_router(media_uploads.router)
app.include_router(organisation.router)
app.include_router(groups.router)
app.include_router(publication.router)
app.include_router(uploads.router)
# app.include_router(login.router)
app.include_router(generate_report.router)


db = database.get_database()




    



