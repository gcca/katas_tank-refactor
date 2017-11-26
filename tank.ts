export class Tank {

  private static STEP = 1;
  private static Y = 1;

  private static DEFAULT_POSITION: [number, number] = [0, 0];

  private position: [number, number];

  constructor() {
    this.position = Tank.DEFAULT_POSITION;
  }

  public execute(orders: string[]): void {
    for (const order of orders) {
      switch (order) {
        case 'b': this.backward(); break;
        case 'f': this.forward(); break;
      }
    }
  }

  public where_i_am(): [number, number] {
    return this.position;
  }

  private backward(): void {
    this.position[Tank.Y] -= Tank.STEP;
  }

  private forward(): void {
    this.position[Tank.Y] += Tank.STEP;
  }
}
