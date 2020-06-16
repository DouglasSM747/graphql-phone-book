# main script python
import modules.controller as ct
import modules.screens as sc


class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


def main():
    sc.cls()
    op = int(input(bcolors.HEADER +
                   "Login (1)\nRegister New Account (2)\noption: " + bcolors.ENDC))
    if(op == 1):
        infos = sc.login()
    elif(op == 2):
        infoRegistrer = sc.registerUser()
        ct.addUser(infoRegistrer[0], infoRegistrer[1])
        main()
    else:
        main()
    idUSer = ""
    try:
        idUSer = ct.login(infos[0], infos[1])
    except:
        print(
            bcolors.FAIL + "\n--------check the fields entered--------\n" + bcolors.ENDC)
        # if error in login
    if(idUSer == "-1"):
        main()
    else:
        while(True):
            op = sc.menuUser()
            # select options menu case
            # -----------------------------------------------------------------------------------
            # Registrer new contact
            if(op == 1):
                infoRegistrer = sc.registerContact()
                try:
                    ct.addContact(
                        infoRegistrer['name'],
                        infoRegistrer['number'],
                        idUSer
                    )
                except:
                    print(
                        bcolors.FAIL + "\n--------check the fields entered--------\n" + bcolors.ENDC)
                    continue

                # -----------------------------------------------------------------------------------

                print(bcolors.OKGREEN +
                      "\n--------user add sucess--------\n" + bcolors.ENDC)

            # -----------------------------------------------------------------------------------
            # List contacts
            elif(op == 2):
                try:
                    arrayResult = ct.listContacts(idUSer)
                except:
                    print(
                        bcolors.FAIL + "\n--------check the fields entered--------\n" + bcolors.ENDC)
                    continue

                # -----------------------------------------------------------------------------------

                sc.cls()
                print(
                    bcolors.OKBLUE + "\n--------your contacts--------\n" + bcolors.ENDC)
                for i in arrayResult:
                    print("Name: ", i['name'], " <---> ",
                          "Number:", i['number'])
                input("\npress enter to continue . . .      ")
            elif(op == 3):
                print("1")
            elif(op == 4):
                break


main()
