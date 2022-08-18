from fastapi import APIRouter, Request,Body, status,HTTPException
from .. import database, models
from fastapi.encoders import jsonable_encoder

#This class will contain the CRUD operations relting to profile

# CREATE => POST METHOD
# GET PROFILE DETAILS => GET
# UPDTE PROFILE DETAILS => PUT => CHANGE PASSOWRD, CHANGINGNAME
# DELETE PROFILE => DELETE

router = APIRouter(
    prefix="/group",
    tags = ["Research Groups"]
)

db = database.get_database()

# CREATE RESEARCH GROUP
@router.post("/")
async def create_group(group: models.ResearchGroupInfo):

    group = jsonable_encoder(group)

    new_group = await db["groups"].insert_one(group)
    created_group = await db["groups"].find_one({"_id":new_group.inserted_id})
    return created_group


# @router.get("/list")
# async def get_list_of_groups()
