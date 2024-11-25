//Studi Kasus 5: Menerapkan Polymorphism dengan Prototype (Level 5 - Very Hard)

// Deskripsi: Buat objek Shape yang memiliki method area(). Kemudian buat dua turunan objek, yaitu Rectangle dan Circle, dan masing-masing memiliki implementasi berbeda untuk menghitung luasnya.

function Shape() {
}

Shape.prototype.area = function(){
  throw new Error('Method "area()" must be implemented by subclasses');
}

function Rectangle(width, height) {
  Shape.call(this);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2);
};

const rectangle = new Rectangle(10, 5);
console.log(rectangle.area());

const circle = new Circle(7);
console.log(circle.area());