#include <utility>

using Position = std::pair<int, int>;

#define STEP 1
#define Y second

class Action {
public:
  virtual Position execute(Position&) = 0;
};

class Backward : public Action {
public:
  Position execute(Position &position) {
    Position new_position(position);
    new_position.Y -= STEP;
    return new_position;
  }
};

class Forward : public Action {
public:
  Position execute(Position &position) {
    Position new_position(position);
    new_position.Y += STEP;
    return new_position;
  }
};
