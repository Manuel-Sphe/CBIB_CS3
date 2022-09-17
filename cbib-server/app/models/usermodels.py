from datetime import datetime
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from bson import ObjectId


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



class UserInfo(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    first_name: str = Field(...)
    last_name: str = Field(...)
    email: str = Field(...)
    title: str = Field(...)
    education_level: str = Field(...)
    username: Optional[str]
    picture_link: Optional[str]
    
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "first_name": "Tshiamo",
                "last_name": "Phaahla",
                "email":"tshiamo@cair.org.za",
                "title": "Dr",
                "education_level": "PhD",

            }
            
        }

class UpdateUserInfo(BaseModel):

    username: Optional[str]
    first_name: Optional[str] 
    last_name: Optional[str]
    email: Optional[EmailStr]

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{
                "username":"tshiamo123",
                "first_name": "Tshiamo",
                "last_name": "Phaahla",
                "email":"tshiamo@cair.org.za",
            
            }
        }
