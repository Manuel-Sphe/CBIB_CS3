from fastapi import APIRouter, Depends, status, HTTPException, Response
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from .. import schema, oauth2, database, utils
from fastapi.encoders import jsonable_encoder


router = APIRouter(
    tags=['Authentication']
    )

db = database.get_database()


@router.post("/login", response_model=schema.Token)
async def login(user_credentials: OAuth2PasswordRequestForm = Depends()):

    user  = await db["users"].find_one({"email":user_credentials.username})

    user = jsonable_encoder(user)
    if not user:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=f"Invalid Credentials")

    if not utils.verify(user_credentials.password, user["password"]):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=f"Invalid Credentials")

    # create a token
    access_token = oauth2.create_access_token(data={"user_id": user["_id"]})
    # return token
    return {"access_token": access_token, "token_type": "bearer" }

@router.put("/change_password/{id}")
async def change_password(id: str, new_password: str, current_user: str = Depends(oauth2.get_current_user)):
    
    if id == current_user:
        hashed_password = utils.hash(new_password)
        user = await db["users"].find_one({"_id":id})
        user = jsonable_encoder(user)
        user.pop("_id")
        user["password"]=hashed_password
        update_result= await db["users"].update_one({"_id":id}, {"$set":user})
        if update_result.modified_count == 1:
            if (
                updated_profile := await db["users"].find_one({"_id": id})
            ) is not None:
                return updated_profile
                # print(updated_group)

    if (existing_profile := await db["users"].find_one({"_id": id})) is not None:
        return existing_profile


    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
