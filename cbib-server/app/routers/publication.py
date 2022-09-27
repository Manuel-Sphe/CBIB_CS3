from fastapi import APIRouter, Request,Body, status,HTTPException, UploadFile,File, Depends
from .. import database,oauth2, models, organisationModels as orgModel
from fastapi.encoders import jsonable_encoder
from .groups import get_group_by_id
from .organisation import get_organisation


router = APIRouter(
    prefix="/publications",
    tags = ["Research Publications"]
)

db = database.get_database()

## CREATE RESEARCH PUBLICATION OBJECT

@router.post("/")
async def create_publication(publication: orgModel.Publication, current_user: str = Depends(oauth2.get_current_user)):
    
    publication = jsonable_encoder(publication)
    group_id = publication["owner_group"]

    group = await get_group_by_id(group_id)
    group = jsonable_encoder(group)
    organisation = await get_organisation(group["organisation"])
    organisation = jsonable_encoder(organisation)

    group_admins = group["admins"]
    group_admins.extend(organisation["super_admins"])
    group_admins.extend(organisation["admins"])
    group_admins.extend(group["super_admins"])

    if current_user in group_admins:

        publication["uploaded_by"] = current_user
        new_pub = await db["publications"].insert_one(publication)
        created_pub = await db["publications"].find_one({"_id":new_pub.inserted_id})
        return created_pub
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

## LIST ALL PUBLICATION OBJECTS
@router.get("/")
async def get_all_publications():
    
    publication = await db["publications"].find().to_list(1000)
    return publication

## GET RESEARCH PUBLICATION OBJECT BY ID

@router.get("/{id}")
async def get_publication_by_id(id: str):
    
    publication = await db["publications"].find_one({"_id":id})
    return publication

## Update Publication Info by ID
@router.put("/{id}")
async def update_publication(id:str, publication: orgModel.Publication = Body(...), current_user:str = Depends(oauth2.get_current_user)):
    
    pub = {k: v for k, v in publication.dict().items() if v is not None}

    publication = await get_publication_by_id(id)
    publication = jsonable_encoder(publication)
    group_id = publication["owner_group"]

    group = await get_group_by_id(group_id)
    group = jsonable_encoder(group)
    organisation = await get_organisation(group["organisation"])
    organisation = jsonable_encoder(organisation)

    group_admins = group["admins"]
    group_admins.extend(organisation["super_admins"])
    group_admins.extend(organisation["admins"])
    group_admins.extend(group["super_admins"])

    if current_user in group_admins:
    # print(group)
        if len(pub) >= 1:
            update_result= await db["publications"].update_one({"_id":id}, {"$set":pub})

            if update_result.modified_count == 1:
                if (
                    updated_pub := await db["publications"].find_one({"_id": id})
                ) is not None:
                    return updated_pub

        if (existing_pub := await db["publications"].find_one({"_id": id})) is not None:
            return existing_pub
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

## DELETE PUBLICATION USING THE ID

@router.delete("/{id}")
async def delete_publication(id:str, current_user: str = Depends(oauth2.get_current_user)):

    publication = await get_publication_by_id(id)
    publication = jsonable_encoder(publication)
    group_id = publication["owner_group"]

    group = await get_group_by_id(group_id)
    group = jsonable_encoder(group)
    organisation = await get_organisation(group["organisation"])
    organisation = jsonable_encoder(organisation)

    group_admins = group["admins"]
    group_admins.extend(organisation["super_admins"])
    group_admins.extend(organisation["admins"])
    group_admins.extend(group["super_admins"])

    if current_user in group_admins:

        delete_result = await db["publications"].delete_one({"_id":id})
        

        if delete_result.deleted_count==1:
            return {
                "message":"File Deleted"
            }

        raise HTTPException(status_code=404, detail=f"Publicationwith id of {id} not found")
    
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)