

from fastapi import FastAPI, Body, Depends,status , HTTPException
from . import database
from .routers import profile, groups
from fastapi.encoders import jsonable_encoder

#### to be removed 
from pydantic import BaseModel
from typing import Union
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext
from jose import JWTError,jwt
from datetime import datetime, timedelta

SECRET_KEY ="d92c06ffe42850c5329c1ac4ec1f5b69c1bf206275f3c045d7157415768afd72"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

class TokenData(BaseModel):
    username: Union[str, None] = None
class Token(BaseModel):
   access_token: str
   token_type: str

pwd_contex = CryptContext(schemes=['bcrypt'], deprecated='auto')
oath2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()
app.include_router(profile.router)
app.include_router(groups.router)
db = database.get_database()

fake_users_db = {
    "johndoe":{
        "username":"johndoe",
        "full_name":"John Doe",
        "email":"johndoe@example.com",
        "hashed_password":"fakehashedsecret",
        "disabled": False
    },
    "alice":{
        "username":"alice",
        "full_name":"Alice Wonderson",
        "email":"johndoe@example.com",
        "hashed_password":"fakehashedsecret2",
        "disabled": True,
    }
}


def fake_hash_password(password: str):
    return "fakehashed"+password





class User(BaseModel):
    username: str
    email: Union[str, None] = None
    full_name: Union[str, None] = None
    disabled: Union[bool, None] = None 

class UserInDB(User):
    hashed_password: str

def get_user(dataB, username :str):
    if username in dataB:
        user_dict = dataB[username]
        return UserInDB(**user_dict)

def verify_password(plain_passworrd, hashed_password):
    return pwd_contex.verify(plain_passworrd,hashed_password);

def get_password_hash(password):
    return pwd_contex.hash(password)


def fake_decode_token(token):
    # Not secured whatsover
    user  = get_user(fake_users_db,token)
    return user
    
def authenticate_user(fake_db, username: str , password: str):
    user = get_user(fake_db, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False 
    return user

def create_access_token(data: dict , expires_delta: Union[timedelta,None] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp":expire})
    encoded_jwt = jwt.encode(to_encode,SECRET_KEY,algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oath2_scheme)):
    user = fake_decode_token(token)
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail ="Invalid authentication credentials",
        headers={"WWW-Authenticate":"Bearer"},
    )

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username : str = payload.get("sub");

        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)

    except JWTError:
        raise credentials_exception
    user = get_user(fake_users_db,username=token_data.username)
    if user is None:
        raise credentials_exception
    return user

async def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400,detail="Inactive user")
    return current_user

@app.post("/token",response_model=Token)
async def login_for_acees_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(fake_users_db,form_data.username, form_data.password)

    if not user:
            raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED, 
            detail = "Incorrect username or password",
            headers= {"WWW-Authenticate":"Bearer"}
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={'sub':user.username}, expires_delta= access_token_expires
    )

    return {'access_token':access_token,'token_type':'bearer'}

@app.get("/users/me")
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user

@app.get('users/me/itemes')
async def read_own_items(current_user: User = Depends(get_current_active_user)):
    return [{'items_id':'Foo', 'owner':current_user.username}]

@app.post("/user")
async def root(user):

    add_user = jsonable_encoder(user)
    new_user = await db["publication"].insert_one(add_user)
    created_user = await db["publication"].find_one({"_id":new_user.inserted_id})
    return created_user


@app.get("/{name}")
async def look_home(name: str):
    
    users = await db["user"].find_one({"name":name})
    return users


