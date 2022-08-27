// this   -------current object
let object = {
  firstName: "piyush",
  lastName: "sharma",
  getFullName: function () {
    console.log(this);
    console.log(this.firstName + " " + this.lastName);
  },

  address: {
    street: "123, ag colony",
    city: "patna",
    getAddress: function () {
      console.log(this);
      console.log(this.street + " " + this.city);
      console.log(this.firstName);
    },
  },
};
let objectTwo = {
  firstName: "rohan",
  lastName: "verma",
  getFullName: function () {
    console.log(this);
    console.log(this.firstName + " " + this.lastName);
  },
};
object.getFullName();
objectTwo.getFullName();
object.address.getAddress();
