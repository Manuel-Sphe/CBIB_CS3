from fastapi import APIRouter, Request,Body, status,HTTPException, status, Depends
from .. import database, models


router = APIRouter(
    prefix="/login",
    tags = ["Login"]
)

db = database.get_database()

