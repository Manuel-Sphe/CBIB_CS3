
from fastapi import APIRouter, Request,Body, status,HTTPException, UploadFile
from .. import database, models, schema, utils
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
    prefix="/users",
    tags = ["User Info"]
)


db = database.get_database()



## CREATE A NEW USER

@router.post('/create',response_description='Create a new user')
async def create_profile(profile: schema.CreateUser = Body(...)):
    profile = jsonable_encoder(profile)

    exists = await db["users"].find_one({"email":profile["email"]})
    if exists:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail = f'user with email {profile["email"]} already exists')
    else:
        hashed_password = utils.hash(profile["password"])
        profile["password"] = hashed_password
        new_profile = await db['users'].insert_one(profile)
        created_profile = await db['users'].find_one({'_id':new_profile.inserted_id})
        return created_profile
    
## List all profiles

@router.get("/")
async def get_all():
    users = await db["users"].find().to_list(1000)
    return users
# READ PROFILE using their username 

@router.get("/{username}")
async def get_profile_by_username(username: str):
    user = await db["users"].find_one({"username": username})
    if user:
        return user
    raise HTTPException(status_code=404, detail=f'Profile {username} not found ')

@router.get('/ByID/{id}', response_description='Get a single user profile')
async def get_profile(id: str):
    if(profile := await db['users'].find_one({'_id':id})) is not None:
        return profile
    raise HTTPException(status_code=404, detail=f'Profile {id} not found ')




# UPDATE PROFILE
@router.put("/{id}")
async def update_profile(id: str, profile: models.UserInfo = Body(...)):
    profile = {k: v for k, v in profile.dict().items() if v is not None}
    if len(profile) >= 1:
       
        update_result= await db["users"].update_one({"_id":models.PyObjectId(id)}, {"$set":profile})
        
        if update_result.modified_count == 1:
            if (
                updated_profile := await db["users"].find_one({"_id": models.PyObjectId(id)})
            ) is not None:
                return updated_profile
                # print(updated_group)

    if (existing_profile := await db["users"].find_one({"_id": models.PyObjectId(id)})) is not None:
        return existing_profile



# 


# Add new user 
@router.post('/',response_description='Create a new user Profile ',response_model = models.UserInfo)
async def create_profile(profile: models.UserInfo = Body(...)):
    profile = jsonable_encoder(profile)
    new_profile = await db['users'].insert_one(profile)
    created_profile = await db['users'].find_one({'_id':new_profile.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_profile)

# Delete user 
@router.delete('/{id}',response_description='Delete a profile')
async def remove_profile(id:str):
    delete_result = await db['users'].delete_one({'_id':id});
    if delete_result.deleted_count == 1:
        return {"respond": "File Deleted"}
    raise HTTPException(status_code = 404,detail = f"Profile {id} not found ")


# DELETE PROFILE
