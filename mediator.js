// @flow

interface Mediator {
  send(msg: string, plane: Plane): void;
}

/**
 * Abstract class
 */
class Plane {
  mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  send(msg: string) {
    this.mediator.send(msg, this);
  }

  /**
   * Abstract method
   */
  receive(msg: string): void {
    throw new Error('Abstract method, you need to override it');
  }
}

class PlaneMediator implements Mediator {
  planes: Plane[] = [];

  addPlane(plane: Plane) {
    this.planes.push(plane);

    return this;
  }

  send(msg: string, sender: Plane) {
    this.planes.forEach((plane: Plane) => plane !== sender && plane.receive(msg))
  }
}

class Boeing747 extends Plane {
  receive(msg: string): void {
    console.log('Boeing 747 received: ', msg);
  }
}

class StealthPlane extends Plane {
  receive(msg: string): void {
    console.log('Stealth plane received: ', msg);
  }
}

const mediator = new PlaneMediator();
const boeingPlane = new Boeing747(mediator);
const stealthPlane = new StealthPlane(mediator);

mediator
  .addPlane(boeingPlane)
  .addPlane(stealthPlane);

boeingPlane.send('Hey, i\'ll be in California soon'); // Stealth plane received: 'Hey, i'll be in California soon'
