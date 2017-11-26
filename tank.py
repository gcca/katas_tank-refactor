from actions import Backward, Forward, Left, Right
from directions import North


class Tank:

  DEFAULT_DIRECTION = North()
  DEFAULT_POSITION = (0, 0)
  DEFAULT_MODE = 'normal'

  def __init__(self):
    self.direction = Tank.DEFAULT_DIRECTION
    self.mode = Tank.DEFAULT_MODE
    self.position = Tank.DEFAULT_POSITION
    self.actions = {
      'b': Backward(),
      'f': Forward(),
      'l': Left(),
      'r': Right(),
    }

  def execute(self, orders):
    for order in orders:
      action = self.actions[order]
      self.direction = action.turn(self.direction)
      self.position = action.move(self.position, self.mode)

  def turbo(self):
    self.mode = 'turbo'

  def where_am_i_going(self):
    return str(self.direction)

  def where_i_am(self):
    return self.position
