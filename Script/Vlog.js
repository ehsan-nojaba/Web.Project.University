let statusNavBar = false;
function showNavBar(){
    // const element = document.getElementById("nav__bar_icon");
    // element.classList.remove("fa-solid fa-bars");
    // element.classList.add("fa-solid fa-x");
    if(statusNavBar == false){
        document.querySelector(".nav__bar").style.height = "59rem";
        statusNavBar = true;
    }
    else{
        document.querySelector(".nav__bar").style.height = "0";
        statusNavBar = false;
    }
}

let check1 = false;
let check2 = false;
function showItemNav(item){
    if(item == 1){
        if(check1 == false){
            document.getElementById("ic1").style.transform = "rotate(90deg)";
            document.getElementById("dw1").style.height = "24rem";
            check1 = true;
        }
        else{
            document.getElementById("ic1").style.transform = "rotate(0deg)";
            document.getElementById("dw1").style.height = "0";
            check1 = false;
        }
    }
    if(item == 2){
        if(check2 == false){
            document.getElementById("ic2").style.transform = "rotate(90deg)";
            document.getElementById("dw2").style.height = "24rem";
            check2 = true;
        }
        else{
            document.getElementById("ic2").style.transform = "rotate(0deg)";
            document.getElementById("dw2").style.height = "0";
            check2 = false;
        }
    }
}