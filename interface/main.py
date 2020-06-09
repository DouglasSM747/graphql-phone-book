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
    infos = sc.login()
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
        sc.cls()
        while(True):
            op = sc.menuUser()
            sc.cls()
            # select options menu case

            # -----------------------------------------------------------------------------------
            # Registrer new contact
            if(op == 1):
                infoRegistrer = sc.registerContact()
                sc.cls()
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
                input("\npress enter to continue . . .  ")


main()
