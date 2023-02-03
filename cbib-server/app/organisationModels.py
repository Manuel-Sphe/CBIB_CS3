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
    description: Optional[str]
    # groups: List[str]

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{
                "org_name": "University of Cape Town",                
                "groups":[],
                "description": ""

            }
        }

class UpdateOrganisation(BaseModel):
    org_name: Optional[str]
    description: Optional[str]
    # co-ordinator: Optional[st]
    # groups: Optional[List[str]]

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{
                "org_name": "University of Cape Town",
                "description":"Who knows?"

            }
        }

class Publication(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    title: str = Field(...)
    abstract: str = Field(...)
    authors: List[str]
    owner_group: str
    collaborators: List[str] # ID's of all CAIR Member Contributors
    # content: str
    date_created: datetime
    last_modified: datetime = Field(default_factory=datetime.now())
    
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{
                "title":"Lorem ipsum dolor sit amet.",
                "abstract":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores magni nam beatae officiis minus ipsam, delectus atque facilis, nesciunt rem modi ipsum, velit voluptate molestiae architecto odio debitis quaerat exercitationem doloremque voluptatibus necessitatibus alias! Expedita voluptatibus pariatur ex perspiciatis eaque. Dolor possimus tempore distinctio quibusdam ipsam. Assumenda hic aperiam quibusdam?",
                "authors":["Tshiamo, Sphe, Jose"],
                "owner_group":"6332df06ca6ed4ee1a537192",
                "collaborators":["6332f4189a3803293a3f3047"],
                "date_created":datetime.now(),
                "last_modified":datetime.now()
            }

        }

class Access(BaseModel):
    level: str #user level
    roles: List[str] #store code of their role i.e Super Admin, Student, Researcher, Viewer

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        # json_encoders = {ObjectId: str}
        schema_extra = {

        }



class Member(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    


    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        # json_encoders = {ObjectId: str}
        schema_extra = {

        }

class AddMember(BaseException):
    access_group: str
    member_id: List[str]

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        # json_encoders = {ObjectId: str}
        schema_extra = {
            "access_group":"student_researchers",
            "member_id":["6332a5fb7b21e1d99952a1d4"]

        }

class ResearchGroup(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    group_name: str = Field(...)
    organisation: str = Field(...) #Store the Parent Organisation ID here.
    description: str = Field(...)
    # publications: List[Publication] # Store each publication that this group contributed 
    # admin()
    members: dict

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{
                "group_name":"KKP",
                "organisation":"6332da5b82bd851520ac3fb7",
                "description":"some fancy words here",
                "members": {
                    "group_coordinator": [],
                    "group_leaders":[],
                    "research_admins":[],
                    "researchers":[],
                    "student_researchers":[]
	
                }

            }
        }

class UpdateResearchGroup(BaseModel):
    group_name: Optional[str]
    description: Optional[str]  #Store the Parent Organisation ID here.
    # publications: List[Publication] # Store each publication that this group contributed 
    # members: List[Member]
    

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example":{
                "group_name":"KKP",
                "description":"We just try and always try"
                }
        }

# class ResearchGroup(BaseModel):
#     id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
#     group_name: str = Field(...)
#     organisation: str = Field(...) #Store the Parent Organisation ID here.
#     publications: List[Publication] # Store each publication that this group contributed 
#     members: List[Member]

#     class Config:
#         allow_population_by_field_name = True
#         arbitrary_types_allowed = True
#         json_encoders = {ObjectId: str}
#         schema_extra = {
#             "example":{
#                 "group_name":"KKP",
#                 "organisation":"6321d7a5e85cee8f30fd719a",
#                 "publications":[],
#                 "members":[]
#             }
#         }

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
