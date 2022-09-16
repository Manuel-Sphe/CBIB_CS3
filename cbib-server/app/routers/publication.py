from fastapi import APIRouter, Request,Body, status,HTTPException, UploadFile,File
from .. import database, models, organisationModels as orgModel
from fastapi.encoders import jsonable_encoder


router = APIRouter(
    prefix="/publications",
    tags = ["Research Publications"]
)

db = database.get_database()

## CREATE RESEARCH PUBLICATION OBJECT

@router.post("/")
async def create_publication(publication: orgModel.Publication):
    
    publication = jsonable_encoder(publication)

    new_pub = await db["publications"].insert_one(publication)
    created_pub = await db["publications"].find_one({"_id":new_pub.inserted_id})
    return created_pub


## GET RESEARCH PUBLICATION OBJECT BY ID

@router.get("/{id}")
async def get_publication(id: str):
    
    publication = await db["publications"].find_one({"_id":id})
    return publication

## Update Publication Info by ID
@router.put("/{id}")
async def update_publication(id:str, publication: orgModel.Publication = Body(...)):
    
    pub = {k: v for k, v in publication.dict().items() if v is not None}
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

## DELETE PUBLICATION USING THE ID

@router.delete("/{id}")
async def delete_publication(id:str):

    delete_result = await db["publications"].delete_one({"_id":id})

    if delete_result.deleted_count==1:
        return {
            "message":"File Deleted"
        }

    raise HTTPException(status_code=404, detail=f"Publicationwith id of {id} not found")