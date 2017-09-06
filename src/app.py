from flask import Flask
from flask_socketio import SocketIO
from flask import render_template
import requests
from flask_socketio import send, emit
from bs4 import BeautifulSoup
import mysql.connector
from mysql.connector import errorcode
import os

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

@app.route('/blender_dc_collab')
def collab():
    return render_template('unity/collab/index.html')

@app.route('/lasseharm')
def lasseharm():
    return render_template('greeSquare/landing.html')

@app.route('/google1a0ca61e6beca65d.html')
def googleVerify():
    return render_template('google1a0ca61e6beca65d.html')

@app.route('/ics')
def testIcs():
    return render_template('test.ics')

@app.route('/sqlTest')
def sqlTest():

    tableName = 'testTable'
    Fields = 'value'
    Data = "'Lasse'"
    print("INSERT INTO {} ({}) VALUES ({})".format(tableName, Fields, Data))
    valueData = ("INSERT INTO {} ({}) VALUES ({})").format(tableName, Fields, Data)

    executeSql(valueData)

    return render_template("sqlTest.html")


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

def executeSql(sql):

    # read config.conf for sql server
    path = os.path.dirname(os.path.abspath(__file__))
    words =""
    with open(path+'/config.conf', 'r') as f:
        data = f.readlines()
        print(data)
        i = 0
        for line in data:
            words = line.split(':')

    # connecting to db
    cnx = mysql.connector.connect(user=words[0], password=words[1],
                                  host=words[2],
                                  database=words[3])
    cursor = cnx.cursor()

    # run sql
    print('sql: '+sql)
    cursor.execute(sql)

    cnx.commit()

    cursor.close()
    cnx.close()

def num_apperances_of_tag(tag_name, html):
    soup = BeautifulSoup(html, "html.parser")
    return len(soup.find_all(tag_name))

if __name__ == '__main__':
    socketio.run(app)
