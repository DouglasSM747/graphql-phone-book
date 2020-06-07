# main script python
import modules.controller as ct
import modules.screens as sc


def main():
    infos = sc.login()
    result = ""
    try:
        result = ct.login(infos[0], infos[1])
    except:
        print("\ncheck the fields entered\n")
    # if error in login
    if(result == False):
        main()
    else:
        print("hello user")


main()
