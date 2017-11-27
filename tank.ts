type Position = [number, number];

export class Tank {

  private static STEP = 1;
  private static Y = 1;

  private static DEFAULT_POSITION = [0, 0] as Position;

  private position: Position;

  private actions: {[order: string]: () => void};

  constructor() {
    this.position = Tank.DEFAULT_POSITION.slice() as Position;

    this.actions = {
      'b': () => this.backward(),
      'f': () => this.forward(),
    };
  }

  public execute(orders: string[]): void {
    for (const order of orders) {
      this.actions[order]();
    }
  }

  public where_i_am(): Position {
    return this.position;
  }

  private backward(): void {
    this.position[Tank.Y] -= Tank.STEP;
  }

  private forward(): void {
    this.position[Tank.Y] += Tank.STEP;
  }
}
