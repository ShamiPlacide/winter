# extracting words

sample = "simplicity is the ultimate sophistication"
check = []

# Extract words longer than 5 characters and their lengths
for word in sample.split():
  if len(word) > 5:
    check.append((word, len(word)))
print(check)


# function to count unique word
string = "in vino veritas"
def unique():
  count = 0
  for word in string.split():
    if "v" in word:
      count += 1
  print(count)
unique()



# # finding the mean
def mean():
  list = [1,2,3,4,5]
  print(sum(list)/len(list))
mean()


import re
def validate_email(email):
  pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
  if re.match(pattern, email):
    return True
  return False

# Test cases
test_emails = [
  "test@example.com",
  "invalid.email@com",
  "user@domain.co.uk",
  "@invalid.com"
]
for email in test_emails:
  print(f"{email}: {validate_email(email)}")


import os
from datetime import datetime


class FileStats:
  def __init__(self, file_path):
    self.file_path = file_path
    if not os.path.exists(file_path):
      raise FileNotFoundError(f"File {file_path} does not exist")

  def get_size(self):
    """Returns file size in bytes"""
    return os.path.getsize(self.file_path)

  def get_line_count(self):
    """Returns the number of lines in the file"""
    with open(self.file_path, 'r') as file:
      return sum(1 for line in file)

  def get_modified_date(self):
    """Returns the last modified date of the file"""
    timestamp = os.path.getmtime(self.file_path)
    return datetime.fromtimestamp(timestamp)
#
# # Example usage:
# stats = FileStats("")
# print(f"Size: {stats.get_size()} bytes")
# print(f"Lines: {stats.get_line_count()}")
# print(f"Modified: {stats.get_modified_date()}")


import time


class Timer:
  def __enter__(self):
    self.start = time.time()
    return self

  def __exit__(self, *args):
    self.end = time.time()
    self.duration = self.end - self.start
    print(f"Time taken: {self.duration:.2f} seconds")

# Example usage:
# with Timer():
#     time.sleep(1)  # Some time-consuming operation

import module
from myproject.src.__init__ import add, to_lower, word_count, strip_punctuation

print(module.greet("carol"))
print(module.ask("carol"))
print(add(7,2))
print(to_lower("CAROL"))
print(word_count("carol is a character in pluribus"))
print(strip_punctuation("carol, is, a, character, in: pluribus"))

url = "http://github.com/carbonfive/raygun"
def parse():
  for item in url:
    parser = url.split(".")
  print(parser[1])

parse()
