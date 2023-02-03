from email.policy import HTTP
from fastapi import APIRouter, Request, Body, status, HTTPException, UploadFile, File, Depends
from .. import database, oauth2
from pydantic import BaseModel, Field, BaseConfig
from bson import ObjectId
from datetime import datetime
from fastapi.encoders import jsonable_encoder
from typing import Optional
import base64



router = APIRouter(
    prefix="/media/picture",
    tags = ["Media Uploads"]
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

class FileResponse(MongoBase):
    profile: str
    filename: str
    content_type: str
    file: dict
    headers: dict


## Upload File To The Database

@router.post("/",response_model=FileResponse)
async def upload_profile_picture(id:str, file: bytes = File(...),current_user:str = Depends(oauth2.get_current_user)):


    if current_user:
        content = await file.read()
        b64 = base64.b64encode(content)

        upload_pic = {
            "owner":current_user,
            "file": b64,
            "uploaded_date": datetime.now()
            # "uploaded_by":current_user
        }
        new_file = await db["mediafiles"].insert_one(upload_pic)
        # print(new_file.inserted_id)
        created_file = await db["mediafiles"].find_one({"_id":new_file.inserted_id})
        # print(created_file)
        return created_file
    else:
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED)
   
   
## Get File by ID

@router.get("/{id}",response_model=FileResponse)
async def get_profile_picture(id:str):

    file = await db["mediafiles"].find_one({"_id":PyObjectId(id)})
    return file

## DELETE FILE 
@router.delete("/{id}")
async def delete_file(id:str, current_user: str = Depends(oauth2.get_current_user)):

    owner = await get_profile_picture(id)
    owner = jsonable_encoder(owner)
    if current_user == owner["owner"]:
        delete_result = await db["mediafiles"].delete_one({"_id":PyObjectId(id)})
        if delete_result.deleted_count==1:
                return {
                    "message":"File Deleted"
                }
        raise HTTPException(status_code=404, detail=f"File with id of {id} not found")
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
