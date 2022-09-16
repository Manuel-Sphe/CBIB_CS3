from fastapi import APIRouter, Request,Body, status,HTTPException,Response
from .. import database, models, organisationModels as orgModel
from fastapi.encoders import jsonable_encoder



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

## Create Organisation

@router.post("/")
async def create_organisation(organisation: orgModel.Organisation):

    org = jsonable_encoder(organisation)
    new_org = await db["organisations"].insert_one(org)
    created_org = await db["organisations"].find_one({"_id":new_org.inserted_id})
    # print(created_org)
    return created_org

## Read Organisation Info By Id 6321cd5128c839af9a125a38

@router.get("/{id}")
async def get_organisation(id: str):

    org = await db["organisations"].find_one({"_id":id})
    return org
    

## Update Organisation Information
@router.put("/{id}")
async def update_organisation(id:str, organisation: orgModel.UpdateOrganisation = Body(...)):
    
    org = {k: v for k, v in organisation.dict().items() if v is not None}

    if len(org) >= 1:
        update_result= await db["organisations"].update_one({"_id":id}, {"$set":org})

        if update_result.modified_count == 1:
            if (
                updated_org := await db["students"].find_one({"_id": id})
            ) is not None:
                return updated_org

    if (existing_org := await db["organisations"].find_one({"_id": id})) is not None:
        return existing_org

## Delete Organisation
@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_organisation(id: str):
   
    delete_result = await db["organisations"].delete_one({"_id":id})

    if delete_result.deleted_count==1:
        return {
            "message":"File Deleted"
        }

    raise HTTPException(status_code=404, detail=f"Organisation with id of {id} not found")