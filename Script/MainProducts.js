let footerMargin = 0;
let marginSecond = 0;
$(document).ready(function(){
  const url = window.location.href;
  if(url == "http://127.0.0.1:5500/Pages/Products/Product1.html"){
    footerMargin = 363;
    marginSecond = 363;
  }
  if(url == "http://127.0.0.1:5500/Pages/Products/Product2.html"){
    footerMargin = 357;
    marginSecond = 357;
  }
  if(url == "http://127.0.0.1:5500/Pages/Products/Product3.html"){
    footerMargin = 360;
    marginSecond = 360;
  }
  if(url == "http://127.0.0.1:5500/Pages/Products/Product4.html"){
    footerMargin = 313;
    marginSecond = 313;
  }
  if(url == "http://127.0.0.1:5500/Pages/Products/Product5.html"){
    footerMargin = 372;
    marginSecond = 372;
  }
});

let counterPrice = 0;
let fullPrice = JSON.parse(localStorage.getItem("FullPrice"));

function upPrice(price) {
  counterPrice += 1;
  document.getElementById("count__number").innerText = counterPrice;
  let result = price * counterPrice;
  fullPrice += result;
  localStorage.setItem("FullPrice", fullPrice);
}

function downPrice(price) {
  counterPrice -= 1;
  if (counterPrice == 0) {
    counterPrice = 1;
  }
  document.getElementById("count__number").innerText = counterPrice;
  let result = price * counterPrice;
  fullPrice -= result;
  localStorage.setItem("FullPrice", fullPrice);
}

let getUser = " ";
let FirstNameUsers = JSON.parse(localStorage.getItem("Name"));
let PhoneUsers = JSON.parse(localStorage.getItem("UserNames"));
let UserLogin = localStorage.getItem("userData");
function getDataUser() {
  for (let index = 0; index < FirstNameUsers.length; index++) {
    let user = PhoneUsers[index];
    let usernameArray = FirstNameUsers[index];
    if (user == UserLogin) {
      getUser = usernameArray;
    }
  }
}

let fullTime = "";
function getDateTime() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  let formattedDate = `${currentYear} - ${currentMonth} - ${currentDay}`;
  //Time
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  let currentSecond = currentTime.getSeconds();
  let formattedTime = `${currentHour}:${currentMinute}:${currentSecond}`;

  fullTime = formattedDate + " - " + formattedTime;
}

