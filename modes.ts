const STEP = 1;

export interface Mode {
  step(): number;
}

export class Normal implements Mode {
  public step(): number {
    return STEP;
  }
}

export class Turbo implements Mode {
  public step(): number {
    return 2 * STEP;
  }
}
