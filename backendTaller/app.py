from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import pandas as pd
import numpy as np
import json

import time

from sklearn.model_selection import train_test_split
from scipy import spatial

from sklearn.metrics import pairwise_distances
from scipy.spatial.distance import cosine
from sklearn.feature_selection import chi2

from sklearn.neighbors import KNeighborsClassifier

from sklearn.metrics import precision_recall_fscore_support

import User_User_RS as uu_rs
import Content_Based_RS as cb_rs
import preprocessing as pp


df_review, df_business, df_users = pp.load_dataset()



app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_from_root():
    return jsonify(message = "Hello from Root")



@app.route("/get_usuario/<id>", methods= ["POST", "GET"])
def get_usuario_df(id):
    print(id)

    return id


@app.route("/get_tips_by_user/<id>", methods= ["POST", "GET"])
def get_tips(id):
    print(id)

    return id
    

@app.route("/get_reviews_by_user/<id>", methods=["POST", "GET"])
def get_reviews(id):
    print(request.json)

    return request.json


@app.route("/get_business/<id>", methods=["POST", "GET"])
def get_business(id):
    print(request.json)

    return request.json




@app.route("/get_recomendaciones/<id>", methods=["POST", "GET"])
def get_recomendaciones(id):
    print(request.json)

    return request.json