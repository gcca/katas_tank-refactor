import { Tank } from './tank';

describe('Tank', () => {
  let tank: Tank;

  beforeEach(() => {
    tank = new Tank;
  });

  describe('when start', () => {
    const DEFAULT_POSITION = [0, 0];

    it('should be at (0, 0)', () => {
      expect(tank.where_i_am()).to.deep.equal(DEFAULT_POSITION);
    });
  });

  describe('when recieve order', () => {
    describe('\'b\'', () => {
      it('should move one backward step', () => {
        const ONE_BACKWARD_STEP = [0, -1];
        tank.execute(['b']);
        expect(tank.where_i_am()).to.deep.equal(ONE_BACKWARD_STEP);
      });
    })

    describe('\'f\'', () => {
      it('should move one forward step', () => {
        const ONE_FORWARD_STEP = [0, 1];
        tank.execute(['f']);
        expect(tank.where_i_am()).to.deep.equal(ONE_FORWARD_STEP);
      });
    })
  });
});
