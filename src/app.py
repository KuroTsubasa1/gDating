from flask import Flask, request, session
from flask_socketio import SocketIO
from flask import render_template
import requests
from flask_socketio import send, emit
from bs4 import BeautifulSoup
import mysql.connector
from mysql.connector import errorcode
import os
from subprocess import call

from passlib.handlers.pbkdf2 import pbkdf2_sha256

from src.sql.sqlDao import *
from src.registration.registrationDao import *



# init the flask server
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
# init websokets (what a pain)
socketio = SocketIO(app)

#index page
@app.route('/')
def hello_world():
    #return render_template("index_no_template.html")
    return render_template("greeSquare/landing.html")

# index page of gdatind (ht)
@app.route('/gdating/')
def indexOfGDating():
    return render_template("index.html")

@app.route('/nhreader')
def openNHentaiReader():
    return render_template("nhentai/flex.html")

@app.route('/info')
def info():
    return render_template("info.html")

@app.route('/register')
def register():
    return render_template("register.html")

@app.route('/blog')
def blog():
    return render_template("blog/blog.html")

@app.route('/dsa')
def dsaGen():
    return render_template('dsaGen.html')

@app.route('/wp-login.php')
def wplogin():
    return render_template('wp-login-add.html')

@app.route('/noTanksAllowed')
def noTaAlo():
    return render_template('unity/index.html')

@app.route('//blender-discord-collaboration-1')
def collab():
    return render_template('unity/collab/index.html')

@app.route('/blender-discord-collaboration-3')
def collab3():
    return render_template('readMeCollab3.html')

@app.route('/lasseharm')
def lasseharm():
    return render_template('greeSquare/landing.html')

@app.route('/google1a0ca61e6beca65d.html')
def googleVerify():
    return render_template('google1a0ca61e6beca65d.html')

@app.route('/test')
def testIcs():
    return render_template('test.html')

@app.route('/webSkt')
def webSktTest():
    return render_template('webSocketTest.html')

@app.route('/updateSever')
def updateSide():
    print('running remote update!')
    call('gd')
    call('ups')
    print('finished remote update!')
    return render_template('update.html')

#@app.route('/sqlTest', methods=['POST'])
#def sqlTest():
#
#    tableName = 'testTable'
#    Fields = 'value'
#    Data = request.form['test_data']
#    Data = "'" + Data + "'"
#    print('Data: ' + Data)
#    print("INSERT INTO {} ({}) VALUES ({})".format(tableName, Fields, Data))
#    valueData = ("INSERT INTO {} ({}) VALUES ({})").format(tableName, Fields, Data)
#
#    executeSql(valueData)
#
#    return render_template("sqlTest.html")



# this should not be here but i am too lazy to move it
@socketio.on('a')
def aa(json, cRS):
    request = requests.get(json)
    content = request.content
    soup = BeautifulSoup(content, "html.parser")
    elements = soup.find('img', {'class':'lazyload'})['data-src']
    print(elements)
    pattern = '/'
    id = elements.split(pattern, 5)
    print(id[4])
    imgFormart = id[5]
    imgFormart = imgFormart.split('.',1)
    print(imgFormart[1])
    pageNum = num_apperances_of_tag('img',content)
    pageNum = pageNum/2
    pageNum = pageNum - 3
    print(pageNum)
    socketio.emit('imgUrl', {'data': id[4], 'pageFormat': imgFormart[1], 'pageNumber': pageNum, 'cRS': cRS})


clients = []


@socketio.on('data')
def printData(data):
    print(data)

@socketio.on('connect')
def connect():
    clients.append(request.namespace)
    print(clients)


@socketio.on('disconnect')
def disconnect():
    clients.remove(request.namespace)
    print(clients)


######################

# userspace
@app.route('/demo/login')
def demoLogin():
    return render_template('/vue/login.html')


@app.route('/demo/register')
def demoRegister():
    return render_template('/vue/register.html')


# api endpoints

@app.route('/api/login', methods=['POST'])
def apiLogin():
    validUser = False
    username = request.form['username']
    password = request.form['password']

    validUser = validateUser(username, password)

    if validUser == True:
        return render_template('/vue/dashboard.html')
#        return render_template('/vue/dashboard.html', username=session['username'])
    else:
        return  render_template('/vue/login.html')


@app.route('/api/register', methods=['POST'])
def apiRegister():
    username = request.form['username']
    password = request.form['password']
    print(username)
    print(password)
    registerUser(username, password)
    return render_template('/vue/login.html')



# ajax from server
@app.route('/some-url')
def get_data():
    testVar = 'testVar'
    testNumber = 10
    return render_template('greeSquare/landing.html', testVar=testVar, testNumber=testNumber)


def num_apperances_of_tag(tag_name, html):
    soup = BeautifulSoup(html, "html.parser")
    return len(soup.find_all(tag_name))

if __name__ == '__main__':
    socketio.run(app)
