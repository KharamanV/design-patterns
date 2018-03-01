// @flow

interface Color {
  getColor(): string;
}

class Black implements Color {
  getColor() {
    return 'black';
  }
}

class White implements Color {
  getColor() {
    return 'white';
  }
}

/**
 * Abstract class
 */
class Shape {
  color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  /**
   * Abstract method
   */
  render() {
    throw new Error('Abstract method, you need to override it');
  }
}

class Circle extends Shape {
  render() {
    return `It's a ${this.color.getColor()} circle`;
  }
}

class Square extends Shape {
  render() {
    return `It's a ${this.color.getColor()} square`;
  }
}

const whiteColor = new White();
const whiteCircle = new Circle(whiteColor);

whiteCircle.render(); // It's a white circle

const blackColor = new Black();
const blackSquare = new Square(blackColor);

blackSquare.render(); // It's a black square
