"use strict";

// how to target DOM object:
// .id -----> document.getElementById(Id)
// .class Name -----> document.getElementsByClass(name)
// .Tag Name -----> document.getElementsByTagName(name)
//etc

//.querySelector -----> document.querySelector(css Selector)// target first only
//.querySelectorAll -----> document.querySelectorAll(css Selector)// target all

// console.log(document.querySelector(".message").textContent);

// document.querySelector('.number')= 13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value=23
// console.log(document.querySelector('.guess').value);

const x = function () {
  console.log(23);
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔No Number";
  }

  document.querySelector(".message").textContent = "🎉🎉correct number!";
});
