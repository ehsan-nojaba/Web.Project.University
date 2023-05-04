$(document).scroll(function(){
    if($(window).scrollTop() > 50 || $(window).scrollTop() < 100){
        $(".list__info").hide();
        $("nav").hide();
        $(".list__Box_Search").css("background","#a5d122")
        $(".list__Box_Search").css("height","4rem")
        $("#icon__Search").css("background","rgb(95 124 18)");
        $("#icon__basket").css("color","#fff");
        $("#list__line").css("background","#fff");
        $(".list__Box_span").css("color","#fff");
        $(".list__Box_Number").hide();
        $(".form__basket_back").css("opacity", "0");
        $(".form__basket_back").css("z-index", "0");
        document.getElementById("Box__img").src="../../Image/SVG/logo-short.svg";
    }
});

$(document).scroll(function(){
    if($(window).scrollTop() < 20){
        $(".list__info").show();
        $(".form__basket_back").css("opacity", "0");
        $(".form__basket_back").css("z-index", "0");
        $("nav").show();
        $(".list__Box_Search").css("background","#fff")
        $(".list__Box_Search").css("height","5rem")
        $("#icon__Search").css("background","rgb(165, 209, 34)");
        $("#icon__basket").css("color","rgb(165, 209, 34)");
        $("#list__line").css("background","rgba(82, 82, 82, 0.15)");
        $(".list__Box_span").css("color","#000");
        $(".list__Box_Number").show();
        document.getElementById("Box__img").src="../../Image/SVG/logo.svg";
    }
});


let statusBar = false;
function showNav(){
    if(statusBar == false){
        document.getElementById("nav__bar").style.right = "0rem";
        statusBar = true;
    }
    else{
        document.getElementById("nav__bar").style.right = "-45rem";
        statusBar = false;
    }
}

function closeBar(){
    statusBar = false;
    document.getElementById("nav__bar").style.right = "-45rem";
}

let operation1 = false;
let operation2 = false;
let operation3 = false;
let operation4 = false;
let operation5 = false;
function showNavBar(item){
    if(item == 1){
        if(operation1 == false){
            document.querySelector(".change1").innerHTML = "-";
            document.querySelector("#bar1").style.height = "27.3rem";
            operation1 = true;
        }
        else{
            document.querySelector(".change1").innerHTML = "+";
            document.querySelector("#bar1").style.height = "3.3rem";
            operation1 = false;
        }
    }
    if(item == 2){
        if(operation2 == false){
            document.querySelector(".change2").innerHTML = "-";
            document.querySelector("#bar2").style.height = "22.3rem";
            operation2 = true;
        }
        else{
            document.querySelector(".change2").innerHTML = "+";
            document.querySelector("#bar2").style.height = "3.3rem";
            operation2 = false;
        }
    }
    if(item == 3){
        if(operation3 == false){
            document.querySelector(".change3").innerHTML = "-";
            document.querySelector("#bar3").style.height = "20.3rem";
            operation3 = true;
        }
        else{
            document.querySelector(".change3").innerHTML = "+";
            document.querySelector("#bar3").style.height = "3.3rem";
            operation3 = false;
        }
    }
    if(item == 4){
        if(operation4 == false){
            document.querySelector(".change4").innerHTML = "-";
            document.querySelector("#bar4").style.height = "18.3rem";
            operation4 = true;
        }
        else{
            document.querySelector(".change4").innerHTML = "+";
            document.querySelector("#bar4").style.height = "3.3rem";
            operation4 = false;
        }
    }
    if(item == 5){
        if(operation5 == false){
            document.querySelector(".change5").innerHTML = "-";
            document.querySelector("#bar5").style.height = "17.3rem";
            operation5 = true;
        }
        else{
            document.querySelector(".change5").innerHTML = "+";
            document.querySelector("#bar5").style.height = "3.3rem";
            operation5 = false;
        }
    }
}