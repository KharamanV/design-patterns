// @flow

class RoundHole {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  fits(peg: RoundPeg): boolean {
    return this.radius >= peg.getRadius();
  }
}

class RoundPeg {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }
}

/* Incompatible class */
class SquarePeg {
  size: number;

  constructor(size: number) {
    this.size = size;
  }

  getSize(): number {
    return this.size;
  }
}

const roundHole: RoundHole = new RoundHole(3);
const roundPeg: RoundPeg = new RoundPeg(3);

roundHole.fits(roundPeg); // true

const squarePeg: SquarePeg = new SquarePeg(3);

roundHole.fits(squarePeg); // Error

class SquarePegAdapter extends RoundPeg {
  constructor(peg: SquarePeg) {
    super(Math.sqrt(Math.pow((peg.getSize() / 2), 2) * 2));
  }
}

const squarePegAdapter = new SquarePegAdapter(squarePeg);

roundHole.fits(squarePegAdapter); // true
