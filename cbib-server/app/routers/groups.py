from fastapi import APIRouter, Request,Body, status,HTTPException
from .. import database
from ..models import groupmodels, usermodels
from fastapi.encoders import jsonable_encoder
from . import organisation

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


##LIST ALL GROUPS
@router.get("/")
async def list_all_organisations():
    groups = await db["research_groups"].find().to_list(1000)
    return groups

    
## CREATE RESEARCH GROUP
@router.post("/")
async def create_group(group: groupmodels.ResearchGroup):

    group = jsonable_encoder(group)

    new_group = await db["research_groups"].insert_one(group)
    ## Add code here to update the groups attribute of the parent organisation
    created_group = await db["research_groups"].find_one({"_id":new_group.inserted_id})
    return created_group


## Get a Research Group By ID 6321d810ee5ddca14bf15a9d
@router.get("/{id}")
async def get_group_by_id(id:str):
    
    group = await db["research_groups"].find_one({"_id":id})
    return group


## Update Research Group by ID 6321d810ee5ddca14bf15a9d
@router.put("/{id}")
async def update_research_group(id:str, research_group: groupmodels.UpdateResearchGroup ):
    
    group = {k: v for k, v in research_group.dict().items() if v is not None}
    print(group)
    if len(group) >= 1:
        update_result= await db["research_groups"].update_one({"_id":id}, {"$set":group})

        if update_result.modified_count == 1:
            if (
                updated_group := await db["research_groups"].find_one({"_id": id})
            ) is not None:
                return updated_group
                # print(updated_group)

    if (existing_group := await db["research_groups"].find_one({"_id": id})) is not None:
        return existing_group
        # print(existing_group)

## Delete a Research Group by ID 
@router.delete("/{id}")
async def delete_group(id:str):

    delete_result = await db["research_group"].delete_one({"_id":id})

    if delete_result.deleted_count==1:
        return {
            "message":"File Deleted"
        }

    raise HTTPException(status_code=404, detail=f"Group with id of {id} not found")