// @flow

/* Publisher */
class Observable {
  _listeners = [];

  subscribe(type, listener) {
    this._listeners.push({ type, listener });
  }
}