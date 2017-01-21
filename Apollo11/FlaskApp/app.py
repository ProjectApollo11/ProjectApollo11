from flask import Flask, render_template
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('localhost:27017')
db = client.MachineData

@app.route('/')
def showListings():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()