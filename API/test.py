from main import app
import pytest

def test_root():
    # Use the app imported from main.py
    client = app.test_client()
    response = client.get("/user")
    assert response.status_code == 200
    assert isinstance(response.json, list)
    assert response.json[1]["name"] == "Jane"

def test_health():
    client = app.test_client()
    # Corrected indentation here
    response = client.get("/car")
    assert response.status_code == 200
    assert response.json["name"] == "BMW"
