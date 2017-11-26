class East:

  def __str__(self):
    return 'E'

  def left(self):
    return North()

  def right(self):
    return South()


class North:

  def __str__(self):
    return 'N'

  def left(self):
    return West()

  def right(self):
    return East()


class South:

  def __str__(self):
    return 'S'

  def left(self):
    return East()

  def right(self):
    return West()


class West:

  def __str__(self):
    return 'W'

  def left(self):
    return South()

  def right(self):
    return North()
