class Tank:

  STEP = 1
  X = 0
  Y = 1

  DEFAULT_POSITION = (0, 0)

  def __init__(self):
    self.position = Tank.DEFAULT_POSITION

  def execute(self, orders):
    for order in orders:
      if order == 'b':
        self.__backward()
      elif order == 'f':
        self.__forward()

  def where_i_am(self):
    return self.position

  def __backward(self):
    self.__move(-Tank.STEP)

  def __forward(self):
    self.__move(+Tank.STEP)

  def __move(self, step):
    x = self.position[Tank.X]
    y = self.position[Tank.Y] + step
    self.position = (x, y)
