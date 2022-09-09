from fastapi import FastAPI, Body, HTTPException,status
from . import database
from . models import Profile
from .routers import profile, groups
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

app = FastAPI()
app.include_router(profile.router)
app.include_router(groups.router)
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

@app.get('/profiles/{id}', response_description='Get a single user profile')
async def get_profile(id: str):

    if(profile := await db['profiles'].find_one({'_id':id})) is not None:
        return profile 
    raise HTTPException(status_code=404, detail=f'Profile {id} not found ')


@app.post('/profiles/',response_description='Create a new user Profile ',response_model = Profile)
async def create_profile(profile: Profile = Body(...)):
    profile = jsonable_encoder(profile)
    new_profile = await db['profiles'].insert_one(profile)
    created_profile = await db['profiles'].find_one({'_id':new_profile.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_profile)


@app.put('/profiles/{id}',response_description='Update User Profile',response_model = Profile)
async def update_profile(id:str, profile: Profile = Body(...)):
    profile = {k:v for k,v in profile.dict().items() if v is not None }

    if(len(profile))>=1:
        updated_result = await db['profiles'].update_one({'_id':id},{'$set':profile})
        if updated_result.modified_count==1:
            if(updated_profile := await db['profiles'].find_one({'_id':id})) is not None:
                return updated_profile
    
    if( existing_profile := await db['profiles'].find_one({'_id':id})) is not None:
        return existing_profile
    
    raise HTTPException(status_code=404, detail=f'Profile {id} not found')

@app.delete('/profiles/{id}',response_description='Delete a profile')
async def remove_profile(id:str):
    delete_result = await db['profiles'].remove_one({'_id':id});
    if delete_result.deleted_count ==1:
        return JSONResponse(status_code=status.HTTP_204_NO_CONTENT)
    raise HTTPException(status_code = 404,detail = f"Profile {id} not found ")

    



