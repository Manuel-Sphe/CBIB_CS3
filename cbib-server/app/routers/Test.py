import requests
import unittest



class TestStringMethods(unittest.TestCase):
    def test_get_users(self):

        r = requests.get('http://127.0.0.1:8000/users')
        self.assertEqual(r.status_code,200)
        self.assertEqual(r.json()[0]['first_name'],'Tshiamo')
    
    def test_get_user_by_name(self):
        # Searches an aleady existing username

        r = requests.get('http://127.0.0.1:8000/users/tshiamo123')
        self.assertEqual(r.status_code,200) # testing is status code is OK 
        self.assertEqual(r.json()['username'],'tshiamo123')
    
   


   
   

if __name__ == '__main__':
    unittest.main()