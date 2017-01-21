from flask import Flask, render_template
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('localhost:27017')
db = client.MachineData

@app.route("/addMachine", methods=['POST'])
def addMachine():
    try:
        json_data = request.json['info']
        deviceName = json_data['device']
        ipAddress = json_data['ip']
        userName = json_data['username']
        password = json_data['password']
        portNumber = json_data['port']

        db.Machines.insert_one({
            'device':deviceName, 'ip':ipAddress, 'username':userName,
            'password':password, port:portNumber
        })
        return jsonify(status='OK', message=' inserted successfully')
    except Exception.e:
        return jsonify(status='ERROR', message=str(e))

@app.route("/getMachineList",methods=['POST'])
def getMachineList():
    try:
        machines = db.Machines.find()

        machineList = []
        for machine in machines:
            print machine
            machineItem = {
                'device':machine['device'],
                'ip':machine['ip'],
                'username':machine['username'],
                'password':machine['password'],
                'port':machine['port'],
                'id': str(machine['_id'])
            }
            machineList.append(machineItem)
    except Exception,e:
        raise str(e)
    return json.dumps(machineList)

@app.route('/')
def showListings():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()