function addComment() {
  footerMargin += 12;
  document.querySelector("footer").style.marginTop = footerMargin + "pc";
  let boxType = document.querySelector("textarea").value;
  let box_Div = document.getElementById("comment_box");

  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "comment__info");

  let header_div = document.createElement("div");
  header_div.setAttribute("class", "customer__info_box");

  //header box 1
  let header_div_one = document.createElement("div");
  header_div_one.setAttribute("class", "customer__info_box_one");

  //main div star
  let div_Star = document.createElement("div");
  div_Star.setAttribute("class", "customer__star");

  //star element
  let star1 = document.createElement("i");
  star1.setAttribute("class", "fa-solid fa-star");
  let star2 = document.createElement("i");
  star2.setAttribute("class", "fa-solid fa-star");
  let star3 = document.createElement("i");
  star3.setAttribute("class", "fa-solid fa-star");
  let star4 = document.createElement("i");
  star4.setAttribute("class", "fa-solid fa-star");
  let star5 = document.createElement("i");
  star5.setAttribute("class", "fa-solid fa-star");

  div_Star.appendChild(star1);
  div_Star.appendChild(star2);
  div_Star.appendChild(star3);
  div_Star.appendChild(star4);
  div_Star.appendChild(star5);

  //Create img element
  let img_profile = document.createElement("img");
  img_profile.setAttribute("src", "../../Image/Person/A8.jpg");
  img_profile.setAttribute("id", "img__comment");

  //Create main info
  let info_profile = document.createElement("div");
  info_profile.setAttribute("class", "comment__title");

  //span info
  let span_info1 = document.createElement("span");
  span_info1.setAttribute("id", "title_one");

  getDataUser();
  let spanValue_one = document.createTextNode(getUser);
  span_info1.appendChild(spanValue_one);

  let span_info2 = document.createElement("span");
  span_info2.setAttribute("id", "title_two");
  getDateTime();
  let spanValue_two = document.createTextNode(fullTime);
  span_info2.appendChild(spanValue_two);

  info_profile.appendChild(span_info1);
  info_profile.appendChild(span_info2);

  //full data one
  header_div_one.appendChild(div_Star);
  header_div_one.appendChild(img_profile);
  header_div_one.appendChild(info_profile);

  //header box 2
  let header_div_two = document.createElement("div");
  header_div_two.setAttribute("class", "customer__info_box_two");

  let link_info = document.createElement("i");
  link_info.setAttribute("class", "fa-solid fa-link");
  link_info.setAttribute("id", "comment__link");

  //like div
  let div_like_up = document.createElement("div");
  div_like_up.setAttribute("class", "status__like");

  let icon_like_up = document.createElement("i");
  icon_like_up.setAttribute("class", "fa-solid fa-thumbs-up");

  let span_like_up = document.createElement("span");
  let span_like_up_value = document.createTextNode(0);
  span_like_up.appendChild(span_like_up_value);

  div_like_up.appendChild(icon_like_up);
  div_like_up.appendChild(span_like_up);

  //deslike div
  let div_like_down = document.createElement("div");
  div_like_down.setAttribute("class", "status__like");

  let icon_like_down = document.createElement("i");
  icon_like_down.setAttribute("class", "fa-solid fa-thumbs-down");

  let span_like_down = document.createElement("span");
  let span_like_down_value = document.createTextNode(0);
  span_like_down.appendChild(span_like_down_value);

  div_like_down.appendChild(icon_like_down);
  div_like_down.appendChild(span_like_down);

  //full data two
  header_div_two.appendChild(link_info);
  header_div_two.appendChild(div_like_up);
  header_div_two.appendChild(div_like_down);

  header_div.appendChild(header_div_one);
  header_div.appendChild(header_div_two);

  //Create span comment element
  let span_comment_detail = document.createElement("span");
  span_comment_detail.setAttribute("class", "main__comment");
  let comment_value = document.createTextNode(boxType);
  span_comment_detail.appendChild(comment_value);

  //Create Full Element
  mainDiv.appendChild(header_div);
  mainDiv.appendChild(span_comment_detail);

  box_Div.appendChild(mainDiv);
  document.querySelector("textarea").value = "";
  alert("نظر شما با موفقیت ثبت شد !!");
}

function showReview(item){
  let height = 65
  if(item == 1){
    footerMargin = 381;
    height = 109;
  }
  if(item == 2){
    footerMargin = 539;
    height = 463;
  }
  if(item == 3){
    footerMargin = 565;
    height = 508;
  }
  if(item == 5){
    footerMargin = 543;
    height = 443;
  }
  document.querySelector(".review").style.height = height + "vh";
  document.querySelector(".btn__review").style.display = "none";
  document.querySelector("footer").style.marginTop = footerMargin + "pc";
}

