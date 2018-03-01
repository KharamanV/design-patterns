// @flow

class User {
  name: string;
  age: number;
}

interface Iterator {
  hasNext(): boolean;
  next(): User;
}

class VKFriendsIterator implements Iterator {
  friends: User[];
  position: number;

  constructor(profileID) { /* fetch friends */ }

  hasNext() {
    return this.position < this.friends.length - 1;
  }

  next() {
    if (this.hasNext()) {
      return this.friends[this.position++];
    }
  }
}

interface Collection {
  createIterator(id: string): Iterator;
}

class VKFriendsCollection implements Collection {
  createIterator(profileID: string): VKFriendsIterator {
    return new VKFriendsIterator(profileID);
  }
}

const collection = new VKFriendsCollection();
const userID = '131231';
const iterator = collection.createIterator(userID);

iterator.next();
iterator.next();
iterator.next();
