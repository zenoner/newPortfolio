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


$(".navigation").hide();
$(window).scroll(function(){
  console.log('working');
  if ($(this).scrollTop() > 100){
    $('.navigation').fadeIn();
  } else {
    $('.navigation').fadeOut();
  }
})

}); //end of jquery 
// $(function () {
// 		$(window).scroll(function () {
//             // set distance user needs to scroll before we fadeIn navbar
// 			if ($(this).scrollTop() > 100) {
// 				$('.navbar').fadeIn();
// 			} else {
// 				$('.navbar').fadeOut();
// 			}
// 		});


// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('navigation').outerHeight();

// $(window).scroll(function(event){
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
        
//     }
// }, 250);

// function hasScrolled() {
//     var st = $(this).scrollTop();
    
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
    
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('navigation').removeClass('nav-down').addClass('nav-up');
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('navigation').removeClass('nav-up').addClass('nav-down');
//         }
//     }
    
//     lastScrollTop = st;
// }






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
// Hide Header on on scroll down
