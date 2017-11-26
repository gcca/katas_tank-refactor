#include <utility>

#include "directions.hpp"

using Position = std::pair<int, int>;

#define STEP 1
#define Y second

class Action {
public:
  virtual Position move(Position&) = 0;
  virtual Direction *turn(Direction *direction) = 0;
};

class Backward : public Action {
public:
  Position move(Position &position) {
    Position new_position(position);
    new_position.Y -= STEP;
    return new_position;
  }

  Direction *turn(Direction *direction) {
    return direction;
  }
};

class Forward : public Action {
public:
  Position move(Position &position) {
    Position new_position(position);
    new_position.Y += STEP;
    return new_position;
  }

  Direction *turn(Direction *direction) {
    return direction;
  }
};

class Left : public Action {
public:
  Position move(Position &position) {
    return position;
  }

  Direction *turn(Direction *direction) {
    return direction->left();
  }
};

class Right : public Action {
public:
  Position move(Position &position) {
    return position;
  }

  Direction *turn(Direction *direction) {
    return direction->right();
  }
};
