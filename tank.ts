import { Action, Position } from './actions';
import { Backward, Forward } from './actions';

export class Tank {

  private static DEFAULT_POSITION = [0, 0] as Position;

  private position: Position;

  private actions: {[order: string]: Action};

  constructor() {
    this.position = Tank.DEFAULT_POSITION.slice() as Position;

    this.actions = {
      'b': new Backward(),
      'f': new Forward(),
    };
  }

  public execute(orders: string[]): void {
    for (const order of orders) {
      const action = this.actions[order];
      this.position = action.move(this.position);
    }
  }

  public where_i_am(): Position {
    return this.position;
  }
}
