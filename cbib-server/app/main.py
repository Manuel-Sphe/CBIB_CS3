from ast import main
from fastapi import FastAPI, Body, HTTPException,status
from . import database
from . models import Profile
from .routers import profile, groups
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()
app.include_router(profile.router)
app.include_router(groups.router)
db = database.get_database()


# Allow fronted running at localhost 
# origins = ['http://localhost:3000']

# #allow all the http methods, and headers 
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins = origins,
#     allow_credentials = True,
#     allow_methods = ['*'],
#     allow_headers=['*']
# )




    



