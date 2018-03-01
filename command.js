// @flow

/* Receiver class */
class Light {
  isActivated: boolean = false;

  turnOn(): void {
    this.isActivated = true;
  }

  turnOff(): void {
    this.isActivated = false;
  }
}

interface Command {
  execute(): void;
}

class LightOnCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }
}


class LightOffCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }
}


class RemoteControl {
  command: Command;

  setCommand(command: Command) {
    this.command = command;
  }

  pressButton(): void {
    this.command.execute();
  }
}

const control: RemoteControl = new RemoteControl();

const light: Light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

// turn the light on
control.setCommand(lightOnCommand);
control.pressButton();

// turn the light off
control.setCommand(lightOffCommand);
control.pressButton();
