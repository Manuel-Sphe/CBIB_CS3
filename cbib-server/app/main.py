from . models import Profile

from .routers import profile, groups, organisation, publication, uploads, users, login, media_uploads
from fastapi.encoders import jsonable_encoder

app = FastAPI()
app.include_router(profile.router)
app.include_router(organisation.router)
app.include_router(groups.router)
app.include_router(publication.router)
app.include_router(uploads.router)
app.include_router(media_uploads.router)
app.include_router(login.router)


db = database.get_database()




    



