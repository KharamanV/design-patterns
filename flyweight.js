// @flow

class TreeType {
  name: string;
  color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  draw(x: number, y: number): void {
    /* Draw a tree at x,y position */
  }
}

class TreeFactory {
  static treeTypes: TreeType[];

  static getTreeType(name: string, color: string): TreeType {
    let treeType = TreeFactory.treeTypes.find((type: TreeType) => type.name === name);

    if (!treeType) {
      treeType = new TreeType(name, color);
      TreeFactory.treeTypes.push(treeType);
    }

    return treeType;
  }
}

class Tree {
  x: number;
  y: number;
  type: TreeType;

  constructor(x: number, y: number, type: TreeType) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  draw(): void {
    this.type.draw(this.x, this.y);
  }
}

class Forest {
  trees: Tree[];

  draw(): void {
    this.trees.forEach((tree: Tree) => tree.draw())
  }
}
