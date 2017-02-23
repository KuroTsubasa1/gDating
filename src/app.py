from flask import Flask
from flask_socketio import SocketIO
from flask import render_template
import requests
from flask_socketio import send, emit
from bs4 import BeautifulSoup

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def hello_world():
    return render_template("index_no_template.html")

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
