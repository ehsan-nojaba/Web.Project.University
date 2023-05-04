$(document).ready(function(){
    $(".after__border span").css("color","#6c861e");
    $(".after__border .basket__status_select i").css("background","#93b921");
    $(".basket__box").css("display","flex");
    $("#basket__intfo1").css("display","none");
    $("#basket__intfo2").css("display","none");
    $("#basket__intfo3").css("display","none");
    $("#deliver1").css("display","none");
    $("#deliver2").css("display","none");
    $("#factor").css("display","none");
    $(".box__leaf").css("display","none");
    $("#buy__show").css("display","none");

    document.querySelector("#span__product").innerHTML = `اقلام سفارش شما ( ${JSON.parse(localStorage.getItem("Products"))} محصول )`;

    let footerStep = 77;
    let counter = 0;
    let itemCount = 0;
    let itemSelect = JSON.parse(localStorage.getItem("Products"));
    let titleItemList = JSON.parse(localStorage.getItem("ProductInfo"));
    let priceItemList = JSON.parse(localStorage.getItem("Price"));
    for (let index = 0; index < titleItemList.length; index++) {
        counter+= 1;
        footerStep += 3;
        $("footer").css("margin-top",footerStep + "rem");
        let title = titleItemList[index];
        let price = priceItemList[index];
        let mainDiv = document.querySelector(".main__basket");
        let secondDiv = document.createElement("div");
        secondDiv.setAttribute("class","basket__data");
        for (let selector = 1; selector <= 5; selector++) {
            let divBasketItem = document.createElement("div");
            divBasketItem.setAttribute("class","basket__item_data");
            if(selector == 1){
                let divBasketValue = document.createTextNode(counter);
                divBasketItem.appendChild(divBasketValue);
                secondDiv.appendChild(divBasketItem);
            }
            if(selector == 2){
                let divBasketValue = document.createTextNode(title);
                divBasketItem.appendChild(divBasketValue);
                secondDiv.appendChild(divBasketItem);
            }
            if(selector == 3){
                let spanUp = document.createElement("span");
                spanUp.setAttribute("onclick",`up(${itemCount})`);
                spanUp.setAttribute("class","up");
                let spanIconUp = document.createElement("i");
                spanIconUp.setAttribute("class","fa-solid fa-angle-up");
                spanUp.appendChild(spanIconUp);
                
                let spanCounter = document.createElement("span");
                spanCounter.setAttribute("class","counter");
                spanCounter.setAttribute("id","item" + itemCount);
                let spanCounterValue = document.createTextNode(numberSelect);
                spanCounter.appendChild(spanCounterValue);

                let spanDown = document.createElement("span");
                spanDown.setAttribute("onclick",`down(${itemCount})`);
                spanDown.setAttribute("class","down");
                let spanIconDown = document.createElement("i");
                spanIconDown.setAttribute("class","fa-solid fa-angle-down");
                spanDown.appendChild(spanIconDown);

                divBasketItem.appendChild(spanUp);
                divBasketItem.appendChild(spanCounter);
                divBasketItem.appendChild(spanDown);
                secondDiv.appendChild(divBasketItem);
            }
            if(selector == 4){
                let divBasketValue = document.createTextNode(price);
                divBasketItem.appendChild(divBasketValue);
                secondDiv.appendChild(divBasketItem);
            }
            if(selector == 5){
                divBasketItem.setAttribute("id" , "price" + itemCount);
                let divBasketValue = document.createTextNode(price);
                divBasketItem.appendChild(divBasketValue);
                secondDiv.appendChild(divBasketItem);
            }
        }
        itemCount +=1;
        mainDiv.appendChild(secondDiv);
    }
    let resultPrices = JSON.parse(localStorage.getItem("FullPrice"));
    document.getElementById("fullprice").innerText = resultPrices + " تومان ";
    document.getElementById("mainprice").innerText = resultPrices + " تومان ";
    document.querySelector(".basket__box_title").innerHTML = `لیست سفارشات ( ${itemSelect} عدد کالا )`;
});


let numberSelect = 1;
function up(itemNumber){
    numberSelect += 1;
    let firstPrice = JSON.parse(localStorage.getItem("Price"));
    let mainPrice = firstPrice[itemNumber];
    let fullPrices = JSON.parse(localStorage.getItem("FullPrice"));
    fullPrices -= mainPrice;
    let result = mainPrice * numberSelect;
    fullPrices += result;
    document.getElementById(`item${itemNumber}`).innerText = numberSelect;
    document.getElementById(`price${itemNumber}`).innerText = result;
    localStorage.setItem("FullPrice",fullPrices);
    document.getElementById("fullprice").innerText = fullPrices + " تومان ";
    document.getElementById("mainprice").innerText = fullPrices + " تومان ";
}

