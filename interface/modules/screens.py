
class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

# menu of options that can be performed on the system


def menuUser():
    cls()
    op = 1
    print(bcolors.HEADER + "welcome to your phone book\n\n" + bcolors.ENDC)
    print("1 - register new contacts \n")
    print("2 - list contacts\n")
    print("3 - send messages\n")
    print("4 - exit system\n")
    op = int(input("enter the desired option: "))
    cls()
    if(op < 1 or op > 4):
        menuUser()
    else:
        return op


def listMessages(List):
    for i in range(len(List)):
        print(bcolors.BOLD + i, "           ", List[i] + bcolors.ENDC)


def registerContact():
    name = input("name contact: ")
    number = input("number contact: ")
    cls()
    return {"name": name, "number": number}


def cls():
    print("\n"*40)


def registerUser():
    print("enter your credentials\n\n")
    email = input("email: ")
    password = input("password: ")
    cls()
    return [email, password]


def login():
    print("To enter the system it is necessary to login (check your email and password)\n\n")
    email = input("email: ")
    password = input("password: ")
    cls()
    return [email, password]
