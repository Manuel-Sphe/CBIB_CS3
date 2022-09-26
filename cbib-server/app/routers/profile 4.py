from fastapi import APIRouter, Request,Body, status,HTTPException
from .. import database, models
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel, Field
from typing import Optional, List
from bson import ObjectId

#This class will contain the CRUD operations relting to profile

# CREATE => POST METHOD
# GET PROFILE DETAILS => GET
# UPDTE PROFILE DETAILS => PUT => CHANGE PASSOWRD, CHANGINGNAME
# DELETE PROFILE => DELETE

router = APIRouter(
    prefix="/profile",
    tags = ["Profile"]
)


db = database.get_database()

# CREATE PROFILE
@router.post("/", status_code=status.HTTP_201_CREATED)#, response_model = models.UserInfo)
async def create_profile(user: models.UserInfo = Body(...)):

    profile = jsonable_encoder(user)
    new_profile = await db["users"].insert_one(profile)
    created_user = await db["users"].find_one({"_id":new_profile.inserted_id})


    return created_user


# READ PROFILE
@router.get("/{username}")
async def get_profile_by_username(username: str):

    user = await db["users"].find_one({"username": username})
    return user


# UPDATE PROFILE
@router.put("/{id}")
async def update_profile(id: str, profile: models.UserInfo = Body(...)):
    profile = {k: v for k, v in profile.dict().items() if v is not None}

    if len(profile) >= 1:

        current_user = await db["users"].find_one({"_id": id})
        current_username = current_user["username"]
   
        if (current_username!=profile["username"]):
            username_exists = await db["users"].find_one({"username": profile["username"]})

            if username_exists:
                raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail=f"Username not available")
    
        update_result = await db["users"].update_one({"_id": id}, {"$set": profile})

        if update_result.modified_count == 1:
            if (
                updated_profile := await db["users"].find_one({"_id": id})
            ) is not None:
                return updated_profile

    if (existing_profile := await db["users"].find_one({"_id": id})) is not None:
        return existing_profile

    raise HTTPException(status_code=404, detail=f"profile {id} not found")




# DELETE PROFILE
