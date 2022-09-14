
from fastapi import FastAPI, Body
from . import database
from .routers import profile, groups, organisation,publication
from fastapi.encoders import jsonable_encoder

app = FastAPI()
app.include_router(profile.router)
app.include_router(organisation.router)
app.include_router(groups.router)
app.include_router(publication.router)
db = database.get_database()

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


