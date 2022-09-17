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
    owner_group: str # the id of the group which owns this publication
    cair_contributors: List[str]
    # content: str
    # date_created: datetime = Field(default_factory=datetime.now().)
    # last_modified: datetime = Field(default_factory=datetime.now())
    
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "title":"My Publication File",
                "abstract":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, neque magni! Aperiam et amet ratione sapiente non ut sequi omnis, tempore dicta doloribus excepturi at id veritatis in modi sunt.",
                "authors":["User 1", "User2","User3"],
                "cair_contributors":["6325bb90af32380d1e334a73","6325bb96af32380d1e334a74"],
                "owner_group":"6325bda22d7f69c5908c8793"

            }

        }

class Access(BaseModel):
    group_id: str #group id of the group 
    roles: str #store code of their role i.e Super Admin, Student, Researcher, Viewer

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        schema_extra = {

        }



class Member(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    user: str #user Id of this member profile
    groups: List[Access] #Store member group access level info


    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            # example

        }


class ResearchGroup(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    group_name: str = Field(...)
    organisation: str = Field(...) #Store the Parent Organisation ID here.
    members: List[Member]
    

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{
                "group_name":"KKP",
                "organisation":"6321d7a5e85cee8f30fd719a",
                "members":[]
            }
        }

class UpdateResearchGroup(BaseModel):
    group_name: Optional[str]
    organisation: Optional[str]  #Store the Parent Organisation ID here.
    # publications: List[Publication] # Store each publication that this group contributed 
    # members: List[Member]
    

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{
                "group_name":"KKP",
                "organisation":"6321d7a5e85cee8f30fd719a"            }
        }

class ResearchGroup(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    group_name: str = Field(...)
    organisation: str = Field(...) #Store the Parent Organisation ID here.
    publications: List[Publication] # Store each publication that this group contributed 
    members: List[Member]

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{
                "group_name":"KKP",
                "organisation":"6321d7a5e85cee8f30fd719a",
                "publications":[],
                "members":[]
            }
        }

# class MongoBase(BaseModel):
#     id: Optional[PyObjectId] = Field(alias="_id")

#     class Config(BaseConfig):
#         orm_mode = True
#         allow_population_by_field_name = True
#         json_encoders = {
#             datetime: datetime.isoformat,
#             ObjectId: str
#         }

#     def __init__(self, **pydict):
#         super().__init__(**pydict)
#         self.id = pydict.get('_id')


class PublicationFile(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    publication_ref: str = Field(...) #id of the publication this file belongs to

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{
            "publication_ref":"ihfvbvf75775"

        }
    }
