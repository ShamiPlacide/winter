import flask
from flask import Flask


def test_root():
    app = Flask(__name__)
    client = app.get_user()

    response = client.get("/")
    assert response.status_code == 200
    assert response.json == {"user": "Jane"}

def test_health():
    app = flask
    client = app.test_client()

    response = client.get("/health")
    assert response.status_code == 200
    assert response.json["status"] == "ok"
