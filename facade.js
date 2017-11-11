// @flow

interface Shape {
  draw(): void;
}

class CircleShape implements Shape {
  draw() {
    console.log('Circle');
  }
}

class SquareShape implements Shape {
  draw() {
    console.log('Square');
  }
}

/* Facade */
class ShapeCreator {
  circle: CircleShape;
  square: SquareShape;

  constructor() {
    this.circle = new CircleShape();
    this.square = new SquareShape();
  }

  drawCircle() {
    this.circle.draw();
  }

  drawSquare() {
    this.square.draw();
  }
}

const creator: ShapeCreator = new ShapeCreator();

creator.drawSquare(); // Square
