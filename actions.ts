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
}

export class Backward implements Action {
  public move(position: Position): Position {
    return _move(position, -STEP);
  }
}

export class Forward implements Action {
  public move(position: Position): Position {
    return _move(position, STEP);
  }
}
