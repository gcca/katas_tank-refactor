#include <utility>

#define STEP 1
#define Y second

using Position = std::pair<int, int>;

class Tank {
public:
  Tank() {
    position = {0, 0};
  }

  void execute(std::vector<char> commands) {
    for (const char command: commands) {
      switch(command) {
        case 'b': move_backward(); break;
        case 'f': move_forward(); break;
      }
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

  Position position;
};
