// @flow

/**
 * Basic prototype
 */
class Car {
  carType: string;
  color: string;

  constructor(source: Car) {
    if (source) {
      this.carType = source.carType;
      this.color = source.color;
    }
  }

  /**
   * Abstract method
   */
  clone() {
    throw new Error('Abstract method, you need to override it');
  }
}

/**
 * Concrete prototype
 */
class BMW extends Car {
  series: string;

  constructor(source: BMW) {
    super(source);

    if (source) {
      this.series = source.series;
    }
  }

  clone() {
    return new BMW(this);
  }
}

const arrayOfCars = [];
const BMWCar: BMW = new BMW();

BMWCar.carType = 'sedan'
BMWCar.color = 'black'
BMWCar.series = '7 series'

arrayOfCars.push(BMWCar);

const similarBMWCar = BMWCar.clone();

arrayOfCars.push(similarBMWCar);

const whiteBMWCar = BMWCar.clone();

whiteBMWCar.color = 'white';

arrayOfCars.push(whiteBMWCar);

