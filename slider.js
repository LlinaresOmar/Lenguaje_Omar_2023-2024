const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#slider__btn--left");
const btnRight = document.querySelector("#slider__btn--right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function siguiente(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%"
    }, 500)
}

function anterior(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = document.querySelectorAll(".slider__section")[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%"
    }, 500)
}


btnRight.addEventListener('click', function(){
    siguiente();
    clearInterval();
    
});

btnLeft.addEventListener('click', function(){
    anterior();
    clearInterval();
});

setInterval(function(){
    siguiente()
}, 5000)


/*-------------Cookies-----------------------*/

const cookie1 = document.getElementById("firstCheck");
const cookie2 = document.getElementById("secondCheck");
const cookie3 = document.getElementById("thirdCheck");
const cookie4 = document.getElementById("fourthCheck");
const cookieAll = document.getElementById("checkAll");
const acceptBtn = document.querySelector(".accept");
const cookiePlace = document.querySelector(".cookiePlace")
const denyBtn = document.querySelector(".deny");
var cont = 0;
let checkboxArr = [
    false,
    false,
    false,
    false
]

function acceptCookie(cookie,e){


    if(cookie.checked == true ){
        checkboxArr[e] = true;
        cont++;
    }
    if(cookie.checked == false){
        checkboxArr[e] = false;
        cont--;
    }
    checkCookies();
}
function acceptAllCookies(){
 
    if(checkAll.checked == true){
        cookie1.checked = true;
        cookie2.checked = true;
        cookie3.checked = true;
        cookie4.checked = true;
        cont += 4;
    }
    if(checkAll.checked == false){
        cookie1.checked = false;
        cookie2.checked = false;
        cookie3.checked = false;
        cookie4.checked = false;
        cont -= 4;
    }
    checkCookies();
}

acceptBtn.addEventListener("click", ()=>{
    if(cont>=1){
        cookiePlace.style.display = "none";
    }
})

denyBtn.addEventListener("click", ()=>{
    window.close();
})


function setLocalStorage(key, value){
    localStorage.setItem(key, value);
}

function getCookie(key){
    return localStorage.getItem(key);
}
