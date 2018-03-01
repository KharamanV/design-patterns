// @flow

class Laptop {
  os: string;
  cpu: string;
  gpu: string;
  memoryAmount: number;
}

interface Builder {
  reset(): void;
  setOS(): void;
  setCPU(cpu: string): void;
  setGPU(gpu: string): void;
  setMemory(amount: number): void;
}

class MacLaptopBuilder implements Builder {
  laptop: Laptop;

  reset() {
    this.laptop = new Laptop();
  }

  setOS() {
    this.laptop.os = 'Mac OS';
  }

  setCPU(cpu: string) {
    this.laptop.cpu = cpu;
  }

  setGPU(gpu: string) {
    this.laptop.gpu = gpu;
  }

  setMemory(amount: number) {
    this.laptop.memoryAmount = amount;
  }

  getResult(): Laptop {
    return this.laptop;
  }
}

class Director {
  constructMacbook(builder: Builder) {
    builder.reset();
    builder.setOS();
    builder.setCPU('Intel Core i7');
    builder.setGPU('AMD Radeon 560 pro');
    builder.setMemory(16);
  }
}

const director: Director = new Director();
const builder: MacLaptopBuilder = new MacLaptopBuilder();

director.constructMacbook(builder);

const laptop: Laptop = builder.getResult();