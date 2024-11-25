// Studi Kasus 5: Sistem Pendidikan (Level 5 - Very Hard)
// Deskripsi: Buat constructor function yang merepresentasikan sistem pendidikan, dengan objek Student dan Course. Setiap Student dapat memiliki beberapa Course, dan setiap Course memiliki nama, durasi, dan biaya.

function Student(name, age) {
  this.name = name;
  this.age = age;
  this.courses = [];
}

function Course(name, duration, cost) {
  this.name = name;
  this.duration = duration;
  this.cost = cost;
}

Student.prototype.addCourse = function (course) {
  if (course instanceof Course) {
    this.courses.push(course);
  } else {
    console.error('Invalid course object');
  }
};

const course1 = new Course("Mathematics", "3 months", 200);
const course2 = new Course("JavaScript", "2 months", 150);

const student1 = new Student("John", 20);
student1.addCourse(course1);
student1.addCourse(course2);

console.log(student1);

student1.courses.forEach(course => {
  console.log(`Name: ${course.name}, Duration: ${course.duration}, Cost: ${course.cost}`);
});