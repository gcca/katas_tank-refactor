#include <functional>
#include <map>

#include "actions.hpp"

class Tank {
public:
  Tank() {
    position = {0, 0};

    actions = {
      {'b', &backward },
      {'f', &forward }
    };
  }

  void execute(std::vector<char> commands) {
    for (const char command: commands) {
      position = actions[command]->execute(position);
    }
  }

  Position where_am_i() {
    return position;
  }
private:
  using Actions = std::map<char, Action*>;

  Actions actions;
  Position position;

  Backward backward;
  Forward forward;
};
