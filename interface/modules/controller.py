import requests
import time

url = "http://localhost:4000/"


def addUser(email, password):
    query = 'mutation { addUser(email: "'+email + \
        '", password: "'+password+'"){ email } }'
    data = requests.post(
        url, headers={"content-type": "application/json"}, json={'query': query})
    if(data.status_code == 200):
        return data.json()
    else:
        raise Exception("Query failed")


def sendMessage(iduser, idcontact, message):
    query = 'mutation { sendMessage(iduser: '+str(iduser) + \
        ', idcontact: '+str(idcontact)+', message: "'+message+'"){ message } }'
    print("query executed: ", query)
    data = requests.post(
        url, headers={"content-type": "application/json"}, json={'query': query})
    if(data.status_code == 200):
        return data.json()
    else:
        raise Exception("Query failed")


def addContact(name, number, idUser):
    query = 'mutation { addContact(number: "'+number + \
        '", name: "'+name+'", iduser: '+idUser+' ) { name } }'
    data = requests.post(
        url, headers={"content-type": "application/json"}, json={'query': query})
    if(data.status_code == 200):
        return data.json()
    else:
        raise Exception("Query failed")


def listUsers():
    query = "{ users { email }}"
    data = requests.post(
        url, headers={"content-type": "application/json"}, json={'query': query})
    if(data.status_code == 200):
        return data.json()
    else:
        raise Exception("Query failed")


def listContacts(idUser):
    query = 'query { user( iduser: '+idUser + \
        '){ contacts{ name, number, idcontact } } }'
    data = requests.post(
        url, headers={"content-type": "application/json"}, json={'query': query})
    if(data.status_code == 200):
        return data.json()['data']['user']['contacts']
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
