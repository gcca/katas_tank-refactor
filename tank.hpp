#include <functional>
#include <map>

#include "actions.hpp"

class Tank {
public:
  Tank() {
    direction = 'N';
    position = {0, 0};

    actions = {
      {'b', &backward },
      {'f', &forward },
      {'l', &left},
      {'r', &right}
    };
  }

  void execute(std::vector<char> commands) {
    for (const char command: commands) {
      Action *action = actions[command];
      position = action->move(position);
      direction = action->turn(direction);
    }
  }

  Position where_am_i() {
    return position;
  }

  char where_am_i_going() {
    return direction;
  }
private:
  using Actions = std::map<char, Action*>;

  Actions actions;
  char direction;
  Position position;

  Backward backward;
  Forward forward;
  Left left;
  Right right;
};
