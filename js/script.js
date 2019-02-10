$(document).ready (function() {
    
    new WOW().init();
    
    $('.js-iphone').waypoint(function(direction) {
       
      $('.js-iphone').addClass('animated slideInUp');   
   }, {
        offset: '70%'
  });
    
    // hamburger nav
    $(".burger-icon").on("click", function(){      
        $(".header nav ul").toggleClass("open");  
    });
    
});