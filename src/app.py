from flask import Flask
from flask_socketio import SocketIO
from flask import render_template

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/gdating/')
def indexOfGDating():
    return render_template("index.html")

@app.route('/nhreader')
def openNHentaiReader():
    return render_template("nhentai/flex.html")

if __name__ == '__main__':
    socketio.run(app)
