sample = [1,2,3,0,4,5,0,6,"q"]

def move():
  for item in sample:
    if item == 0:
      sample.remove(item)
      sample.append(item)
  return sample
print(move())

