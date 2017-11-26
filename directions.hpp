class Direction {
public:
  virtual Direction *left() = 0;
  virtual operator char() const = 0;
  virtual Direction *right() = 0;
};

class East : public Direction {
  static Direction *north;
  static Direction *south;
public:
  Direction *left() {
    return north;
  }

  operator char() const {
    return 'E';
  }

  Direction *right() {
    return south;
  }
};

class North : public Direction {
  static Direction *east;
  static Direction *west;
public:
  Direction *left() {
    return west;
  }

  operator char() const {
    return 'N';
  }

  Direction *right() {
    return east;
  }
};

class South : public Direction {
  static Direction *east;
  static Direction *west;
public:
  Direction *left() {
    return east;
  }

  operator char() const {
    return 'S';
  }

  Direction *right() {
    return west;
  }
};

class West : public Direction {
  static Direction *north;
  static Direction *south;
public:
  Direction *left() {
    return south;
  }

  operator char() const {
    return 'W';
  }

  Direction *right() {
    return north;
  }
};

East _east;
North _north;
South _south;
West _west;

Direction *East::north = &_north;
Direction *East::south = &_south;

Direction *North::east = &_east;
Direction *North::west = &_west;

Direction *South::east = &_east;
Direction *South::west = &_west;

Direction *West::north = &_north;
Direction *West::south = &_south;

East *east = &_east;
North *north = &_north;
South *south = &_south;
West *west = &_west;
