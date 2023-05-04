$(document).ready(function () {
  $("#title__items1").css("color", "#9fd00d");
  $("#title__items3").css("color", "#9fd00d"); 
  $("#form__login_back").mouseleave(function () {
     $("#form__login_back").css("display", "none");
     $("#form__login_back").css("z-index", "0");
  });
  $(".form__basket_back").mouseleave(function () {
     $(".form__basket_back").css("display", "none");
     $(".form__basket_back").css("z-index", "0");
  });
  let usernameLoad = localStorage.getItem("userData");
  let passwordLoad = localStorage.getItem("passData");
  if (usernameLoad != null || passwordLoad != null) {
    loginCount = 1;
  }
  document.querySelector("main").style.zIndex = "500";
});

function clickSlide(item) {
  if (item == 1) {
    setTimeout(() => {
      document.getElementById("end__section_intro").style.display = "none";
      document.getElementById("loadSlide1").style.display = "flex";
      document.getElementById("loadSlide2").style.display = "none";
    }, 5000);
    document.getElementById("end__section_intro").style.display = "flex";
    document.getElementById("loadSlide1").style.display = "none";
    document.getElementById("loadSlide2").style.display = "none";
    document.getElementById("title__items1").style.color = "#9fd00d";
    document.getElementById("title__items2").style.color = "#434343";
  }
  if (item == 2) {
    setTimeout(() => {
      document.getElementById("end__section_intro").style.display = "none";
      document.getElementById("loadSlide2").style.display = "flex";
      document.getElementById("loadSlide1").style.display = "none";
    }, 5000);
    document.getElementById("end__section_intro").style.display = "flex";
    document.getElementById("loadSlide1").style.display = "none";
    document.getElementById("loadSlide2").style.display = "none";
    document.getElementById("title__items2").style.color = "#9fd00d";
    document.getElementById("title__items1").style.color = "#434343";
  }
  if (item == 3) {
    setTimeout(() => {
      document.getElementById("end__section_intro2").style.display = "none";
      document.getElementById("loadSlide3").style.display = "flex";
      document.getElementById("loadSlide4").style.display = "none";
    }, 5000);
    document.getElementById("end__section_intro2").style.display = "flex";
    document.getElementById("loadSlide3").style.display = "none";
    document.getElementById("loadSlide4").style.display = "none";
    document.getElementById("title__items3").style.color = "#9fd00d";
    document.getElementById("title__items4").style.color = "#434343";
  }
  if (item == 4) {
    setTimeout(() => {
      document.getElementById("end__section_intro2").style.display = "none";
      document.getElementById("loadSlide4").style.display = "flex";
      document.getElementById("loadSlide3").style.display = "none";
    }, 5000);
    document.getElementById("end__section_intro2").style.display = "flex";
    document.getElementById("loadSlide3").style.display = "none";
    document.getElementById("loadSlide4").style.display = "none";
    document.getElementById("title__items4").style.color = "#9fd00d";
    document.getElementById("title__items3").style.color = "#434343";
  }
}

let loginCount = 0;
function showForm() {
  if (loginCount == 1) {
    let resultMessage = window.confirm("آیا میخواهید دوباره لاگین کنید ؟");
    if (resultMessage == true) {
      loginCount = 0;
      showForm();
    }
  } 
  else {
    document.getElementById("form__login_back").style.display = "flex";
    document.getElementById("form__login_back").style.zIndex = "700";
  }
}

var nameUser = 0;
function GetData() {
  var user = document.getElementById("User__Name").value;
  localStorage.setItem("username", user);
  location.reload();
}

let refFunction = 0;
function showBasket() {
  document.querySelector(".form__basket_back").style.display = "flex";
  document.querySelector(".form__basket_back").style.zIndex = "500";
  let itemCounter = JSON.parse(localStorage.getItem("Products"));
  let titleList = JSON.parse(localStorage.getItem("ProductInfo"));
  let priceList = JSON.parse(localStorage.getItem("Price"));
  let fullPrice = JSON.parse(localStorage.getItem("FullPrice"));
  let height = 11.5;
  if(itemCounter > 3){
    document.querySelector(".form__basket_back").style.overflow = "scroll";
  }
  if (refFunction == 0) {
    for (let index = 0; index < titleList.length; index++) {
      height += 1;
      document.querySelector(".form__basket_back").style.height =
        height + "rem";
      let span = priceList[index];
      let div = titleList[index];

      let divElement = document.createElement("div");
      divElement.setAttribute("class", "basket__item");
      let titleSpan = document.createElement("span");
      titleSpan.setAttribute("id", "basket__title");
      let priceSpan = document.createElement("span");
      priceSpan.setAttribute("id", "basket__price");
      let titleValue = document.createTextNode(div);
      let priceValue = document.createTextNode(span);

      divElement.appendChild(titleSpan);
      divElement.appendChild(priceSpan);
      titleSpan.appendChild(titleValue);
      priceSpan.appendChild(priceValue);
      let mainDiv = document.querySelector(".form__basket_back");
      mainDiv.appendChild(divElement);
    }

    let divBtn = document.createElement("div");
    divBtn.setAttribute("class", "basket__btn");
    let divMiddel = document.createElement("div");
    let btnSpan = document.createElement("span");
    btnSpan.setAttribute("class", ".basket__btn span");
    let btnSpanValue = document.createTextNode(`قیمت کل : ${fullPrice} تومان`);
    let btnElement = document.createElement("button");
    let btnElementValue = document.createTextNode("ثبت سفارش");
    let iconSvg = document.createElement("i");
    iconSvg.setAttribute("class", "fa-solid fa-bag-shopping");

    divBtn.appendChild(btnSpan);
    divBtn.appendChild(divMiddel);
    divMiddel.appendChild(btnElement);
    divMiddel.appendChild(iconSvg);
    btnSpan.appendChild(btnSpanValue);
    btnElement.appendChild(btnElementValue);
    let mainDiv = document.querySelector(".form__basket_back");
    mainDiv.appendChild(divBtn);
    refFunction = 1;
  } else {
    document.querySelector(".form__basket_back").style.display = "flex";
    document.querySelector(".form__basket_back").style.zIndex = "500";
  }
}