import pytest
from sorc.subject import add, divide, credential  # Add credential to imports

def test_add():
    assert add(2, 3) == 5

def test_divide_normal():
    assert divide(10, 2) == 5

def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError):
        divide(5, 0)

def test_credential_invalid_name():
    with pytest.raises(ValueError):  # Expect the function to raise ValueError
        credential(name=23, age=20, gender="male")