function down(itemNumber){
    numberSelect -= 1;
    let firstPrice = JSON.parse(localStorage.getItem("Price"));
    let mainPrice = firstPrice[itemNumber];
    let fullPrices = JSON.parse(localStorage.getItem("FullPrice"));
    fullPrices -= mainPrice;
    let result = mainPrice * numberSelect;
    fullPrices += result;
    document.getElementById(`item${itemNumber}`).innerText = numberSelect;
    document.getElementById(`price${itemNumber}`).innerText = result;
    localStorage.setItem("FullPrice",fullPrices);
}

let stepCount = 1;
let fullprice = localStorage.getItem("FullPrice");
function addProductPart(){
    let itemBuy = JSON.parse(localStorage.getItem("Products"));
    if(stepCount == 1){
        if(itemBuy > 0){
            document.querySelector(".basket__box").style.display = "none";
            document.querySelector("#basket__intfo1").style.display = "flex";
            document.querySelector("#basket__intfo2").style.display = "flex";
            document.querySelector("#basket__intfo3").style.display = "flex";
            document.querySelector("#deliver1").style.display = "none";
            document.querySelector("#deliver2").style.display = "none";
            document.getElementById("basket__footer").style.marginTop = "136pc";
            document.getElementById("step2").style.background = "#93b921";
            document.getElementById("stepSpan2").style.color = "#6c861e";
            stepCount += 1;
        }
        else{
            alert("کالایی انتخاب نشده !!");
        }
    }
    else if(stepCount == 2){
        document.querySelector(".basket__box").style.display = "none";
        document.querySelector("#basket__intfo1").style.display = "none";
        document.querySelector("#basket__intfo2").style.display = "none";
        document.querySelector("#basket__intfo3").style.display = "none";
        document.querySelector("#deliver1").style.display = "flex";
        document.querySelector("#deliver2").style.display = "flex";
        document.getElementById("basket__footer").style.marginTop = "86pc";
        document.getElementById("step3").style.background = "#93b921";
        document.getElementById("stepSpan3").style.color = "#6c861e";
        document.getElementById("slideShowIcon").style.transform = "rotate(180deg)";
        stepCount += 1;
    }
    else if(stepCount == 3){
        document.querySelector(".basket__box").style.display = "none";
        document.querySelector("#basket__intfo1").style.display = "none";
        document.querySelector("#basket__intfo2").style.display = "none";
        document.querySelector("#basket__intfo3").style.display = "none";
        document.querySelector("#deliver1").style.display = "none";
        document.querySelector("#deliver2").style.display = "none";
        document.querySelector("#factor").style.display = "flex";
        document.getElementById("full").innerText = fullprice + " تومان ";
        document.getElementById("fullPrices").innerText = fullprice + " تومان ";
        document.querySelector(".box__leaf").style.display = "flex";
        document.getElementById("basket__footer").style.marginTop = "110pc";
        document.getElementById("step4").style.background = "#93b921";
        document.getElementById("stepSpan4").style.color = "#6c861e";
        document.getElementById("slideShowIcon").style.transform = "rotate(180deg)";
        stepCount += 1;
    }
    else if(stepCount == 4){
        document.querySelector(".basket__box").style.display = "none";
        document.querySelector("#basket__intfo1").style.display = "none";
        document.querySelector("#basket__intfo2").style.display = "none";
        document.querySelector("#basket__intfo3").style.display = "none";
        document.querySelector("#deliver1").style.display = "none";
        document.querySelector("#deliver2").style.display = "none";
        document.querySelector("#factor").style.display = "none";
        document.querySelector("#style__Btn").style.display = "none";
        document.querySelector("#buy__show").style.display = "flex";
        document.querySelector(".box__leaf").style.display = "none";
        document.getElementById("fullPay").innerText = fullprice + " تومان ";
        document.getElementById("fullBuy").innerText = fullprice + " تومان ";
        document.getElementById("basket__footer").style.marginTop = "83rem";
        document.getElementById("step5").style.background = "#93b921";
        document.getElementById("stepSpan5").style.color = "#6c861e";
    }
}

