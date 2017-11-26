X = 0
Y = 1


def _move(position, step):
  x = position[X]
  y = position[Y] + step
  return (x, y)


class Backward:
  def move(self, position, mode):
    return _move(position, -mode.step())

  def turn(self, direction):
    return direction


class Forward:
  def move(self, position, mode):
    return _move(position, +mode.step())

  def turn(self, direction):
    return direction


class Left:
  def move(self, position, mode):
    return position

  def turn(self, direction):
    return direction.left()


class Right:
  def move(self, position, mode):
    return position

  def turn(self, direction):
    return direction.right()
