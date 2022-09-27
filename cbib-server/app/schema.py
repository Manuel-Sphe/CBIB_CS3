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



class UserLogin(BaseModel):

    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    id: Optional[str]

class CreateUser(BaseModel):

    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    first_name: str = Field(...)
    last_name: str = Field(...)
    email: EmailStr = Field(...)
    password: str = Field(...)
    role: str

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "first_name": "Tshiamo",
                "last_name": "Phaahla",
                "email": "tshiamo@CS3Cair.org.za",
                "password": "Password123",
                "role": "SuperAdmin"
            }
        }
    # hashed_password:Optional[str]
    # groupsAssigned: Optional[List[ResearchGroup]]
