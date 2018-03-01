/* Abstract class */
class Logger {
  static ERROR: number = 1;
  static WARNING: number = 2;
  static INFO: number = 3;

  next: Logger;
  priority: number;

  constructor(priority: number) {
    this.priority = priority;
  }

  setNext(logger: Logger): Logger {
    return this.next = logger;
  }

  message(msg: string, priority: number): void {
    if (priority <= this.priority) {
      this.writeMessage(msg);
    }

    if (this.next) {
      this.next.message(msg, priority)
    }
  }

  /* Abstract method */
  writeMessage(msg: string): void {
    throw new Error('Abstract method, you need to override it');
  }
}

class ConsoleLogger extends Logger {
  writeMessage(msg: string): void {
    console.log(msg)
  }
}

class FSLogger extends Logger {
  writeMessage(msg: string): void { /* save message into file */ }
}

class EmailLogger extends Logger {
  writeMessage(msg: string): void { /* send message via email */ }
}

const logger = new ConsoleLogger(Logger.INFO);

logger
  .setNext(new FSLogger(Logger.WARNING))
  .setNext(new EmailLogger(Logger.ERROR));

logger.message('Server is running on port 8000', Logger.INFO);
logger.message('File favicon.ico not found', Logger.WARNING);
logger.message('Ah fuck! Unexpected error', Logger.ERROR);
