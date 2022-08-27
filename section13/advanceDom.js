// console.log(document.getElementById("heading"));

// change the heading content
// var heading = document.getElementById("heading");
// heading.innerHtml = "javascript";

// // change the paragrapgh content
// var para = document.querySelector("p");
// para.innerHTML = "heyyyyy";

// find html object
// console.log(typeof(document));
//console.log(document);
//console.log(document.all);
//console.log(document.body);
//console.log(document.URL);
//console.log(document.head);
//console.log(document.head.children);
//console.log(document.images);

// changing the content
// console.log(document.all[2].textContent="javascript");

//selectors
// var list = document.getElementById("list");
// console.log(list);
// // list.innerText = "fruits";
// list.textContent = "fruits1";
// var heading = document.getElementById("heading");
// console.log(heading.textContent);// we can display the stlying part (if display:none within span)
// console.log(heading.innerText);

// getElementsByClassName

// var listItem = document.getElementsByClassName("list_items");
// //console.log(listItem);
// console.log(listItem[2].innerHTML);
// listItem[2].innerHTML = "banana";

// listItem[2].style.color = "yellow";
// listItem[0].style.color = "green";

// var i;
// for (i = 0; i < listItem.length; i++) {
//   listItem[i].style.backgroundColor = "orange";
//   listItem[i].style.fontSize = "25px";
// //   listItem[i].innerHTML = "fruits";
// }

//TAGSNAME
// var input = document.getElementsByTagName("ul");
// console.log(input);

// querySelector

// var list = document.querySelector("li");
// console.log(list);

// querySelectorAll

// var list = document.querySelectorAll("li");
// console.log(list);

// var list = document.querySelectorAll("#list");
// console.log(list);

// var list1 = document.querySelectorAll(".list_items");
// console.log(list1);

// var list1 = document.querySelectorAll(".list_items");
// console.log(list1);

// var i;
// for (i = 0; i < list1.length; i++) {
//   list1[i].style.backgroundColor = "orange";
//   list1[i].style.fontSize = "25px";
//   //   listItem[i].innerHTML = "fruits";
// }

//session 2
// tranversing node

// var list = document.querySelector("#list");
// console.log(list.parentNode);

// var body = document.querySelector("body");
// console.log(body.parentNode);
// console.log(body.parentElement);

// var body = document.querySelector("li");
// console.log(body.parentNode);
// console.log(body.parentElement);

// childnode and child element

// var list = document.querySelector("#list");
// console.log(list.childNodes);
// console.log(list.children);
// console.log(list.children[1]);
// console.log(list.firstChild);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

// console.log(list.previousElementSibling);
// console.log(list.nextSibling);
// console.log(list.nextElementSibling);

//create element
// var h1 = document.createElement("h1");
// console.log(h1);
// h1.className = "heading";
// h1.id = "heading1";
// h1.setAttribute("title", "i am heading");

// var headingText = document.createTextNode("this is my heading");
// h1.appendChild(headingText);
