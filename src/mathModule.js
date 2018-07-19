export class Nums {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }

  plus() {
      return (this.x + this.y);
  }

  minus() {
      return (this.x - this.y);
  }
      
  mult() {
      return (this.x * this.y);
  }

  div() {
      return (this.x / this.y);
  }
}