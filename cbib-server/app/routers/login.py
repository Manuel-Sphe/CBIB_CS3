from fastapi import APIRouter, Request,Form, status,HTTPException, status, Depends
from .. import database, models
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm


router = APIRouter(
    prefix="/login",
    tags = ["Login"]
)

db = database.get_database()
 
def fake_hash_password(password: str):
    return "fakehashed"+password

@router.post("/token")
async def login(username: str = Form() , password: str =Form()):
    user_dict = await db['users'].find_one({'username':username})
    if not user_dict:
        # print("hello")
        raise HTTPException(status_code=400, detail='Incorrect username or password')
        # print("hello")
    user = models.UserInfo(**user_dict)
    hashed_password = fake_hash_password(password)

    if not hashed_password == user.hashed_password:
        raise HTTPException(status_code=400, detail=f'Incorrect username or password{user.hashed_password}')
    
    return {'login successfully!!':'yes'}














