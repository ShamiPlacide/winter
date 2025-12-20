sample = "now you see me!"


def reverse_words(sentence):
  words = sentence.split()
  reversed_words = [word[::-1] for word in words]
  return ' '.join(reversed_words)


print(reverse_words(sample))