function showDisplay(display , end){
  if(display == 1){
      document.getElementById("show1").style.display = "flex";
      document.getElementById("show2").style.display = "none";
      document.getElementById("show3").style.display = "none";
      document.getElementById("show4").style.display = "none";
      document.getElementById("show5").style.display = "none";
      document.getElementById("show6").style.display = "none";

      document.getElementById("color1").style.color = "#fff";
      document.getElementById("color2").style.color = "#000";
      document.getElementById("color3").style.color = "#000";
      document.getElementById("color4").style.color = "#000";
      document.getElementById("color5").style.color = "#000";
      document.getElementById("color6").style.color = "#000";

      document.getElementById("color1").style.backgroundColor = "#87a91f";
      document.getElementById("color2").style.backgroundColor = "#eff2f7";
      document.getElementById("color3").style.backgroundColor = "#eff2f7";
      document.getElementById("color4").style.backgroundColor = "#eff2f7";
      document.getElementById("color5").style.backgroundColor = "#eff2f7";
      document.getElementById("color6").style.backgroundColor = "#eff2f7";
      document.querySelector("footer").style.marginTop = marginSecond + "pc";
  }
  else if(display == 2){
      document.getElementById("show1").style.display = "none";
      document.getElementById("show2").style.display = "flex";
      document.getElementById("show3").style.display = "none";
      document.getElementById("show4").style.display = "none";
      document.getElementById("show5").style.display = "none";
      document.getElementById("show6").style.display = "none";

      document.getElementById("color2").style.color = "#fff";
      document.getElementById("color1").style.color = "#000";
      document.getElementById("color3").style.color = "#000";
      document.getElementById("color4").style.color = "#000";
      document.getElementById("color5").style.color = "#000";
      document.getElementById("color6").style.color = "#000";

      document.getElementById("color2").style.backgroundColor = "#87a91f";
      document.getElementById("color1").style.backgroundColor = "#eff2f7";
      document.getElementById("color3").style.backgroundColor = "#eff2f7";
      document.getElementById("color4").style.backgroundColor = "#eff2f7";
      document.getElementById("color5").style.backgroundColor = "#eff2f7";
      document.getElementById("color6").style.backgroundColor = "#eff2f7";
      document.querySelector("footer").style.marginTop = marginSecond + "pc";
  }
  else if(display == 3){
      document.getElementById("show1").style.display = "none";
      document.getElementById("show2").style.display = "none";
      document.getElementById("show3").style.display = "flex";
      document.getElementById("show4").style.display = "none";
      document.getElementById("show5").style.display = "none";
      document.getElementById("show6").style.display = "none";

      document.getElementById("color3").style.color = "#fff";
      document.getElementById("color2").style.color = "#000";
      document.getElementById("color1").style.color = "#000";
      document.getElementById("color4").style.color = "#000";
      document.getElementById("color5").style.color = "#000";
      document.getElementById("color6").style.color = "#000";

      document.getElementById("color3").style.backgroundColor = "#87a91f";
      document.getElementById("color2").style.backgroundColor = "#eff2f7";
      document.getElementById("color1").style.backgroundColor = "#eff2f7";
      document.getElementById("color4").style.backgroundColor = "#eff2f7";
      document.getElementById("color5").style.backgroundColor = "#eff2f7";
      document.getElementById("color6").style.backgroundColor = "#eff2f7";
      document.querySelector("footer").style.marginTop = marginSecond + "pc";
  }
  else if(display == 4){
      document.getElementById("show1").style.display = "none";
      document.getElementById("show2").style.display = "none";
      document.getElementById("show3").style.display = "none";
      document.getElementById("show4").style.display = "flex";
      document.getElementById("show5").style.display = "none";
      document.getElementById("show6").style.display = "none";

      document.getElementById("color4").style.color = "#fff";
      document.getElementById("color2").style.color = "#000";
      document.getElementById("color1").style.color = "#000";
      document.getElementById("color3").style.color = "#000";
      document.getElementById("color5").style.color = "#000";
      document.getElementById("color6").style.color = "#000";

      document.getElementById("color4").style.backgroundColor = "#87a91f";
      document.getElementById("color2").style.backgroundColor = "#eff2f7";
      document.getElementById("color1").style.backgroundColor = "#eff2f7";
      document.getElementById("color3").style.backgroundColor = "#eff2f7";
      document.getElementById("color5").style.backgroundColor = "#eff2f7";
      document.getElementById("color6").style.backgroundColor = "#eff2f7";
      document.querySelector("footer").style.marginTop = marginSecond + "pc";
  }
  else if(display == 5){
      document.getElementById("show1").style.display = "none";
      document.getElementById("show2").style.display = "none";
      document.getElementById("show3").style.display = "none";
      document.getElementById("show4").style.display = "none";
      document.getElementById("show5").style.display = "flex";
      document.getElementById("show6").style.display = "none";

      document.getElementById("color5").style.color = "#fff";
      document.getElementById("color2").style.color = "#000";
      document.getElementById("color1").style.color = "#000";
      document.getElementById("color3").style.color = "#000";
      document.getElementById("color4").style.color = "#000";
      document.getElementById("color6").style.color = "#000";

      document.getElementById("color5").style.backgroundColor = "#87a91f";
      document.getElementById("color2").style.backgroundColor = "#eff2f7";
      document.getElementById("color1").style.backgroundColor = "#eff2f7";
      document.getElementById("color3").style.backgroundColor = "#eff2f7";
      document.getElementById("color4").style.backgroundColor = "#eff2f7";
      document.getElementById("color6").style.backgroundColor = "#eff2f7";
      document.querySelector("footer").style.marginTop = marginSecond + "pc";
  }
  else if(display == 6){
      document.getElementById("show1").style.display = "none";
      document.getElementById("show2").style.display = "none";
      document.getElementById("show3").style.display = "none";
      document.getElementById("show4").style.display = "none";
      document.getElementById("show5").style.display = "none";
      document.getElementById("show6").style.display = "flex";

      document.getElementById("color6").style.color = "#fff";
      document.getElementById("color1").style.color = "#000";
      document.getElementById("color2").style.color = "#000";
      document.getElementById("color3").style.color = "#000";
      document.getElementById("color4").style.color = "#000";
      document.getElementById("color5").style.color = "#000";

      document.getElementById("color6").style.backgroundColor = "#87a91f";
      document.getElementById("color1").style.backgroundColor = "#eff2f7";
      document.getElementById("color2").style.backgroundColor = "#eff2f7";
      document.getElementById("color3").style.backgroundColor = "#eff2f7";
      document.getElementById("color4").style.backgroundColor = "#eff2f7";
      document.getElementById("color5").style.backgroundColor = "#eff2f7";
      document.querySelector("footer").style.marginTop = marginSecond + "pc";
  }
  if(end == 4){
    footerMargin = 404;
    document.querySelector("footer").style.marginTop = footerMargin + "pc";
  }
  if(end == 5){
    footerMargin = 381;
    document.querySelector("footer").style.marginTop = footerMargin + "pc";
  }
  if(end == 6){
    footerMargin = 479;
    document.querySelector("footer").style.marginTop = footerMargin + "pc";
  }
}

