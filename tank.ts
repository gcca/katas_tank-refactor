import { Action, Position } from './actions';
import { Backward, Forward, Left, Right } from './actions';
import { Direction, North } from './directions';
import { Mode, Normal, Turbo } from './modes';

export class Tank {

  private static DEFAULT_DIRECTION = new North();
  private static DEFAULT_MODE = new Normal();
  private static DEFAULT_POSITION = [0, 0] as Position;

  private direction: Direction;
  private mode: Mode;
  private position: Position;

  private actions: {[order: string]: Action};

  constructor() {
    this.direction = Tank.DEFAULT_DIRECTION;
    this.mode = Tank.DEFAULT_MODE;
    this.position = Tank.DEFAULT_POSITION.slice() as Position;

    this.actions = {
      'b': new Backward(),
      'f': new Forward(),
      'l': new Left(),
      'r': new Right(),
    };
  }

  public execute(orders: string[]): void {
    for (const order of orders) {
      const action = this.actions[order];
      this.direction = action.turn(this.direction);
      this.position = action.move(this.position, this.mode);
    }
  }

  public turbo(): void {
    this.mode = new Turbo();
  }

  public where_am_i_going(): string {
    return this.direction.toString();
  }

  public where_i_am(): Position {
    return this.position;
  }
}
