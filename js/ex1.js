class Square {
  constructor(side) {
    this.side = side;
}
  area() {
    return this.side * this.side
    }
  perimeter() {
      return this.side * 4
      }
  diagonal() {
      return Math.sqrt(2) * this.side 
      }
  }

const theSquare = new Square(2); 
console.log(`Square with side ${theSquare.side} has perimeter of ${theSquare.perimeter()}, area of ${theSquare.area()}, and diagonal of ${theSquare.diagonal()}`); 
