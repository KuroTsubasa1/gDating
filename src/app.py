from flask import Flask
from flask_socketio import SocketIO
from flask import render_template
import requests
from flask_socketio import send, emit
from bs4 import BeautifulSoup
import mysql.connector
from mysql.connector import errorcode

# init the flask server
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
# init websokets (what a pain)
socketio = SocketIO(app)

#GEkyX4KFcZH!
# mysql stuff
try:
    cnx = mysql.connector.connect(user='root', password='GEkyX4KFcZH!',
                                 host='127.0.0.1',
                                 database='testDatabase')
    print("SQL : All Good")
    cursor = cnx.cursor()
except mysql.connector.Error as err:
  if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
    print("SQL : Something is wrong with your user name or password")
  elif err.errno == errorcode.ER_BAD_DB_ERROR:
    print("SQL : Database does not exist")
  else:
    print(err)



#index page
@app.route('/')
def hello_world():
    print('---------------------------')
    print('test')
    return render_template("index_no_template.html")

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

@app.route('/sqlTest')
def sqlTest():
    tableName = 'testTable'
    Fields = 'value'
    Data = "'Hallo Welt'"
    Data2 = 2
    print("INSERT INTO {} ({}) VALUES ({})".format(tableName, Fields, Data))
    valueData = ("INSERT INTO {} ({}) VALUES ({})").format(tableName, Fields, Data)
    cursor.execute(valueData)
    cursor.close()
    return render_template("sqlTest.html")

# this should not be here but i am too lazy to move it
@socketio.on('a')
def aa(json):
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
    socketio.emit('imgUrl', {'data': id[4], 'pageFormat': imgFormart[1], 'pageNumber': pageNum})


def num_apperances_of_tag(tag_name, html):
    soup = BeautifulSoup(html, "html.parser")
    return len(soup.find_all(tag_name))

if __name__ == '__main__':
    socketio.run(app)
