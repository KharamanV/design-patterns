// @flow

class ListenersMap {
  listeners = {};

  add(key, listener) {
    if (!this.listeners[key]) {
      this.listeners[key] = [];
    }

    this.listeners[key].push(listener);
  }

  get(eventType) {
    return this.listeners[eventType] || [];
  }

  remove(key, listener) { /* remove listener */ }
}

/* Basic Publisher */
class Observable {
  _listeners = new ListenersMap();

  subscribe(eventType, listener) {
    this._listeners.add(eventType, listener);
  }

  unsubscribe(eventType, listener) {
    this._listeners.remove(eventType, listener);
  }

  notify(eventType, value) {
    this._listeners.get(eventType)
      .forEach(listener => listener.update(value));
  }
}

class NewspaperPublisher extends Observable {

  publishDailyProphet() {
    const newspaper = {} // fresh newspaper

    this.notify('DailyProphet', newspaper);
  }

  publishQuibbler() {
    const newspaper = {} // fresh newspaper

    this.notify('Quibbler', newspaper);
  }
}

/* Subscriber interface */
interface Observer {
  update(value: any): void;
}

class Harry implements Observer {
  update(newspaper) { /* read the newspaper */ }
}

class Ronald implements Observer {
  update(newspaper) { /* read the newspaper */ }
}

const publisher = new NewspaperPublisher();

publisher.subscribe('DailyProphet', new Harry());
publisher.subscribe('Quibbler', new Ronald());

publisher.publishDailyProphet();
publisher.publishQuibbler();
