import motor.motor_asyncio
import time


database = ""

while True:
    try:
        client = motor.motor_asyncio.AsyncIOMotorClient("mongodb+srv://cbibAdmin:FngxuhFN66Di#rm@cluster0.npegalb.mongodb.net/?retryWrites=true&w=majority", tls=True, tlsAllowInvalidCertificates=True)
        database = client.cbib
        break
    except Exception as error:
        print("Unable to Connect")
        print("Error: ", error)
        time.sleep(2)


def get_database():
    return database