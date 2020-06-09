# menu of options that can be performed on the system
def menuUser():
    op = 1
    print("welcome to your phone book\n\n")
    print("1 - register new contacts \n")
    print("2 - list contacts\n")
    print("3 - your messages\n")
    print("4 - exit system\n")
    op = int(input("enter the desired option: "))
    if(op < 1 or op > 4):
        menuUser()
    else:
        return op


def registerContact():
    name = input("name contact: ")
    number = input("number contact: ")
    return {"name": name, "number": number}


def cls():
    print("\n"*40)


def login():
    print("To enter the system it is necessary to login (check your email and password)\n\n")
    email = input("email: ")
    password = input("password: ")
    return [email, password]
