def setSqure(val):
  return val**2

def caller(func, val):
  return func(val)

print(caller(setSqure, 5))