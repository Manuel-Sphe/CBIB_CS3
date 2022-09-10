import motor.motor_asyncio
import time


database = ""

while True:
    try:
        client = motor.motor_asyncio.AsyncIOMotorClient("mongodb+srv://Sphesihle_db:svoopaQdqy5sv8Xa@cluster0.ubgnonw.mongodb.net/?retryWrites=true&w=majority", tls=True, tlsAllowInvalidCertificates=True)
        database = client.cbib
        break
    except Exception as error:
        print("Unable to Connect")
        print("Error: ", error)
        time.sleep(2)


def get_database():
    return database
