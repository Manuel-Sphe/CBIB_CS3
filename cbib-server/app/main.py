from fastapi import FastAPI, Body, HTTPException,status
from . import database
from . models import Profile
from .routers import profile, groups
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()
app.include_router(profile.router)
app.include_router(groups.router)
db = database.get_database()

# Allow fronted running at localhost 
origins = ['http://localhost:8000']

#allow all the http methods, and headers 
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers=['*']
)

@app.post("/user")
async def root(user):

    add_user = jsonable_encoder(user)
    new_user = await db["publication"].insert_one(add_user)
    created_user = await db["publication"].find_one({"_id":new_user.inserted_id})
    return created_user

@app.get("/{name}")
async def look_home(name: str):
    
    users = await db["user"].find_one({"name":name})
    return users



    



