from fastapi import APIRouter, Request, Body, status, HTTPException, UploadFile, File
from .. import database
from pydantic import BaseModel, Field, BaseConfig
from bson import ObjectId
from datetime import datetime
from fastapi.encoders import jsonable_encoder
from typing import Optional



router = APIRouter(
    prefix="/uploads",
    tags = ["Uploads"]
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
    publication: str
    filename: str
    content_type: str
    file: dict
    headers: dict


## Upload File To The Database

@router.post("/",response_model=FileResponse)
async def upload_file(id:str, file: UploadFile = File(...)):

    file = jsonable_encoder(file)
    file["publication"] = id

    new_file = await db["uploads"].insert_one(file)
    created_file = await db["uploads"].find_one({"_id":new_file.inserted_id})
    # print(created_file)
    return created_file

## Get File by ID

@router.get("/{id}",response_model=FileResponse)
async def get_one_file(id:str):

    file = await db["uploads"].find_one({"_id":PyObjectId(id)})
    return file

## DELETE FILE 
@router.delete("/{id}")
async def delete_file(id:str):

    delete_result = await db["uploads"].delete_one({"_id":PyObjectId(id)})
    if delete_result.deleted_count==1:
            return {
                "message":"File Deleted"
            }
    raise HTTPException(status_code=404, detail=f"File with id of {id} not found")
