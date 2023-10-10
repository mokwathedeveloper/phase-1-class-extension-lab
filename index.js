// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides === 3) {
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;
      } else {
        return false;
      }
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      if (this.countSides === 4) {
        const [a, b, c, d] = this.sides;
        return a === b && b === c && c === d;
      } else {
        return false;
      }
    }
  
    get area() {
      if (this.isValid) {
        const side = this.sides[0];
        return side * side;
      } else {
        return undefined; // Or handle the case as per your requirements
      }
    }
  }
  const triangle = new Triangle([3, 4, 5]);
console.log(triangle.isValid); // true
console.log(triangle.countSides); // 3
console.log(triangle.perimeter); // 12

const square = new Square([4, 4, 4, 4]);
console.log(square.isValid); // true
console.log(square.countSides); // 4
console.log(square.perimeter); // 16
console.log(square.area); // 16  
