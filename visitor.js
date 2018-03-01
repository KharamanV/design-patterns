// @flow

interface Visitor {
  visitFriend(friend: Friend): void;
  visitCity(city: City): void;
  visitCompany(company: Company): void;
}

interface Node {
  accept(visitor: Visitor): void;
}

class Friend implements Node {
  accept(visitor: Visitor): void {
    visitor.visitFriend(this);
  }
}

class City implements Node {
  accept(visitor: Visitor): void {
    visitor.visitCity(this);
  }
}

class Company implements Node {
  accept(visitor: Visitor): void {
    visitor.visitCompany(this);
  }
}

class JSONExportVisitor implements Visitor {
  visitFriend(friend: Friend) { /* Export name, age, sex */ };
  visitCity(city: City) { /* Export name, country  */ };
  visitCompany(company: Company) { /* Export name, address */ };
}

const nodes = [/* Big amount of nodes */];
const exportVisitor = new JSONExportVisitor();

nodes.forEach((node: Node) => node.accept(exportVisitor));
