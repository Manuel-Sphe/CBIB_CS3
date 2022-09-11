from fastapi import APIRouter, Request,Body, status,HTTPException, UploadFile
from .. import database, models
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel, Field
from typing import Optional, List
from bson import ObjectId
from fastapi.responses import JSONResponse


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

# READ PROFILE using their username 
@router.get("/users/{username}")
async def get_profile_by_username(username: str):
    user = await db["users"].find_one({"username": username})
    return user

@router.get('/users/{id}', response_description='Get a single user profile')
async def get_profile(id: str):
    if(profile := await db['users'].find_one({'_id':id})) is not None:
        return profile 
    raise HTTPException(status_code=404, detail=f'Profile {id} not found ')


# UPDATE PROFILE
@router.put("/users/{id}")
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

# 


# Add new user 
@router.post('/users/',response_description='Create a new user Profile ',response_model = models.UserInfo)
async def create_profile(profile: models.UserInfo = Body(...)):
    profile = jsonable_encoder(profile)
    new_profile = await db['users'].insert_one(profile)
    created_profile = await db['users'].find_one({'_id':new_profile.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_profile)


"""
    @router.post('/user/profile_picture/{id}', response_model=models.UserInfo)
async def upload_pic(id:str ,file: UploadFile):
    # find the user first 
   
    profile = await db['users'].find_one({'_id':id})
    if profile:
        if(updated_profile:= await db['users'].update_one({"picture":file},{"$set":file})) is not None:
            return JSONResponse(status_code=status.HTTP_201_CREATED, content=updated_profile)
    raise HTTPException(status_code=404, detail=f"profile {id} not found")
"""




# Delete user 
@router.delete('/users/{id}',response_description='Delete a profile')
async def remove_profile(id:str):
    delete_result = await db['users'].delete_one({'_id':id});
    if delete_result.deleted_count == 1:
        return JSONResponse(status_code=status.HTTP_204_NO_CONTENT,content={'_id':''})
    raise HTTPException(status_code = 404,detail = f"Profile {id} not found ")


# DELETE PROFILE
