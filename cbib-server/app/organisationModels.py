from datetime import datetime
from pydantic import BaseModel, Field
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


class Organisation(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    org_name: str = Field(...)
    admins: Optional[List[str]]
    # groups: List[str]

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{
                "org_name": "University of Cape Town",
                "admins": ["i575hjuhjd6643d"],
                "groups":[]

            }
        }

class UpdateOrganisation(BaseModel):
    org_name: Optional[str]
    admins: Optional[List[str]]
    # groups: Optional[List[str]]

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{
                "org_name": "University of Cape Town",
                "admins": ["i575hjuhjd6643d"]

            }
        }

class Publication(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    title: str = Field(...)
    abstract: str = Field(...)
    authors: List[str]
    content: str
    date_created: datetime
    last_modified: datetime = Field(default_factory=datetime.now())
    
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {

        }

class Access(BaseModel):
    group: str #group id of the group 
    roles: List[str] #store code of their role i.e Super Admin, Student, Researcher, Viewer

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        # json_encoders = {ObjectId: str}
        schema_extra = {

        }



class Member(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    user: str #user Id of this member profile
    groups: List[Access] #Store member group access level info


    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        # json_encoders = {ObjectId: str}
        schema_extra = {

        }


class ResearchGroup(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    organisation: str = Field(...) #Store the Parent Organisation ID here.
    publications: List[Publication] # Store each publication that this group contributed 
    members: List[Member]

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{
                "organisation":"6321d7a5e85cee8f30fd719a",
                "publications":[],
                "members":[]
            }
        }
