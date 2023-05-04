function showNumber(){
    var item = document.getElementById("first__tool").value;
    document.getElementById("number__first").innerHTML = " از " + item + " تومان ";
}

function showNumber2(){
    var item = document.getElementById("double__tool").value;
    document.getElementById("number__second").innerHTML = " تا " + item + " تومان ";
}

let operation = false;
function showPriceBox(){
    if(operation == false){
        document.getElementById("show").innerHTML = "-";
        document.querySelector(".price__display").style.opacity ="1";
        document.querySelector(".price__display").style.display ="flex";
        operation = true;
    }
    else{
        document.getElementById("show").innerHTML = "+";
        document.querySelector(".price__display").style.opacity ="0";
        document.querySelector(".price__display").style.display ="none";
        operation = false;
    }
}
let operations2 = false;
function showTitleFilter(){
    if(operations2 == false){
        document.getElementById("show2").innerHTML = "-";
        document.querySelector(".display__other_product").style.display ="flex";
        operations2 = true;
    }
    else{
        document.getElementById("show2").innerHTML = "+";
        document.querySelector(".display__other_product").style.display ="none";
        operation2 = false;
    }
}

let operations3 = false;
let operations4 = false;
let operations5 = false;
let operations6 = false;
function showMenu(item){
    if(item == 1){
       if(operations3 == false){
            document.querySelector(".item1").innerHTML = "-";
            document.getElementById("menu1").style.display = "flex";
            document.querySelector(".item1").style.background = "transparent";
            document.querySelector(".item1").style.border = "1px solid #87a91f";
            document.querySelector(".item1").style.color = "#87a91f";
            operations3 = true;
       }
       else{
            document.querySelector(".item1").innerHTML = "+";
            document.getElementById("menu1").style.display = "none";
            document.querySelector(".item1").style.background = "#87a91f";
            document.querySelector(".item1").style.border = "none";
            document.querySelector(".item1").style.color = "#fff";
            operations3 = false;
       }
    }
    else if(item == 2){
        if(operations4 == false){
             document.querySelector(".item2").innerHTML = "-";
             document.getElementById("menu2").style.display = "flex";
             document.querySelector(".item2").style.background = "transparent";
             document.querySelector(".item2").style.border = "1px solid #87a91f";
             document.querySelector(".item2").style.color = "#87a91f";
             operations4 = true;
        }
        else{
             document.querySelector(".item2").innerHTML = "+";
             document.getElementById("menu2").style.display = "none";
             document.querySelector(".item2").style.background = "#87a91f";
             document.querySelector(".item2").style.border = "none";
             document.querySelector(".item2").style.color = "#fff";
             operations4 = false;
        }
    }
    else if(item == 3){
        if(operations5 == false){
             document.querySelector(".item3").innerHTML = "-";
             document.getElementById("menu3").style.display = "flex";
             document.querySelector(".item3").style.background = "transparent";
             document.querySelector(".item3").style.border = "1px solid #87a91f";
             document.querySelector(".item3").style.color = "#87a91f";
             operations5 = true;
        }
        else{
             document.querySelector(".item3").innerHTML = "+";
             document.getElementById("menu3").style.display = "none";
             document.querySelector(".item3").style.background = "#87a91f";
             document.querySelector(".item3").style.border = "none";
             document.querySelector(".item3").style.color = "#fff";
             operations5 = false;
        }
    }
    else if(item == 4){
        if(operations6 == false){
             document.querySelector(".item4").innerHTML = "-";
             document.getElementById("menu4").style.display = "flex";
             document.querySelector(".item4").style.background = "transparent";
             document.querySelector(".item4").style.border = "1px solid #87a91f";
             document.querySelector(".item4").style.color = "#87a91f";
             operations6 = true;
        }
        else{
             document.querySelector(".item4").innerHTML = "+";
             document.getElementById("menu4").style.display = "none";
             document.querySelector(".item4").style.background = "#87a91f";
             document.querySelector(".item4").style.border = "none";
             document.querySelector(".item4").style.color = "#fff";
             operations6 = false;
        }
    }
}

function selectImage(path){
   document.getElementById("main__img").src = `../../Image/Product/Main-Product/Main-Product${path}.jpg`;
}

function GoPanel(n) {
    var t = $(n).attr("data-target");
    $("html,body").animate({
        scrollTop: $("." + t).offset().top - 70
    }, 200)
}

