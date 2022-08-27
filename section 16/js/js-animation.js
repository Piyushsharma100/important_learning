var id = setTimeout(Anim, 3000);

function Anim() {
  // console.log("hello");
  var target = document.getElementById("test");
  target.style.width = "500px";
}

function stopAnimation() {
  clearTimeout(id);
}

// var  id =setTimeout(function(){
//     var target = document.getElementById("test");
//     target.style.width="500px";
// },3000);
