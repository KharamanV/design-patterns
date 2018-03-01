// @flow

/**
 * Abstract class
 */
class Reader {
  /**
   * Abstract method
   */
  extractData() {}

  /**
   * Abstract method
   */
  parseData(data) {}

  display() {
    return this.parseData(this.extractData());
  }
}

class PDFReader extends Reader {
  extractData() { /* Extract PDF */ }

  parseData() { /* Parse PDF */ }
}

class FB2Reader extends Reader {
  extractData() { /* Extract FB2 */ }

  parseData() { /* Parse FB2 */ }
}

const reader = new PDFReader();

reader.display();
