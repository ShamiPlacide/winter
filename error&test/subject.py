def add(a, b):
  return a + b


def divide(a, b):
  if b == 0:
    raise ZeroDivisionError("Cannot divide by zero")
  return a / b

def credential(name, age, gender):
  if not isinstance(name, str):
    raise ValueError("Name must be a string")
  if not isinstance(age, int):
    raise ValueError("Age must be an integer")
  if not isinstance(gender, str):
    raise ValueError("Gender must be a string")
  # If all checks pass, return the formatted string (you can add print if needed)
  return f"My name is: {name}, I'm {age} yrs old, and my gender is: {gender}!"

# Note: I've removed the try-except here and moved checks upfront for clarity.
# If you want to catch other errors, you can wrap the return in try-except.
