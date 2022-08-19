

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

  $('.sponsors .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:4,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
})
$('.fabulous-slide').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})


  var owl = $('.sponsors .owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


//   Grid and List view codes below
let viewButtons=document.querySelectorAll(".product-list button")
let viewOptions=document.querySelectorAll(".items")

viewButtons.forEach(function(link) {
    link.addEventListener("click", function(){
        viewButtons.forEach(function(item){
            item.classList.remove("active")
        });
        link.classList.add("active")

        var view= link.getAttribute("data-view")

        viewOptions.forEach(function(view){
            view.style.display="none"
        });

        if(view=="list-view"){
            document.querySelector("." + view).style.display="block"
        }
        else{
            document.querySelector("." + view).style.display="flex"
        }
    });
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
})