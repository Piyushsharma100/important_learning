const employee = {
  Cname: "kibalabs",
  job: "developer",

  salary: 100,
  age: 2037 - 1991,

  hasLicense: true,

  friends: ["piyush", "shweta", "sonali", "shikha"],

  channal: "helloPiyush",

  "channal1 2": "ppppppp",

  calcFun: function (birthYear) {
    return 2037 - birthYear;
  },
  salary: function () {
    return 25;
  },
  fullname: function () {
    return this.Cname + " " + this.job;
  },

  1: "one one one one",
};
var propertyName = "friends";

console.log(employee);
console.log(employee.calcFun(1995));
console.log(employee["calcFun"](1996));
console.log(employee.fullname());
console.log(employee["1"]); // when property name start with number[]
console.log(employee[propertyName]); // when property name is dynamic[]
