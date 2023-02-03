from fastapi import APIRouter, Request,Body, status,HTTPException, Depends
from .. import oauth2, database, models, organisationModels as orgModel
from fastapi.encoders import jsonable_encoder
from .organisation import get_organisation

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

## CREATE RESEARCH GROUP
@router.post("/")
async def create_group(group: orgModel.ResearchGroup, current_user: str = Depends(oauth2.get_current_user)):

    group = jsonable_encoder(group)
    organisation = await get_organisation(group["organisation"])
    
    org_admins = organisation["admins"]
    org_admins.extend(organisation["super_admins"])

    if current_user in org_admins:
        group["admins"] = [current_user]
        group["super_admins"] = [current_user]
        print(group)
        new_group = await db["research_groups"].insert_one(group)
        ## Add code here to update the groups attribute of the parent organisation
        created_group = await db["research_groups"].find_one({"_id":new_group.inserted_id})
        return created_group
    else:
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED)


## Get a Research Group By ID 6321d810ee5ddca14bf15a9d
@router.get("/{id}")
async def get_group_by_id(id:str):
    
    group = await db["research_groups"].find_one({"_id":id})
    return group

## Get All Research Groups
@router.get("/")
async def get_all_groups():
    group = await db["research_groups"].find().to_list(1000)
    return group

## Add/Remove Member from Research Group (include date they were added and past member data)
@router.put("/manage_members/{action}/{groud_id}")
async def manage_members(action: str, group_id: str,members:dict, current_user: str = Depends(oauth2.get_current_user)):
    
    # members = jsonable_encoder(members)

    group = await get_group_by_id(group_id)
    group = jsonable_encoder(group)
    organisation = await get_organisation(group["organisation"])
    organisation = jsonable_encoder(organisation)

    group_admins = group["admins"]
    group_admins.extend(organisation["super_admins"])
    group_admins.extend(organisation["admins"])
    group_admins.extend(group["super_admins"])

    if current_user in group_admins :
        return {
            "message": "THIS METHOD IS INCOMPLETE"
        }
        

    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)





## Update Research Group by ID 6321d810ee5ddca14bf15a9d
@router.put("/{id}")
async def update_research_group(id:str, research_group: orgModel.UpdateResearchGroup, current_user: str = Depends(oauth2.get_current_user) ):

    group = await get_group_by_id(id)
    group = jsonable_encoder(group)
    organisation = await get_organisation(group["organisation"])
    organisation = jsonable_encoder(organisation)

    group_admins = group["admins"]
    group_admins.extend(organisation["super_admins"])
    group_admins.extend(organisation["admins"])
    group_admins.extend(group["super_admins"])

    if current_user in group_admins :
    
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
    
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
        # print(existing_group)

## Delete a Research Group by ID 
@router.delete("/{id}")
async def delete_group(id:str, current_user = Depends(oauth2.get_current_user)):

    group_current = await get_group_by_id(id)
    group_current = jsonable_encoder(group_current)
    admins = group_current["admins"]
    admins.extend(group_current["super_admins"])
    org_current = await get_organisation(group_current["organisation"])
    org_current = jsonable_encoder(org_current)
    admins.extend(org_current["admins"])
    admins.extend(org_current["super_admins"])
    # print(org)
    if current_user in admins:

        delete_result = await db["research_group"].delete_one({"_id":id})

        if delete_result.deleted_count==1:
            return {
                "message":"File Deleted"
            }

        raise HTTPException(status_code=404, detail=f"Group with id of {id} not found")
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)