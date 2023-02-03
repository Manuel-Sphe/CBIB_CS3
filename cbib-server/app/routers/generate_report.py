from fastapi import APIRouter, Request,Form, status,HTTPException, status, Depends
from .. import database, models
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
# from jose import JWTError,jwt
# from passlib.context import CryptContext



router = APIRouter(
    prefix="/create_report",
    tags = ["Generate Reports"]
)

@router.post("/{group_id}")
async def create_report(group_id:str):
    return