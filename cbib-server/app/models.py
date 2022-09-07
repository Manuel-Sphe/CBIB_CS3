from datetime import datetime
from pydantic import BaseModel, Field
from typing import List, Optional, Union
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



class ResearchGroup(BaseModel):  # type: ignore
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
    first_name: str
    last_name: str
    email: str
    groupsAssigned: Optional[List[str]]
    organisation: str
    publications: Optional[List[str]]


    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoder = {ObjectId: str}
        schema_extra = {
            "example": {
            "first_name": "Tshiamo",
            "last_name": "Phaahla",
            "email":"tshiamo@cair.org.za",
            "organisation":"University of Cape Town"

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
    user: Profile = Field(...)
    username: str = Field(...)
    roles: List[str]
    groupsAssigned: Optional[List[ResearchGroup]]


    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{

            "user": {
                "first_name": "Tshiamo",
                "last_name": "Phaahla",
                "email":"tshiamo@cair.org.za",
                "organisation":"University of Cape Town"
            },
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

class PeerReview(BaseModel):
    publication: Publication
    reviewer: UserInfo
    review: str

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True


class ResearchGroup(BaseModel):
    organisation: str
    admin: List[UserInfo]
    groupCode: str
    members: List[UserInfo]
    publications: List[Publication]

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
