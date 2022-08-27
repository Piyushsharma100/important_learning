// function myFunction() {
//   console.log("i am clicked ");
// }

//new method****

// var button = document.querySelector("button");
// button.addEventListener("click", function () {
//   console.log("javascript");
// });

var button = document.querySelector("button");
button.addEventListener("click", myFunction);

function myFunction() {
  //   console.log("web development");
  var listItems = document.getElementsByClassName("list_items");
  console.log(listItems);
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].style.backgroundColor = "orange";
    listItems.style.margin = "2px";
  }
}
