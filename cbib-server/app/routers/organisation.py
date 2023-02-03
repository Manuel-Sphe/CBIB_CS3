from fastapi import APIRouter, Request,Body, status,HTTPException,Response, Depends
from .. import oauth2, database, models, organisationModels as orgModel
from fastapi.encoders import jsonable_encoder
from typing import List
from fastapi.security import HTTPBearer

#This class will contain the CRUD operations relting to profile

# CREATE => POST METHOD
# GET PROFILE DETAILS => GET
# UPDTE PROFILE DETAILS => PUT => CHANGE PASSOWRD, CHANGINGNAME
# DELETE PROFILE => DELETE



router = APIRouter(
    prefix="/organisation",
    tags = ["Organisation or Institution"]
)

db = database.get_database()
token_auth_scheme = HTTPBearer()

## Create Organisation

@router.post("/")
async def create_organisation(organisation: orgModel.Organisation, current_user: str = Depends(oauth2.get_current_user)):

    organisation = jsonable_encoder(organisation)
    organisation["admins"] = [current_user]
    organisation["super_admins"] = [current_user]

    new_org = await db["organisations"].insert_one(organisation)
    created_org = await db["organisations"].find_one({"_id":new_org.inserted_id})
    
    return created_org

## Read Organisation Info By Id 6321cd5128c839af9a125a38
@router.get("/")
async def get_org():

    org = await db["organisations"].find().to_list(1000)
    return org
    
    
@router.get("/{id}")
async def get_organisation(id: str):

    org = await db["organisations"].find_one({"_id":id})
    return org

@router.put("/manage_admin/{action}/{group_id}")
async def manage_admins(action:str,group_id: str, admin_id: List[str], current_user: str = Depends(oauth2.get_current_user)):

    
    org = await get_organisation(group_id)
    org = jsonable_encoder(org)
    if current_user in org["admins"] :

        admins = org["admins"]
        for i in admin_id:
            if action=="remove":
                admins.remove(i)
            elif action == "add":
                if i in admins:
                    print("already exists")
                    continue
                else:
                    admins.append(i)
        
        org["admins"] = admins
        org.pop("_id")
        
        if len(org) >= 1:
            # print("1")
            update_result= await db["organisations"].update_one({"_id":group_id}, {"$set":org})
            # print("2")

        if update_result.modified_count == 1:
            print("no_no")
            if (
                updated_org := await db["organisations"].find_one({"_id": group_id})
            ) is not None:
                return updated_org

        if (existing_org := await db["organisations"].find_one({"_id": group_id})) is not None:
            return existing_org
    
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)


## Update Organisation Information
@router.put("/{id}")
async def update_organisation(id:str, organisation: orgModel.UpdateOrganisation = Body(...), current_user: str = Depends(oauth2.get_current_user)):
    
    org = {k: v for k, v in organisation.dict().items() if v is not None}
    
    org_current = await get_organisation(id)
    org_current = jsonable_encoder(org_current)
    # print(org)
    org_admins = org_current["admins"]

    if current_user in org_admins:
        if len(org) >= 1:
            # print("what")
            # org.pop("_id")
            # print(org)
            update_result= await db["organisations"].update_one({"_id":id}, {"$set":org})
            # print(update_result.modified_count)

        if update_result.modified_count == 1:
            print("updated")
            if (
                updated_org := await db["organisations"].find_one({"_id": id})
            ) is not None:
                return updated_org

        if (existing_org := await db["organisations"].find_one({"_id": id})) is not None:
            return existing_org
    
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

## Delete Organisation
@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_organisation(id: str, current_user: str = Depends(oauth2.get_current_user)):
   
    org_current = await get_organisation(id)
    org_current = jsonable_encoder(org_current)
    # print(org)
    org_super_admin = org_current["super_admins"]

    if current_user in org_super_admin:
        delete_result = await db["organisations"].delete_one({"_id":id})

        if delete_result.deleted_count==1:
            return {
                "message":"File Deleted"
            }

        raise HTTPException(status_code=404, detail=f"Organisation with id of {id} not found")
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)