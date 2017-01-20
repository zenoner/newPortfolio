console.log("script loaded")
// $(document).on('turbolinks:load', function(){
//   $("#sticker").css("background-color", "red");
// });

function myFunction(){
  console.log("it is working")
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav"
  }
}


$(document).ready(function(){ //>>>jQuery function<<<
  // $("#sticker").css("background-color", "red");
})
