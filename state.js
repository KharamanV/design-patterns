// @flow

/**
 * Context
 */
class iPod {
  state: State;

  constructor() {
    this.state = new LockedState(this);
  }

  setState(state: State) {
    this.state = state;
  }

  play(): void {
    this.state.pressPlay();
  }

  lock(): void {
    this.state.pressLock();
  }
}

/**
 * Abstract class
 */
class State {
  player: iPod;

  constructor(player: iPod) {
    this.player = player;
  }

  /**
   * Abstract method
   */
  pressPlay() {
    throw new Error('Abstract method, you need to override it');
  }

  /**
   * Abstract method
   */
  pressLock() {
    throw new Error('Abstract method, you need to override it');
  }
}

class LockedState extends State {
  pressPlay(): void { /* Do nothing */ }

  pressLock(): void {
    this.player.setState(new StandbyState(this.player));
  }
}

class StandbyState extends State {
  pressPlay(): void {
    this.player.setState(new PlayingState(this.player));
  }

  pressLock(): void {
    this.player.setState(new LockedState(this.player));
  }
}

class PlayingState extends State {
  pressPlay() {
    this.player.setState(new StandbyState(this.player));
  }

  pressLock(): void {
    this.player.setState(new LockedState(this.player));
  }
}


const player = new iPod();

player.play(); // Do nothing

player.lock(); // set standby mode
player.play(); // set playing mode
