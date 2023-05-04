let item = 0;
let number = 0;
let titleProduct = "";
let prices = 0;
let ProductInfo = [];
let ProductData = [];
let PricesList = [];
function addProduct(titleItem, Price) {
  item += 1;
  document.querySelector(".list__Box_Number").innerHTML = item;
  localStorage.setItem("Products", item);
  alert("محصول با موفقیت به سبد اضافه شد");
  prices += Price;
  localStorage.setItem("FullPrice", prices);
  if (titleItem == 1) {
    titleProduct = document.querySelector("#title1").innerHTML;
  }
  if (titleItem == 2) {
    titleProduct = document.querySelector("#title2").innerHTML;
  }
  if (titleItem == 3) {
    titleProduct = document.querySelector("#title3").innerHTML;
  }
  if (titleItem == 4) {
    titleProduct = document.querySelector("#title4").innerHTML;
  }
  if (titleItem == 5) {
    titleProduct = document.querySelector("#title5").innerHTML;
  }
  if (titleItem == 6) {
    titleProduct = document.querySelector("#title6").innerHTML;
  }
  if(titleItem == 7){
    titleProduct = document.querySelector("#title7").innerHTML;
  }
  if(titleItem == 8){
    titleProduct = document.querySelector("#title8").innerHTML;
  }
  if(titleItem == 9){
    titleProduct = document.querySelector("#title9").innerHTML;
  }
  if(titleItem == 10){
    titleProduct = document.querySelector("#title10").innerHTML;
  }
  if(titleItem == 11){
    titleProduct = document.querySelector("#title11").innerHTML;
  }
  if(titleItem == 12){
    titleProduct = document.querySelector("#title12").innerHTML;
  }
  PricesList.push(Price);
  ProductInfo.push(titleProduct);
  localStorage.setItem("ProductInfo", JSON.stringify(ProductInfo));
  localStorage.setItem("Price", JSON.stringify(PricesList));
}
ProductData.push(JSON.parse(localStorage.getItem("ProductInfo")));
number = localStorage.getItem("Products");

window.onload = () => {
  document.querySelector(".list__Box_Number").innerHTML = number.toString();
  if (number != NaN) {
    item = parseInt(number);
    ProductInfo.push(ProductData);
  }
};
