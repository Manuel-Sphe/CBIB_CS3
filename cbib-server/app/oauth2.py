from jose import JWTError, jwt
from datetime import datetime, timedelta
from fastapi import Depends, status, HTTPException
from fastapi.security import OAuth2PasswordBearer
from .config import settings
from typing import Optional
from pydantic import BaseModel
from . import schema, database

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# SECRET KEY
# Alogorithm HS256
# Expiration Time of Token

# openssl rand -hex 32
db = database.get_database()

SECRET_KEY = settings.secret_key
ALGORITHM = settings.algorithm
ACCESS_TOKEN_EXPIRE_MINUTES = settings.access_token_expire_minutes

def create_access_token(data: dict):
    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

    return encoded_jwt

def verify_access_token(token: str, credentials_exception):
    
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        
        id: str = payload.get("user_id")

        if id is None:
            raise credentials_exception
        token_data = schema.TokenData(id=id)
    except JWTError:
        raise credentials_exception
    
    return token_data

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=f"Could not validate credentials",
        headers={"WWW-authenticate": "Bearer"})

    token = verify_access_token(token, credentials_exception)

    user = await db["users"].find_one({"_id":token.id})

    if user:
        user = dict(user)
        return user["_id"]
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