let showStatus = false;
function showGradient(){
  const url = window.location.href;
  let height = 14;
    if(url == "http://127.0.0.1:5500/Pages/Products/Product1.html"){
      footerMargin = 375;
      height = 27;
    }
    if(url == "http://127.0.0.1:5500/Pages/Products/Product2.html"){
      footerMargin = 371;
      height = 27;
    }
    if(url == "http://127.0.0.1:5500/Pages/Products/Product3.html"){
      footerMargin = 391;
      height = 44;
    }
    if(url == "http://127.0.0.1:5500/Pages/Products/Product4.html"){
      footerMargin = 372;
      height = 73;
    }
    if(url == "http://127.0.0.1:5500/Pages/Products/Product5.html"){
      footerMargin = 421;
      height = 64;
    }

    if(showStatus == false){
        document.getElementById("full__box_gradient").style.height = height + "rem";
        document.getElementById("show__gradient_icon").style.transform = "rotate(180deg)";
        document.getElementById("gradient__show").innerHTML = " بستن" ;
        document.querySelector("footer").style.marginTop = footerMargin + "pc";
        showStatus = true;
    }

    else{
        document.getElementById("full__box_gradient").style.height = "14rem";
        document.getElementById("show__gradient_icon").style.transform = "rotate(0deg)";
        document.getElementById("gradient__show").innerHTML = " نمایش کامل ";
        document.querySelector("footer").style.marginTop = marginSecond + "pc";
        showStatus = false;
    }
}