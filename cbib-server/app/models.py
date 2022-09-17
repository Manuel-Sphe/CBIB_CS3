from datetime import datetime
import profile
from fastapi import UploadFile
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



class ResearchGroup(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    title: str
    code: str

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "title": "UCT NLP Bilingual NLP",
            "code": "UCTBNLP32"
        }
        


class Profile(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    first_name: str = Field(...)
    last_name: str = Field(...)
    email: Optional[EmailStr] = Field(...)
    groupsAssigned: Optional[List[str]]
    organisation: str
    publications: Optional[List[str]]
    picture: Optional[UploadFile]
    
    


    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
            "first_name": "Tshiamo",
            "last_name": "Phaahla",
            "email":"tshiamo@cair.org.za",
            "organisation":"University of Cape Town",
            "hashed_password":"fakehashedsecret",

            }
            
            
        }


class ResearchGroupInfo(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    code: str = Field (...)
    group: ResearchGroup = Field(...)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {

            "code": "UCTBNLP32",
            "group": {
                "title": "UCT NLP Bilingual NLP",
                "code": "UCTBNLP32"
                }
            }
        }
        
    
class UserInfo(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    username: str = Field(...)
    roles: List[str]
    hashed_password:Optional[str]
    groupsAssigned: Optional[List[ResearchGroup]]
    first_name: str = Field(...)
    last_name: str = Field(...)
    email: Optional[EmailStr] = Field(...)
    organisation: Optional[str]
    publications: Optional[List[str]]
    picture: Optional[UploadFile]


    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{

            "first_name": "Tshiamo",
            "last_name": "Phaahla",
            "email":"tshiamo@cair.org.za",
            "organisation":"University of Cape Town",
            "hashed_password":"fakehashedsecret",
            "username": "tshiamo",
            "roles": ["Admin"],
            
            }
        }
class UpdateUserInfo(BaseModel):
    username: Optional[str]
    roles: Optional[List[str]]
    hashed_password:Optional[str]
    groupsAssigned: Optional[List[ResearchGroup]]
    first_name: str = Field(...)
    last_name: str = Field(...)
    email: Optional[EmailStr] = Field(...)
    groupsAssigned: Optional[List[str]]
    organisation: str
    publications: Optional[List[str]]
    picture: Optional[UploadFile]

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{

        
            "first_name": "Tshiamo",
            "last_name": "Phaahla",
            "email":"tshiamo@cair.org.za",
            "organisation":"University of Cape Town",
            "hashed_password":"fakehashedsecret",
        
            "username": "tshiamo",
            "roles": ["Admin"],
            "groupsAssigned": [{
                "title":"UCT Bilingual NLP",
                "code": "UCTBNLP32"
            }]
            }
        }

class Metadata(BaseModel):
    author: List[str] 
    datecreated: datetime = Field(...)
    datemodified: datetime
    filesize: int

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class Publication(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    title: str
    researchLeader: UserInfo
    metadata: dict
    groupPublishing: str
    abstract: str
    filepath: str

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId:str}

class PeerReview(BaseModel):
    publication: Publication
    reviewer: UserInfo
    review: str

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId:str}


class ResearchGroup(BaseModel):
    organisation: str
    admin: List[UserInfo]
    groupCode: str
    members: List[UserInfo]
    publications: List[Publication]

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId:str}


