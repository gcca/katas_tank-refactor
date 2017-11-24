#define CATCH_CONFIG_MAIN
#include <catch>

#include "tank.hpp"

TEST_CASE("Starting", "[Tank]") {
  Tank tank;

  const Position INITIAL_POSITION {0, 0};

  SECTION("starting") {
    REQUIRE(tank.where_am_i() == INITIAL_POSITION);
  }
}

TEST_CASE("Moving from (0, 0)", "[Tank]") {
  Tank tank;

  SECTION("backward") {
    const Position a_backward_step {0, -1};
    const std::vector commands = {'b'};

    tank.execute(commands);

    REQUIRE(tank.where_am_i() == a_backward_step);
  }

  SECTION("forward") {
    const Position a_forward_step {0, 1};
    const std::vector commands = {'f'};

    tank.execute(commands);

    REQUIRE(tank.where_am_i() == a_forward_step);
  }
}
