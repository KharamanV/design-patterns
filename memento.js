// @flow

class Snapshot {
  textBox: TextBox;
  text: string;
  cursorX: number;
  cursorY: number;

  constructor(textBox, text, cursorX, cursorY) {
    this.textBox = textBox;
    this.text = text;
    this.cursorX = cursorX;
    this.cursorY = cursorY;
  }

  restore(): void {
    this.textBox
      .setText(this.text)
      .setCursor(this.cursorX, this.cursorY);
  }
}

class TextBox {
  text: string;
  cursorX: number;
  cursorY: number;

  setText(text: string) {
    this.text = text;

    return this;
  }

  setCursor(x: number, y: number) {
    this.cursorX = x;
    this.cursorY = y;

    return this;
  }

  createSnapshot(): Snapshot {
    return new Snapshot(this, this.text, this.cursorX, this.cursorY);
  }
}

const textBox = new TextBox();

textBox
  .setText('Example')
  .setCursor(1, 2);

const snapshot = textBox.createSnapshot();

textBox.setText('Edited'); // textBox.text = 'Edited'

snapshot.restore(); // textBox.text = 'Example'
