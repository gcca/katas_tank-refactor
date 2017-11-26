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


class Forward:
  def move(self, position):
    return _move(position, +STEP)
