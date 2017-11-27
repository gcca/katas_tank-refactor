import { Direction } from './directions';

export type Position = [number, number];

const STEP = 1;
const Y = 1;

function _move(position: Position, step: number): Position {
  const newPosition = position.slice() as Position;
  newPosition[Y] += step
  return newPosition;
}

function step(mode: string): number {
  return mode == 'turbo' ? 2 * STEP : STEP;
}

export interface Action {
  move(position: Position, mode: string): Position;
  turn(direction: Direction): Direction;
}

export class Backward implements Action {
  public move(position: Position, mode: string): Position {
    return _move(position, -step(mode));
  }

  public turn(direction: Direction): Direction {
    return direction;
  }
}

export class Forward implements Action {
  public move(position: Position, mode: string): Position {
    return _move(position, step(mode));
  }

  public turn(direction: Direction): Direction {
    return direction;
  }
}

export class Left implements Action {
  public move(position: Position, mode: string): Position {
    return position;
  }

  public turn(direction: Direction): Direction {
    return direction.left();
  }
}

export class Right implements Action {
  public move(position: Position, mode: string): Position {
    return position;
  }

  public turn(direction: Direction): Direction {
    return direction.right();
  }
}
