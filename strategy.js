// @flow

interface DiscountStrategy {
  execute(totalPrice: number): number;
}

/* Abstract basic class */
class BasicDiscount implements DiscountStrategy {
  /* Abstract method */
  getDiscount(price: number): number {
    return price;
  }
  
  execute(totalPrice: number) {
    return this.getDiscount(totalPrice);
  }
}

class TotalDiscount extends BasicDiscount {
  getDiscount(totalPrice: number) {
    return totalPrice >= 100 ? totalPrice * 0.9 : totalPrice;
  }
}

class Cart {
  strategy: DiscountStrategy;
  products = [];

  constructor(strategy) {
    this.strategy = strategy;
  }
  
  addProduct(product) {
    this.products.push(product);
  }
  
  getSum() {
    const totalPrice = this.products.reduce((sum, product) => sum + product.price, 0);
    
    return this.strategy.execute(totalPrice);
  }
}

const cart = new Cart(new TotalDiscount());

cart.addProduct({ price: 100 });
cart.getSum(); // 90
