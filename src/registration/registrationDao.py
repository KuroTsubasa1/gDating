from passlib.handlers.pbkdf2 import pbkdf2_sha256
from  src.sql.sqlDao import *
from passlib.apps import custom_app_context as pwd_context

def registerUser(username, password):

    hash = pbkdf2_sha256.hash(password)

    rows = ['username', 'password']
    data = [username, hash]
    insertSql('users', rows, data)


def validateUser(username, password):
    validUser = False
    print(username)
    print(password)
    cnx  = connect()

    sql = "SELECT username, password FROM users WHERE username = '{}'".format(username)

    print(sql)
    cursor = cnx.cursor()

    cursor.execute(sql)

    for (dbusername, dbpassword) in cursor:
        print(dbusername)
        print(dbpassword)
        if dbusername == username and pbkdf2_sha256.verify(password, dbpassword):
            validUser = True
        else:
            validUser = False


    return validUser