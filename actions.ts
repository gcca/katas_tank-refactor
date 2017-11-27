import { Direction } from './directions';
import { Mode } from './modes';

export type Position = [number, number];

const Y = 1;

function _move(position: Position, step: number): Position {
  const newPosition = position.slice() as Position;
  newPosition[Y] += step
  return newPosition;
}

export interface Action {
  move(position: Position, mode: Mode): Position;
  turn(direction: Direction): Direction;
}

export class Backward implements Action {
  public move(position: Position, mode: Mode): Position {
    return _move(position, -mode.step());
  }

  public turn(direction: Direction): Direction {
    return direction;
  }
}

export class Forward implements Action {
  public move(position: Position, mode: Mode): Position {
    return _move(position, mode.step());
  }

  public turn(direction: Direction): Direction {
    return direction;
  }
}

export class Left implements Action {
  public move(position: Position, mode: Mode): Position {
    return position;
  }

  public turn(direction: Direction): Direction {
    return direction.left();
  }
}

export class Right implements Action {
  public move(position: Position, mode: Mode): Position {
    return position;
  }

  public turn(direction: Direction): Direction {
    return direction.right();
  }
}
