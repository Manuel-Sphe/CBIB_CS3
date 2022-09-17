
from fastapi import FastAPI, Body, HTTPException,status
from . import database

from .routers import users, groups, login, media_uploads

from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()
app.include_router(users.router)
app.include_router(groups.router)
app.include_router(login.router)
app.include_router(media_uploads.router)

db = database.get_database()


# Allow fronted running at localhost 
origins = ["http://localhost:3000"]





    



