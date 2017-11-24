#include <functional>
#include <map>
#include <utility>

#define STEP 1
#define Y second

using Position = std::pair<int, int>;

class Tank {
public:
  Tank() {
    position = {0, 0};

    actions = {
      {'b', &Tank::move_backward },
      {'f', &Tank::move_forward }
    };
  }

  void execute(std::vector<char> commands) {
    for (const char command: commands) {
      actions[command](this);
    }
  }

  Position where_am_i() {
    return position;
  }
private:
  void move_backward() {
    position.Y -= STEP;
  }

  void move_forward() {
    position.Y += STEP;
  }

  using Actions = std::map<char, std::function<void(Tank*)>>;

  Actions actions;
  Position position;
};
