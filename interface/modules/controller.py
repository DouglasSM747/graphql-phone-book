import requests
import time

url = "http://localhost:4000/"


def addUser(email, password):
    print("a")


def listUsers():
    query = "{ users { email }}"
    data = requests.post(
        url, headers={"content-type": "application/json"}, json={'query': query})
    if(data.status_code == 200):
        return data.json()
    else:
        raise Exception("Query failed")


def login(email, password):
    query = '{checkUser(email: "'+email+'",password: "'+password+'")}'
    data = requests.post(
        url, headers={"content-type": "application/json"}, json={'query': query})
    if(data.status_code == 200):
        return data.json()['data']['checkUser']
    else:
        raise Exception("Query failed")
