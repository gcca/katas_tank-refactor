import { Direction } from './directions';

export type Position = [number, number];

const STEP = 1;
const Y = 1;

function _move(position: Position, step: number): Position {
  const newPosition = position.slice() as Position;
  newPosition[Y] += step
  return newPosition;
}

export interface Action {
  move(position: Position): Position;
  turn(direction: string): string;
}

export class Backward implements Action {
  public move(position: Position): Position {
    return _move(position, -STEP);
  }

  public turn(direction: string): string {
    return direction;
  }
}

export class Forward implements Action {
  public move(position: Position): Position {
    return _move(position, STEP);
  }

  public turn(direction: string): string {
    return direction;
  }
}

export class Left implements Action {
  public move(position: Position): Position {
    return position;
  }

  public turn(direction: Direction): Direction {
    return direction.left();
  }
}

export class Right implements Action {
  public move(position: Position): Position {
    return position;
  }

  public turn(direction: Direction): Direction {
    return direction.right();
  }
}
