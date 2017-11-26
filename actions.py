STEP = 1
X = 0
Y = 1


def _move(position, step):
  x = position[X]
  y = position[Y] + step
  return (x, y)


class Backward:
  def move(self, position):
    return _move(position, -STEP)

  def turn(self, direction):
    return direction


class Forward:
  def move(self, position):
    return _move(position, +STEP)

  def turn(self, direction):
    return direction


class Left:
  def move(self, position):
    return position

  def turn(self, direction):
    if direction is 'N':
      return 'W'
    elif direction is 'W':
      return 'S'
    elif direction is 'S':
      return 'E'
    elif direction is 'E':
      return 'N'


class Right:
  def move(self, position):
    return position

  def turn(self, direction):
    if direction is 'N':
      return 'E'
    elif direction is 'E':
      return 'S'
    elif direction is 'S':
      return 'W'
    elif direction is 'W':
      return 'N'
