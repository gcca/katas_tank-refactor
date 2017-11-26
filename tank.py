class Tank:

  STEP = 1
  X = 0
  Y = 1

  DEFAULT_POSITION = (0, 0)

  def __init__(self):
    self.position = Tank.DEFAULT_POSITION
    self.actions = {
      'b': self.__backward,
      'f': self.__forward,
    }

  def execute(self, orders):
    for order in orders:
      self.actions[order]()

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
