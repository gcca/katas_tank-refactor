export interface Direction {
  left(): Direction;
  right(): Direction;
  toString(): string;
}

export class East implements Direction {
  left(): Direction {
    return new North();
  }

  right(): Direction {
    return new South();
  }

  toString(): string {
    return 'E';
  }
}

export class North implements Direction {
  left(): Direction {
    return new West();
  }

  right(): Direction {
    return new East();
  }

  toString(): string {
    return 'N';
  }
}

export class South implements Direction {
  left(): Direction {
    return new East();
  }

  right(): Direction {
    return new West();
  }

  toString(): string {
    return 'S';
  }
}

export class West implements Direction {
  left(): Direction {
    return new South();
  }

  right(): Direction {
    return new North();
  }

  toString(): string {
    return 'W';
  }
}
