document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("child clicked");
  },
  false
);

document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("parent clicked");
  },
  false
);

document.getElementById("grandParent").addEventListener(
  "click",(event)
  =>{
    console.log("grandparent clicked");
    console.log(event)
  },
  false
);
