from actions import Backward, Forward, Left, Right


class Tank:

  DEFAULT_DIRECTION = 'N'
  DEFAULT_POSITION = (0, 0)

  def __init__(self):
    self.direction = Tank.DEFAULT_DIRECTION
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
      self.position = action.move(self.position)

  def where_am_i_going(self):
    return self.direction

  def where_i_am(self):
    return self.position
