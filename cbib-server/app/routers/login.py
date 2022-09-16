from fastapi import APIRouter, Request,Form, status,HTTPException, status, Depends
from .. import database, models
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError,jwt
from passlib.context import CryptContext



router = APIRouter(
    prefix="/login",
    tags = ["Login"]
)

db = database.get_database()
 
def fake_hash_password(password: str):
    return "fakehashed"+password

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='login/token')

#opensll rand -hex 32
SECRET_KEY = "25bf21908fd7d1c645995ecc116d181c10111acc9a795c72f3b32185f6639573"


@router.get("/users/")
async def read_users(token: str = Depends(oauth2_scheme)):
    return {"token":token}

@router.post("/token")
async def login(form_data : OAuth2PasswordRequestForm = Depends()):
    user_dict = await db['users'].find_one({'username':form_data.username})
    if not user_dict:
        # print("hello")
        raise HTTPException(status_code=400, detail='Incorrect username or password')
        # print("hello")
    user = models.UserInfo(**user_dict)
    hashed_password = fake_hash_password(form_data.password)

    if not hashed_password == user.hashed_password:
        raise HTTPException(status_code=400, detail=f'Incorrect username or password{user.hashed_password}')
    
    return {'login successfully!!':'yes'}














