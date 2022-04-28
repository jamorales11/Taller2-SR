from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import pandas as pd
import numpy as np
import json






app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_from_root():
    return jsonify(message = "Hello from Root")



@app.route("/find_usuario/<id>", methods= ["POST", "GET"])
def get_usuario_df(id):
    print(request.json)

    return request.json
    


@app.route("/get_recomendaciones/<id>", methods=["POST", "GET"])
def get_recomendaciones(id):
    print(request.json)

    return request.json