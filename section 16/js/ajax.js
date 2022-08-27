console.log("this is Ajax");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("you have clicked the fetchBtn");

  //instantiate an xhr object
  const xhr = new XMLHttpRequest();

  //open the object
  // xhr.open("GET", "piyush.txt", true);

  //USE THIS POST request
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader("content-type", "application/json");

  // what to do on progress(optional)
  xhr.onprogress = function () {
    console.log("On progress");
  };
  xhr.onreadystatechange = function () {
    console.log("ready state is", xhr.readyState);
  };

  // what to do  when response is ready
  xhr.onload = function () {
    if (this.status === 404) {
      // http status code
      console.log(this.responseText);
    } else {
      console.log("Some error occured");
    }
  };

  // send the request
  params = `{"name":"test","salary":"123","age":"23"}`;
  xhr.send(params);
  console.log("we are done");
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
  console.log("you have clicked the pop handler");

  //instantiate an xhr object
  const xhr = new XMLHttpRequest();

  //open the object
  xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);

  // what to do  when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById("list");
      str = "";
      for (key in obj) {
        str += `<li>${obj[key].employee_name} </li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Some error occured");
    }
  };

  // send the request
  xhr.send();
  console.log("we are done fetching employees");
}
