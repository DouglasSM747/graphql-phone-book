# menu of options that can be performed on the system
def menuUser():
    op = 1
    while(op >= 1 and op <= 4):
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


def login():
    print("to enter the system it is necessary to login\n\n")
    email = input("email: ")
    password = input("password: ")
    return {email, password}
