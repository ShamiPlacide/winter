def to_lower(s: str) -> str:
  return s.lower()


def strip_punctuation(s: str) -> str:
  import string
  return s.translate(str.maketrans('', '', string.punctuation))