function slideUpDown(){
   let elementRotate = document.getElementById("slideShowIcon").style.transform;
   if(elementRotate == "rotate(180deg)"){
    document.getElementById("slideShowIcon").style.transform = "rotate(0deg)";
    document.querySelector(".basket__delivery_select").style.display = "flex";
    document.getElementById("basket__footer").style.marginTop = "104rem";
   }
   else{
    document.querySelector(".basket__delivery_select").style.display = "none";
    document.getElementById("slideShowIcon").style.transform = "rotate(180deg)";
    document.getElementById("basket__footer").style.marginTop = "86rem";
   }
}

let footerStep = 104;
let stepStatus = false;
function slideUpDownCheck(){
    let check = document.getElementById("checkBox__Status").checked;
    if(check == true){
        document.querySelector("#checkIcon").style.transform = "rotate(0deg)";
        document.querySelector(".basket__factor_select").style.display = "flex";
        stepStatus = true;
    }
    else{
        document.querySelector("#checkIcon").style.transform = "rotate(180deg)";
        document.querySelector(".basket__factor_select").style.display = "none";
        stepStatus = false;
    }
    if(stepStatus == true){
        footerStep += 10;
        document.getElementById("basket__footer").style.marginTop = footerStep + "pc";
    }
    else{
        footerStep -= 4;
        document.getElementById("basket__footer").style.marginTop = footerStep + "pc";
    }
    
}

let rotateCount= 1;
let items = JSON.parse(localStorage.getItem("Products"));
function itemBuy(){
    if(rotateCount == 1){
        if(items > 0){
            let titleList = JSON.parse(localStorage.getItem("ProductInfo"));
            let priceList = JSON.parse(localStorage.getItem("Price"));
            let buyCount = 0;
            let mainDiv = document.getElementById("factor__items");
            for (let index = 0; index < titleList.length; index++) {
                buyCount += 1;
                const title = titleList[index];
                const price = priceList[index];
                let divElement = document.createElement("div");
                divElement.setAttribute("class","factor__item_create");
                divElement.setAttribute("id","factor__items_create");
                let span1 = document.createElement("span");
                let value1 = document.createTextNode(buyCount);
                let span2 = document.createElement("span");
                let value2 = document.createTextNode(title);
                let span3 = document.createElement("span");
                let value3 = document.createTextNode(price + "تومان");
                span1.appendChild(value1);
                span2.appendChild(value2);
                span3.appendChild(value3);
                divElement.appendChild(span1);
                divElement.appendChild(span2);
                divElement.appendChild(span3);
                mainDiv.appendChild(divElement);
            }
            items = 0;
        }
        document.querySelector("#checkIconItem").style.transform = "rotate(0deg)";
        document.querySelector("#factor__items").style.display = "flex";
        rotateCount = 2;
        stepStatus = true;
    }
    else{
        document.querySelector("#checkIconItem").style.transform = "rotate(180deg)";
        document.querySelector("#factor__items").style.display = "none";
        rotateCount = 1;
        stepStatus = false;
    }
    if(stepStatus == true){
        footerStep += 30;
        document.getElementById("basket__footer").style.marginTop = footerStep + "pc";
    }
    else{
        footerStep -= 30;
        document.getElementById("basket__footer").style.marginTop = footerStep + "pc";
    }
}

let giftCount = 1;
function GiftSend(){
    if(giftCount == 1){
        document.querySelector(".basket__factor_gift").style.display = "flex";
        document.querySelector("#checkIconGift").style.transform = "rotate(0deg)";
        giftCount = 2;
        stepStatus = true;
    }
    else{
        document.querySelector(".basket__factor_gift").style.display = "none";
        document.querySelector("#checkIconGift").style.transform = "rotate(180deg)";
        giftCount = 1;
        stepStatus = false;
    }
    if(stepStatus == true){
        footerStep += 1;
        document.getElementById("basket__footer").style.marginTop = footerStep + "pc";
    }
    else{
        footerStep -= 1;
        document.getElementById("basket__footer").style.marginTop = footerStep + "pc";
    }
}

let buyNumber = 1;
function showPayMoney(){
    if(buyNumber == 1){
        document.querySelector(".basket__buy_select").style.display = "flex";
        document.getElementById("basket__footer").style.marginTop = "92rem";
        document.querySelector("#PayMoney").style.transform = "rotate(0deg)";
        buyNumber = 2;
    }
    else{
        document.querySelector(".basket__buy_select").style.display = "none";
        document.getElementById("basket__footer").style.marginTop = "83rem";
        document.querySelector("#PayMoney").style.transform = "rotate(180deg)";
        buyNumber = 1;
    }
}

function resultBuy(){
    alert("عملیات خرید با موفقیت انجام شد :)");
}