let statusTab1 = true;
let statusTab2 = true;
let statusTab3 = true;
function showTab(item){
    if(statusTab1 == true){
        if(item == 1){
            document.querySelector("#rot1").style.transform = "rotate(0deg)";
            document.getElementById("tab1").style.display = "none";
            document.querySelector("#border1").style.paddingBottom = "0px";
            document.querySelector("#border1").style.borderBottom = "none";
            statusTab1 = false;
        }
    }
    else{
        if(item == 1){
            document.querySelector("#rot1").style.transform = "rotate(180deg)";
            document.getElementById("tab1").style.display = "flex";
            document.querySelector("#border1").style.paddingBottom = "15px";
            document.querySelector("#border1").style.borderBottom = "1px solid #000";
            statusTab1 = true;
        }
    }
    if(statusTab2 == true){
        if(item == 2){
            document.querySelector("#rot2").style.transform = "rotate(0deg)";
            document.getElementById("tab2").style.display = "none";
            document.querySelector("#border2").style.paddingBottom = "0px";
            document.querySelector("#border2").style.borderBottom = "none";
            statusTab2 = false;
        }
    }
    else{
        if(item == 2){
            document.querySelector("#rot2").style.transform = "rotate(180deg)";
            document.getElementById("tab2").style.display = "flex";
            document.querySelector("#border2").style.paddingBottom = "15px";
            document.querySelector("#border2").style.borderBottom = "1px solid #000";
            statusTab2 = true;
        }
    }
    if(statusTab3 == true){
        if(item == 3){
            document.querySelector("#rot3").style.transform = "rotate(0deg)";
            document.getElementById("tab3").style.display = "none";
            document.querySelector("#border3").style.paddingBottom = "0px";
            document.querySelector("#border3").style.borderBottom = "none";
            statusTab3 = false;
        }
    }
    else{
        if(item == 3){
            document.querySelector("#rot3").style.transform = "rotate(180deg)";
            document.getElementById("tab3").style.display = "flex";
            document.querySelector("#border3").style.paddingBottom = "15px";
            document.querySelector("#border3").style.borderBottom = "1px solid #000";
            statusTab3 = true;
        }
    }
    document.querySelector("footer").style.marginTop = footerMargin + "pc";
}

function showSlider(slider){
    if(slider == 1){
        document.querySelector(".box__slider_product .card__slider_product:nth-child(2)").style.display = "none";
        document.querySelector(".box__slider_product .card__slider_product:nth-child(3)").style.display = "none";
        document.querySelector(".box__slider_product .card__slider_product:nth-child(4)").style.display = "none";
        document.querySelector(".box__slider_product .card__slider_product:nth-child(5)").style.display = "none";
        document.querySelector(".box__slider_product .card__slider_product:nth-child(6)").style.display = "flex";
        document.querySelector(".box__slider_product .card__slider_product:nth-child(7)").style.display = "flex";
        document.querySelector(".box__slider_product .card__slider_product:nth-child(8)").style.display = "flex";
        document.querySelector(".box__slider_product .card__slider_product:nth-child(9)").style.display = "flex";
    }
    else{
        document.querySelector(".box__slider_product .card__slider_product:nth-child(2)").style.display = "flex";
        document.querySelector(".box__slider_product .card__slider_product:nth-child(3)").style.display = "flex";
        document.querySelector(".box__slider_product .card__slider_product:nth-child(4)").style.display = "flex";
        document.querySelector(".box__slider_product .card__slider_product:nth-child(5)").style.display = "flex";
        document.querySelector(".box__slider_product .card__slider_product:nth-child(6)").style.display = "none";
        document.querySelector(".box__slider_product .card__slider_product:nth-child(7)").style.display = "none";
        document.querySelector(".box__slider_product .card__slider_product:nth-child(8)").style.display = "none";
        document.querySelector(".box__slider_product .card__slider_product:nth-child(9)").style.display = "none";
    }
}

function textClear(){
    document.querySelector("textarea").value = null;
}


//Show Filter Tab
function showFilter(item){
    if(item == 1){
        document.getElementById("barShw1").style.height = "71rem";
        document.getElementById("barShw2").style.height = "0";
        document.getElementById("filter__box").style.zIndex = "0";
    }
    if(item == 2){
        document.getElementById("barShw2").style.height = "71rem";
        document.getElementById("barShw1").style.height = "0";
        document.getElementById("filter__box").style.zIndex = "0";
    }
}

// Show Filter Box
let filterBoxStatus1 = false;
let filterBoxStatus2 = false;
function showFilterBox(item){
    if(item == 1){
        document.getElementById("shwTitle1").style.borderBottom = "3px solid #93b921";
        document.getElementById("shwTitle2").style.borderBottom = "none";
        document.getElementById("range__filter_box").style.display = "flex";
        document.getElementById("range__price").style.display = "none";
    }
    if(item == 2){
        document.getElementById("shwTitle2").style.borderBottom = "3px solid #93b921";
        document.getElementById("shwTitle1").style.borderBottom = "none";
        document.getElementById("range__filter_box").style.display = "none";
        document.getElementById("range__price").style.display = "flex";
    }
}

//Close Filter Tab 
function closeFilterTab(item){
    if(item == 1){
        document.getElementById("barShw1").style.height = "0";
        document.getElementById("barShw2").style.height = "0";
        document.getElementById("filter__box").style.zIndex = "5000";
    }
    if(item == 2){
        document.getElementById("barShw1").style.height = "0";
        document.getElementById("barShw2").style.height = "0";
        document.getElementById("filter__box").style.zIndex = "5000";
    }
}