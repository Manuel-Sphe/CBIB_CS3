from fastapi import APIRouter, Request, Body, status, HTTPException, UploadFile, File, Depends
from .. import database, oauth2
from pydantic import BaseModel, Field, BaseConfig
from bson import ObjectId
from datetime import datetime
from fastapi.encoders import jsonable_encoder
from typing import BinaryIO, Optional
from .groups import get_group_by_id
# from . import groups
from .organisation import get_organisation
import base64
from bson import binary
from .publication import get_publication_by_id
# method1 = groups.create_group

router = APIRouter(
    prefix="/uploads",
    tags = ["Publication Uploads"]
)

db = database.get_database()


class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

class MongoBase(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id")

    class Config(BaseConfig):
        orm_mode = True
        allow_population_by_field_name = True
        json_encoders = {
            datetime: datetime.isoformat,
            ObjectId: str
        }

    def __init__(self, **pydict):
        super().__init__(**pydict)
        self.id = pydict.get('_id')

# class FileResponse(MongoBase):
#     publication: str
#     filename: str
#     content_type: str
#     file: dict
#     headers: dict

class FileResponse(MongoBase):
    # file: bytes
    publication: str
    file: bytes
    uploaded_by: str
## Upload File To The Database
@router.get("/")
async def get_all():
    f = await db["uploads"].find_one({"_id":PyObjectId("63335e2b352971fcb4c6cfb3")})
    
    return f["file"]
    # codecs.decode(f["file"], encoding='base-64', errors='strict')
    # a = 'eW91ciB0ZXh0'
    f["file"] = base64.b64decode(f["file"])
    # f["file"] = f["file"].decode('base-64')
    return(f)
    #return f

@router.post("/{pub_id}", response_model=FileResponse)
async def upload_file(pub_id:str, file:  UploadFile = File(...), current_user: str = Depends(oauth2.get_current_user)):
    
    pub = await db["publications"].find_one({"_id":pub_id})
    pub = jsonable_encoder(pub)
    group_id = pub["owner_group"]
    group = await get_group_by_id(group_id)
    group = jsonable_encoder(group)
    organisation = await get_organisation(group["organisation"])
    organisation = jsonable_encoder(organisation)

    group_admins = group["admins"]
    group_admins.extend(organisation["super_admins"])
    group_admins.extend(organisation["admins"])
    group_admins.extend(group["super_admins"])
    
    # if current_user in group_admins:
        # print(file.file)
    # file["publication"] = id
    if current_user in group_admins:
        content = await file.read()
        b64 = base64.b64encode(content)

        upload_obj = {
            "publication":pub_id,
            "file": b64,
            "uploaded_by":current_user
        }
   
    
        new_file = await db["uploads"].insert_one(upload_obj)
        print()
        created_file = await db["uploads"].find_one({"_id":PyObjectId(new_file.inserted_id)})
        # print(b64==created_file["file"])
        return created_file

    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

## Get File by ID

@router.get("/{id}",response_model=FileResponse)
async def get_one_file(id:str):

    file = await db["uploads"].find_one({"_id":PyObjectId(id)})
    return file

## DELETE FILE 
@router.delete("/{id}")
async def delete_file(id:str, current_user: str = Depends(oauth2.get_current_user)):

    pub_upl = await get_one_file(id)
    #pub_upl = jsonable_encoder(pub_upl)

    pub = await get_publication_by_id(pub_upl["publication"])
    pub = jsonable_encoder(pub)
    # print(pub)
    group_id = pub["owner_group"]
    group = await get_group_by_id(group_id)
    group = jsonable_encoder(group)
    organisation = await get_organisation(group["organisation"])
    organisation = jsonable_encoder(organisation)

    group_admins = group["admins"]
    group_admins.extend(organisation["super_admins"])
    group_admins.extend(organisation["admins"])
    group_admins.extend(group["super_admins"])
    
    if current_user in group_admins:

        delete_result = await db["uploads"].delete_one({"_id":PyObjectId(id)})
        if delete_result.deleted_count==1:
                return {
                    "message":"File Deleted"
                }
        raise HTTPException(status_code=404, detail=f"File with id of {id} not found")
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
