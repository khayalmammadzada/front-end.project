$(document).ready(function(){
    $('.accordion > li > .answer').hide();
      
    $('.accordion > li').click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".answer").slideUp();
      } else {
        $(".accordion > li.active .answer").slideUp();
        $(".accordion > li.active").removeClass("active");
        $(this).addClass("active").find(".answer").slideDown();
      }
      return false;
    });
    
});