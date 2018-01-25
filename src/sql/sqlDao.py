import os
import mysql.connector
from mysql.connector import errorcode


def connect():
    # read config.conf for sql server
    path = os.path.dirname(os.path.abspath(__file__))
    words = ""
    with open(path + '/../config.conf', 'r') as f:
        data = f.readlines()
        print(data)
        i = 0
        for line in data:
            words = line.split(':')

    # connecting to db
    cnx = mysql.connector.connect(user=words[0], password=words[1],
                                  host=words[2],
                                  database=words[3])

    return cnx


def insertSql(tableName, fields, data):
    sqlFields = ''
    sqlData = ''

    for i in range(len(data)):
        data[i] = "'" + data[i] + "'"

    for i in range(len(fields)):
        print(len(fields))
        print('i ' + str(i))
        if i == len(fields) - 1:
            sqlFields += fields[i]
        else:
            sqlFields += fields[i] + ', '
        print(sqlFields)

    for i in range(len(data)):
        print('i ' + str(i))
        if i == len(data) - 1:
            sqlData += data[i]
        else:
            sqlData += data[i] + ', '
        print(sqlData)

    print("INSERT INTO {} ({}) VALUES ({})".format(tableName, sqlFields, sqlData))
    sql = ("INSERT INTO {} ({}) VALUES ({})").format(tableName, sqlFields, sqlData)

    executeSql(sql)


def selectSql(tableName, target, fields, data):
    pass

def executeSql(sql):
    cnx = connect()
    cursor = cnx.cursor()

    # run sql
    print('sql: ' + sql)
    cursor.execute(sql)

    cnx.commit()
    cursor.close()
    cnx.close()


