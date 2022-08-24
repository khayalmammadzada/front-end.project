
let shopTbody=document.querySelector(".shop-tbody")
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
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:4,
            nav:true,
            dots:false,

        },
        600:{
            items:4,
            nav:true,
            dots:false
        },
        1000:{
            items:5,
            nav:true,
            dots:false,
            loop:true
        }
    }
})


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
            nav:true,
            dots: false
        },
        600:{
            items:1,
            nav:false,
            dots: false
            
        },
        1000:{
            items:3,
            nav:true,
            loop:true,
            dots: false

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
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true,
            
            
        }
    }
})




$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

 

// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
//   })


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
        addToCartPage()
        
    });
});

let cartView=document.querySelector(".basket-dropdown-menu")
let basketIcon=document.querySelector(".basket i")
basketIcon.addEventListener("click", function(){
    cartView.classList.toggle("show")
   console.log();
   let total=0;
   let children=Array.from(cartView.children)
   children.forEach((child)=>{
       total+=child.clientHeight
   })
   if (cartView.classList.contains("show")) {
    cartView.style.height=total + "px"
   }
   else if(!cartView.classList.contains("show")){
    cartView.style.height= "0px"
   }
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
        btn.className="btn btn-danger delete-button"
        btn.innerText="X"
        btn.setAttribute("data-id", index.dataId)
        td3.append(btn)
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.setAttribute("data-id",index.dataId)
        tBody.append(tr)

         btn.addEventListener("click", function(e){
             console.log(document.querySelector(".second"));
         let basket = JSON.parse(localStorage.getItem("basket"))
            let result = basket.find((obj)=>{
               return obj.dataId == btn.parentElement.parentElement.getAttribute("data-id")
                
            })
            let map=basket.map((obj)=>{
                if (obj.dataId != result.dataId) {
                    return obj
                }
            })
           let filtered = map.filter((obj)=>{
                return obj
            })
            localStorage.setItem("basket", JSON.stringify(filtered))
            btn.parentElement.parentElement.remove();
            if(!tBody.firstElementChild){
                document.querySelector(".second").style.display="none"
                document.querySelector(".first").style.display="none"
                document.querySelector(".emptyCartText").style.display="flex"
                cartView.style.height="40px"

            }
         });
         
        


        

    });
}


// $(window).scroll(function(){
//     if($(window).scrollTop()>=50){
//         $('.header').css('background', 'transparent');
//     }else{
//         $('.header').css('background', 'white')
//     }
    
// })

$(document).ready(function(){
    $(window).bind('scroll', function(){
        var gap =80
        if($(window).scrollTop()>gap){
            $('.header').addClass('active')
        }else{
            $('.header').removeClass('active')
        }
    })
})


// function totalCost(item){
//     let cartCost=localStorage.getItem('totalCost')
//     if(cartCost!=null){
//         cartCost=parseInt(cartCost)
//         localStorage.setItem("totalCost", cartCost+item.price)

//     }else{
//         localStorage.setItem("totalCost", item.price)
//     }
// }

// function displayCart(item){
// let cartItems=localStorage.getItem("basket")
// cartItems=JSON.parse(cartItems);
// let table=document.querySelector(".table-responsive tbody tr")
// if(cartItems){
//     Object.values(cartItems && table).map(item=>{
//         table.innerHTML+= `<td class="text-center"> 
//         <a href=""><img src="assets/images/${item.picture}.jpg" class="img-thumbnail"></a> 
//         </td> 
//         <td class="text-left"><a href="">${item.name}</a></td>`

//     });
// }
// }
addToCart()


// if(!tBody.firstElementChild){
//     document.querySelector(".second").style.display="none"
//     document.querySelector(".emptyCartText").style.display="flex"
    
    

// }
if(!tBody.firstElementChild){
    document.querySelector(".second").style.display="none"
    document.querySelector(".emptyCartText").style.display="flex"

}

// Hamburger menu show
let hamburger=document.querySelector(".menu .open")
let swipeNav=document.querySelector(".swipe-nav")
hamburger.addEventListener("click", function(){
swipeNav.style.transform="translateX(0px)"

});

let closeIcon=document.querySelector(".swipe-nav .close")
closeIcon.addEventListener("click", function(){
    swipeNav.style.transform="translateX(-300px)"

});

// Cart Page add to cart

let cartEmpty=document.querySelector(".cart-empty")
console.log(cartEmpty);

function addToCartPage(){
    let basket=JSON.parse(localStorage.getItem("basket"))
    basket.forEach((obj)=>{
        let tr=document.createElement("tr") 
        let td1=document.createElement("td")
        let image=document.createElement("img")
        image.src=`./assets/images/${obj.img}`
        image.style.width="100px"
        td1.append(image)

        let td2=document.createElement("td")
        
        td2.innerText=obj.name
        let td3=document.createElement("td")
        td3.className="id"
        td3.innerText=obj.dataId    
        let td4=document.createElement("td")
        let inpAndbtns=document.createElement("div")
        inpAndbtns.className="td4-parent"
        let input=document.createElement("input")
        let btn1=document.createElement("button")
        btn1.className="btn btn-dark"
        btn1.innerHTML='<i class="fa-solid fa-rotate"></i>'
        let btn2=document.createElement("button")
        btn2.innerHTML='<i class="fa-solid fa-circle-minus"></i>'
        btn2.className="btn btn-danger"
        inpAndbtns.append(input, btn1, btn2)
        td4.append(inpAndbtns)
        
        let td5=document.createElement("td")
        td5.innerText=obj.price
        let td6=document.createElement("td")
        td6.innerText=obj.price * obj.count

        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)

        tr.append(td5)
        tr.append(td6)
        
        shopTbody.append(tr)
        btn2.addEventListener("click", function(){
            let basket=JSON.parse(localStorage.getItem("basket"))
            let result=basket.find((obj)=>{
                 return obj.dataId==btn2.parentElement.parentElement.parentElement.querySelector(".id").innerText
            })
           let map=basket.map((obj)=>{
            if(result.dataId != obj.dataId){
                return obj
            }
            })
           let filtered=map.filter((obj)=>{
            return obj;
            })
            localStorage.setItem("basket", JSON.stringify(filtered))
            btn2.parentElement.parentElement.parentElement.remove();
            console.log(document.querySelector(".table-responsive"));
            if(!shopTbody.firstElementChild){
                cartEmpty.style.display="flex"
                document.querySelector(".table-responsive").style.display="none"
            }else{
                cartEmpty.style.display="none"

            }
        });
    })
}
addToCartPage()
