import unittest

from tank import Tank


class TankDefaultsTestCase(unittest.TestCase):

  def setUp(self):
    self.tank = Tank()

  def test_position(self):
    DEFAULT_POSITION = (0, 0)
    self.assertEqual(self.tank.where_i_am(), DEFAULT_POSITION)

  def test_direction(self):
    DEFAULT_DIRECTION = 'N'
    self.assertEqual(self.tank.where_am_i_going(), DEFAULT_DIRECTION)


class TankOrdersTestCase(unittest.TestCase):

  def setUp(self):
    self.tank = Tank()

  def test_backward(self):
    ONE_STEP_BACKWARD = (0, -1)
    self.tank.execute(['b'])
    self.assertEqual(self.tank.where_i_am(), ONE_STEP_BACKWARD)

  def test_forward(self):
    ONE_STEP_FORWARD = (0, 1)
    self.tank.execute(['f'])
    self.assertEqual(self.tank.where_i_am(), ONE_STEP_FORWARD)

  def test_left(self):
    WEST = 'W'
    self.tank.execute(['l'])
    self.assertEqual(self.tank.where_am_i_going(), WEST)

  def test_left(self):
    EAST = 'E'
    self.tank.execute(['r'])
    self.assertEqual(self.tank.where_am_i_going(), EAST)
