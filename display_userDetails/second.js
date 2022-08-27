var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];

var n = 1;
var x = 0;

function AddRow() {
  var AddRown = document.getElementById("show");
  var NewRow = AddRown.insertRow(n);
  list1[x] = document.getElementById("fname").value;
  list2[x] = document.getElementById("lname").value;
  list3[x] = document.getElementById("email").value;
  list4[x] = document.getElementById("age").value;
  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);

  cel1.innerHtml = list1[x];
  cel2.innerHtml = list2[x];
  cel3.innerHtml = list3[x];
  cel4.innerHtml = list4[x];

  n++;
  x++;
}
