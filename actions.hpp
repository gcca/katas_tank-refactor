#include <utility>

using Position = std::pair<int, int>;

#define STEP 1
#define Y second

class Action {
public:
  virtual Position move(Position&) = 0;
  virtual char turn(char &direction) = 0;
};

class Backward : public Action {
public:
  Position move(Position &position) {
    Position new_position(position);
    new_position.Y -= STEP;
    return new_position;
  }

  char turn(char &direction) {
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

  char turn(char &direction) {
    return direction;
  }
};

class Left : public Action {
public:
  Position move(Position &position) {
    return position;
  }

  char turn(char &direction) {
    switch(direction) {
      case 'N': return 'W';
      case 'W': return 'S';
      case 'S': return 'E';
      case 'E': return 'N';
      default: return NULL;
    }
  }
};

class Right : public Action {
public:
  Position move(Position &position) {
    return position;
  }

  char turn(char &direction) {
    switch(direction) {
      case 'N': return 'E';
      case 'E': return 'S';
      case 'S': return 'W';
      case 'W': return 'N';
      default: return NULL;
    }
  }
};
