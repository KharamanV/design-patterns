// @flow

interface Car {
  getModel(): string;
}

class MercedesCar implements Car {
  getModel(): string {
    return 'Mercedes';
  }
}

class BMWCar implements Car {
  getModel(): string {
    return 'BMW';
  }
}

interface CarCreator {
  getCar(): Car;
}

class MercedesCarCreator implements CarCreator {
  getCar(): Car {
    return new MercedesCar();
  }
}

class BMWCarCreator implements CarCreator {
  getCar(): Car {
    return new BMWCar();
  }
}

const factory: CarCreator = new MercedesCarCreator();
const car: Car = factory.getCar();

car.getModel(); // Mercedes
