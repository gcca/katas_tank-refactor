from actions import Backward, Forward


class Tank:

  DEFAULT_POSITION = (0, 0)

  def __init__(self):
    self.position = Tank.DEFAULT_POSITION
    self.actions = {
      'b': Backward(),
      'f': Forward(),
    }

  def execute(self, orders):
    for order in orders:
      action = self.actions[order]
      self.position = action.move(self.position)

  def where_i_am(self):
    return self.position
