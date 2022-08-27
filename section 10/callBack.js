const student = [
  { name: "piyush", subject: "javascript" },
  { name: "roahn", subject: "machine learning" },
];

function enrollStudent(student, callback) {
  setTimeout(function () {
    student.push(student);
    console.log("student has been enrolled");
    callback();
  }, 8000);
}

function getStudent() {
  setTimeout(function () {
    let str = "";
    student.forEach(function (student) {
      str += `<li>${student.name}</li>`;
    });
    document.getElementById("student").html = str;
    console.log("sudent have been fetched");
  }, 1000);
}
let newStudent = { name: "Sunny", subject: "python" };
enrollStudent(newStudent, getStudent);
getStudent();

var calc = function (fx, a, b) {
  return fx(a, b);
};
var sum = function (x, y) {
  return a + b;
};
calc(sum, 4, 5);
