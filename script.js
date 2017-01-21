console.log("script loaded")
// $(document).on('turbolinks:load', function(){
//   $("#sticker").css("background-color", "red");
// });

function myFunction(){

  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav"
  }
}

$(document).ready(function(){
   $('.switch').mouseenter(function(){
      console.log("i got you")
      $('img.screenshot', this).hide();
      $('.info', this).show()
      if ($('.lang', this).is(':hidden')){
        $('.lang').fadeIn('slow')
      } else {
        console.log('dont have')
      }
    });

   $('.switch').mouseleave(function(){
      $('img.screenshot').show();
      $('.info').hide();
      $('.lang').hide();
    });


   $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
   $('html, body').animate({
       scrollTop: $(".portfolio").offset().top
   }, 1000);
 });


    // $("#about").click(function(){
    //     console.log("this is working")
    //     $(this).animate({down: '250px'});
    // });

    //$("#about").animate({down: '250px'})



});



// $(document).ready(function(){ //>>>jQuery function<<<
//   // $("#sticker").css("background-color", "red");
//   $(".icon").click(function(){
//     //  $(".test").slideToggle("slow", function(){

//     // })
//   });
// //   $(".icon").click(function(){
// //     $(".test").slideUp();
// // })
// });
