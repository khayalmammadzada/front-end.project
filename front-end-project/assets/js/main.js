

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

//   $('.sponsors .owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:4,
//             nav:true
//         },
//         600:{
//             items:4,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:true
//         }
//     }
// })


 $('.under-htc').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:5,
            nav:true
        },
        600:{
            items:5,
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
$('.slider').owlCarousel({
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
            items:1,
            nav:false,
            loop:true,
            dots: false
            
        }
    }
})



var owl = $('.sponsors');
owl.owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
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

let basket;
let result=localStorage.getItem("basket")
if(!result){
    localStorage.setItem("basket", JSON.stringify([]))
}


let addtocartButtons=document.querySelectorAll(".one-product .description button")
addtocartButtons.forEach(function(btn){
btn.addEventListener("click", function(e){
    basket=JSON.parse(localStorage.getItem("basket")) || [];
        let imgs=e.target.parentElement.parentElement.querySelector(".image img").getAttribute("src").split('/')
        let img=imgs[imgs.length-1]
        let name=e.target.parentElement.querySelector("h4 a").innerText
        let priceArr=e.target.parentElement.querySelector("p").innerText.split('$')
        let price=priceArr[priceArr.length-1]
        let dataId=e.target.parentElement.parentElement.getAttribute("data-id")
        let existed=basket.find((item)=>{
            return item.dataId==dataId
        });
    
        if(!existed){
            let item={dataId, img, name, price, count:1}
            basket.push(item)
        }
        else{
            existed.count++
        }
        localStorage.setItem("basket", JSON.stringify(basket))
        addToCart()
    });
});

let cartView=document.querySelector(".basket-dropdown-menu")
let basketIcon=document.querySelector(".basket i")
basketIcon.addEventListener("click", function(){
   console.log();
   let total=0;
   let children=Array.from(cartView.children)
   children.forEach((child)=>{
       total+=child.clientHeight
   })
   cartView.style.height=total + "px"
});

let tBody=document.querySelector(".table .tbody")
console.log(tBody);
let emptyText=document.querySelector(".emptyCartText")
function addToCart(e){
    let basket =JSON.parse(localStorage.getItem("basket"))
    let tableRows=tBody.querySelectorAll("tr")
    if(tableRows.length>0){
        tableRows.forEach((tr)=>{
            tr.remove();
        });
    }
    basket.forEach((index)=>{
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1.className="img-area"
        let image=document.createElement("img")
        image.style.width="100%"
        image.src=`assets/images/${index.img}`
        td1.append(image)

        let td2=document.createElement("td")
        td1.className="detail"
        let name=document.createElement("p")
        let price=document.createElement("p")
        let id=index.dataId
        name.className="name"
        price.className="price"
        name.innerText=index.name
        price.innerText=index.price
        td2.append(name,price)
        let td3=document.createElement("td")
        let btn=document.createElement("button")
        btn.className="btn btn-danger"
        btn.innerText="X"
        btn.setAttribute("data-id", index.dataId)
        td3.append(btn)
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tBody.append(tr)


        if(cartView.querySelector(".tbody").firstElementChild==null){
            emptyText.style.display="flex"
        }else{
            emptyText.style.display="none"

        }

    });
}
addToCart()

$(window).scroll(function(){
    if($(window).scrollTop()>=50){
        $('.header').css('background', 'transparent');
    }else{
        $('.header').css('background', 'white')
    }
    
})