var countDownDate1 = new Date("May 02, 2023 16:30:00").getTime();
var countDownDate2 = new Date("May 01, 2023 20:40:00").getTime();
var countDownDate3 = new Date("Apr 30, 2023 21:20:00").getTime();
var countDownDate4 = new Date("Apr 29, 2023 19:10:00").getTime();
var countDownDate5 = new Date("Apr 28, 2023 16:17:00").getTime();
var countDownDate6 = new Date("Apr 27, 2023 23:20:00").getTime();

var x = setInterval(function () {

  var now = new Date().getTime();
  var distance1 = countDownDate1 - now;
  var distance2 = countDownDate2 - now;
  var distance3 = countDownDate3 - now;
  var distance4 = countDownDate4 - now;
  var distance5 = countDownDate5 - now;
  var distance6 = countDownDate6 - now;

  //item1--timer--calculate
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
  //item2--timer--calculate
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
  //item3--timer--calculate
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
  //item4--timer--calculate
  var hours4 = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds4 = Math.floor((distance4 % (1000 * 60)) / 1000);
  //item5--timer--calculate
  var hours5 = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes5 = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds5 = Math.floor((distance5 % (1000 * 60)) / 1000);
  //item6--timer--calculate
  var hours6 = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes6 = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds6 = Math.floor((distance6 % (1000 * 60)) / 1000);

  //item1
  document.getElementById("hour1").innerHTML = hours1;
  document.getElementById("minutes1").innerHTML = minutes1;
  document.getElementById("seconds1").innerHTML = seconds1;
  //item2
  document.getElementById("hour2").innerHTML = hours2;
  document.getElementById("minutes2").innerHTML = minutes2;
  document.getElementById("seconds2").innerHTML = seconds2;
  //item3
  document.getElementById("hour3").innerHTML = hours3;
  document.getElementById("minutes3").innerHTML = minutes3;
  document.getElementById("seconds3").innerHTML = seconds3;
  //item4
  document.getElementById("hour4").innerHTML = hours4;
  document.getElementById("minutes4").innerHTML = minutes4;
  document.getElementById("seconds4").innerHTML = seconds4;
  //item5
  document.getElementById("hour5").innerHTML = hours5;
  document.getElementById("minutes5").innerHTML = minutes5;
  document.getElementById("seconds5").innerHTML = seconds5;
  //item6
  document.getElementById("hour6").innerHTML = hours6;
  document.getElementById("minutes6").innerHTML = minutes6;
  document.getElementById("seconds6").innerHTML = seconds6;

  //Expire-Item
  if (distance1 < 0) {
    clearInterval(x);
    document.getElementById("gold__timer_Expire").innerHTML = "EXPIRED";
  }
  if (distance2 < 0) {
    clearInterval(x);
    document.getElementById("gold__timer_Expire").innerHTML = "EXPIRED";
  }
  if (distance3 < 0) {
    clearInterval(x);
    document.getElementById("gold__timer_Expire").innerHTML = "EXPIRED";
  }
  if (distance4 < 0) {
    clearInterval(x);
    document.getElementById("gold__timer_Expire").innerHTML = "EXPIRED";
  }
  if (distance5 < 0) {
    clearInterval(x);
    document.getElementById("gold__timer_Expire").innerHTML = "EXPIRED";
  }
  if (distance6 < 0) {
    clearInterval(x);
    document.getElementById("gold__timer_Expire").innerHTML = "EXPIRED";
  }
  
}, 1000);
