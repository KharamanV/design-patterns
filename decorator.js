// @flow

interface IText {
  display(): string;
}

class Text implements IText {
  display(): string {
    return 'Hello World';
  }
}

/* Parent of all decorators. Contains wrapping */
class TextDecorator implements IText {
  text: IText;

  constructor(text: IText) {
    this.text = text;
  }

  display(): string {
    return this.text.display();
  }
}

class ExclamationTextDecorator extends TextDecorator {
  display(): string {
    return this.text.display() + '!';
  }
}

class UppercaseTextDecorator extends TextDecorator {
  display(): string {
    return this.text.display().toUpperCase();
  }
}

const text: Text = new Text();

text.display(); // Hello World

const decorator: TextDecorator = new ExclamationTextDecorator(text);

decorator.display(); // Hello World!

const decorator2: TextDecorator = new UppercaseTextDecorator(new ExclamationTextDecorator(text));

decorator2.display(); // HELLO WORLD!
