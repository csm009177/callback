def func (callback):
  return callback()

def callback():
  return print("is callback")

func(callback)