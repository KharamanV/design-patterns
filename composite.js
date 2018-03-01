// @flow

interface Item {
  getPrice(): number;
}

class Box implements Item {
  children: Array<Item> = [];

  getPrice() {
    return this.children.reduce((prev, curr) => prev + curr.getPrice(), 0);
  }

  put(item: Item) {
    this.children.push(item);
  }
}

class Product implements Item {
  price: number;

  constructor(price: number) {
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

const mainBox = new Box();

const iPhone = new Product(800);
const MacBook = new Product(2800);
const iPad = new Product(1000);

const smallBox = new Box();

smallBox.put(iPhone);

mainBox.put(MacBook);
mainBox.put(iPad);
mainBox.put(smallBox);

mainBox.getPrice(); // 4600
