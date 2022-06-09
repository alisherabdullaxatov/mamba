//sign
$(function(){
    $("#bum").click(function(){
        $("#bur2").toggleClass("active")
    })
    $("#bur").click(function(){
        $("#bur2").toggleClass("active")
    })
    $(".list-bar-drob-down2").click(function(){
        $(".list-bar-down2").toggleClass("active")
    })
    $(".list-bar-drob-down").click(function(){
        $(".icon-up2").toggleClass("active")
    })

    // ++++++++++++++++++++++++++++++++++++++++
    // SCROLL
// ++++++++++++++++++++++++++++++++++++++++++++++
 let about = $(".text-in").offset().top;//offset bu masogani aniqlab beradi
console.log(about);
$(window).scroll(function(){
  let win = $(window).scrollTop();

  if(win>=about){
    $(".about-scroll").animate({
      opacity: "1",
      top: "0"
 
     
        },1000) 
      }

})
let about__info = $(".about-text").offset().top;//offset bu masogani aniqlab beradi
console.log(about__info);
$(window).scroll(function(){
  let win = $(window).scrollTop();

  if(win>=about__info){
    $(".card-about").animate({
      opacity: "1",
      top: "0"
       
        },1000) 
      }

})
let number__scroll = $(".card-about").offset().top;//offset bu masogani aniqlab beradi
console.log(number__scroll);
$(window).scroll(function(){
  let win = $(window).scrollTop();

  if(win>=number__scroll){
    $(".row-number").animate({
      opacity: "1",
      top: "0"
        },1000);
      }

});
});




document.getElementById("sign").onclick = function(){
    document.getElementById("sin").style.display ='block';
}

document.getElementById("iks").onclick = function(){
    document.getElementById("sin").style.display = 'none';
}
//sign up
document.getElementById("up-sign").onclick = function(){
    document.getElementById("sin2").style.display = 'block';
}
document.getElementById("sign-up").onclick = function(){
    document.getElementById("sin2").style.display = "none"
}
// document.getElementById('sign-in-go').onclick  = function(){
//     document.getElementById('sin').style.display = "block"
// }
// document.getElementById('sign-in-go').onclick  = function(){
//     document.getElementById('sin2').style.display = "block"
// }

// sign in
const user =[ "1", "2"];
function islogin(){
    let login = document.myForm.email;

    if(login.value == user[0]){
                       
        document.getElementsByClassName("sp")[0].innerHTML =' <i class="fa-solid fa-check"></i>'  ;
    }
    else{
        document.getElementsByClassName("sp")[0].innerHTML = '<i class="fa-solid fa-times"><i>';
    }
}
function isPassword(){
    let parol = document.myForm.parol;
    if(parol.value == user[1]){
        document.getElementsByClassName("sp")[1].innerHTML = '<i class="fa-solid fa-check"></i>';
    }
    else{
        document.getElementsByClassName("sp")[1].innerHTML = '<i class="fa-solid fa-times"></i>';
    }
}
// window.onclick = function(e){
//     let modal = document.getElementById("mymodal");
    
//     // console.log(e.target);

//     if(modal == e.target){
//         modal.style.display = "none";
//     }
// }
//scroll up

let upp = document.querySelector(".up")

window.addEventListener('scroll', ()=>{

             if(window.pageYOffset>100){
                 upp.classList.add("show")
             }
                 else{
                 upp.classList.remove("show")

                 }
})
// header slider
let indeximg = 1
showImg(a);
function showImg(a){
    let sliders = document.querySelectorAll('.slide')
    let line = document.querySelectorAll(".btns")
    if(a>sliders.length){
        indeximg = 1 ;
    }
    if(a<1){
        indeximg = sliders.length;
    }
    for(let i=0; i<sliders.length; i++){
        sliders[i].classList.remove("active")
    }
    for(let i=0; i<line.length; i++){
        line[i].classList.remove("active")

    }
    sliders[indeximg -1].classList.add("active")
    line[indeximg -1].classList.add("active")

}
function goChiziq(a){
    showImg(indeximg = a);
}
function goNext(a){
    showImg(indeximg +=a);
}


// scroll number about
let num = document.querySelectorAll(".number-scrol");
let vaxt = 200;
num.forEach((num) =>{
        let sonboshi = 0 ;
        let sonoxiri = parseInt(num.getAttribute('data-val'))
        let times = vaxt/sonoxiri
        let alisher = setInterval(function(){
            sonboshi += 1
            num.textContent = sonboshi
            if(sonboshi == sonoxiri){
                clearInterval(alisher)
            }
        },times)
})
////portfoliya
let tabs = document.querySelectorAll(".menu");
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () =>{
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        })
         tabs[index].classList.add("active");
    }); 
  
})

// ACCARDION
let acc = document.querySelectorAll(".acca");
let text = document.querySelectorAll('.a');
acc.forEach((acca, index) => {
    acca.addEventListener('click', () =>{
        text.forEach((textt) => {
            textt.classList.remove("active");
        })
        acc.forEach((acca) => {
            acca.classList.remove("active");
        });
         text[index].classList.add("active");
         acc[index].classList.add('active');
    }); 
  
});