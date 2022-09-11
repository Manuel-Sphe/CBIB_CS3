from fastapi import APIRouter, Request,Body, status,HTTPException, status, Depends
from .. import database, models
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm




router = APIRouter(
    prefix="/login",
    tags = ["Login"]
)

db = database.get_database()

def fake_hash_password(password: str):
    return 'fakehashed'+password

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")





