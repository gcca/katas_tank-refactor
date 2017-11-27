import { Tank } from './tank';

describe('Tank', () => {
  let tank: Tank;

  beforeEach(() => {
    tank = new Tank;
  });

  describe('when start', () => {
    const DEFAULT_DIRECTION = 'N';
    const DEFAULT_POSITION = [0, 0];

    it('should be at (0, 0)', () => {
      expect(tank.where_i_am()).to.deep.equal(DEFAULT_POSITION);
    });

    it('should go to north', () => {
      expect(tank.where_am_i_going()).to.equal(DEFAULT_DIRECTION);
    });
  });

  describe('when recieve order', () => {
    describe('\'b\'', () => {
      it('should move one backward step', () => {
        const ONE_BACKWARD_STEP = [0, -1];
        tank.execute(['b']);
        expect(tank.where_i_am()).to.deep.equal(ONE_BACKWARD_STEP);
      });
    });

    describe('\'f\'', () => {
      it('should move one forward step', () => {
        const ONE_FORWARD_STEP = [0, 1];
        tank.execute(['f']);
        expect(tank.where_i_am()).to.deep.equal(ONE_FORWARD_STEP);
      });
    });

    describe('\'l\'', () => {
      it('should turn left to west', () => {
        const WEST = 'W';
        tank.execute(['l']);
        expect(tank.where_am_i_going()).to.equal(WEST);
      });
    });

    describe('\'r\'', () => {
      it('should turn right to east', () => {
        const EAST = 'E';
        tank.execute(['r']);
        expect(tank.where_am_i_going()).to.equal(EAST);
      });
    });
  });

  describe('when move forward with turbo mode', () => {
    beforeEach(() => {
      tank.turbo();
      tank.execute(['f']);
    });

    it('should go two steps to north', () => {
      const TWO_STEPS_TO_NORTH = [0, 2];
      expect(tank.where_i_am()).to.deep.equal(TWO_STEPS_TO_NORTH);
    });
  });
});
