STEP = 1
X = 0
Y = 1


def _move(position, step):
  x = position[X]
  y = position[Y] + step
  return (x, y)


def _step(mode):
    return 2 * STEP if mode is 'turbo' else STEP


class Backward:
  def move(self, position, mode):
    return _move(position, -_step(mode))

  def turn(self, direction):
    return direction


class Forward:
  def move(self, position, mode):
    return _move(position, +_step(mode))

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
