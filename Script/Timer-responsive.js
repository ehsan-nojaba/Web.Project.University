var countDownDate7 = new Date("May 02, 2023 16:30:00").getTime();
var countDownDate8 = new Date("May 01, 2023 20:40:00").getTime();
var countDownDate9 = new Date("Apr 30, 2023 21:20:00").getTime();
var countDownDate10 = new Date("Apr 29, 2023 19:10:00").getTime();
var countDownDate11 = new Date("Apr 28, 2023 16:17:00").getTime();
var countDownDate12 = new Date("Apr 27, 2023 23:20:00").getTime();

var x = setInterval(function () {

  var now = new Date().getTime();
  var distance7 = countDownDate7 - now;
  var distance8 = countDownDate8 - now;
  var distance9 = countDownDate9 - now;
  var distance10 = countDownDate10 - now;
  var distance11 = countDownDate11 - now;
  var distance12 = countDownDate12 - now;

  //item7--timer--calculate
  var hours7 = Math.floor((distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes7 = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds7 = Math.floor((distance7 % (1000 * 60)) / 1000);
  //item8--timer--calculate
  var hours8 = Math.floor((distance8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes8 = Math.floor((distance8 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds8 = Math.floor((distance8 % (1000 * 60)) / 1000);
  //item9--timer--calculate
  var hours9 = Math.floor((distance9 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes9 = Math.floor((distance9 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds9 = Math.floor((distance9 % (1000 * 60)) / 1000);
  //item10--timer--calculate
  var hours10 = Math.floor((distance10 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes10 = Math.floor((distance10 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds10 = Math.floor((distance10 % (1000 * 60)) / 1000);
  //item11--timer--calculate
  var hours11 = Math.floor((distance11 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes11 = Math.floor((distance11 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds11 = Math.floor((distance11 % (1000 * 60)) / 1000);
  //item12--timer--calculate
  var hours12 = Math.floor((distance12 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes12 = Math.floor((distance12 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds12 = Math.floor((distance12 % (1000 * 60)) / 1000);

  //item7
  document.getElementById("hour7").innerHTML = hours7;
  document.getElementById("minutes7").innerHTML = minutes7;
  document.getElementById("seconds7").innerHTML = seconds7;
  //item8
  document.getElementById("hour8").innerHTML = hours8;
  document.getElementById("minutes8").innerHTML = minutes8;
  document.getElementById("seconds8").innerHTML = seconds8;
  //item9
  document.getElementById("hour9").innerHTML = hours9;
  document.getElementById("minutes9").innerHTML = minutes9;
  document.getElementById("seconds9").innerHTML = seconds9;
  //item10
  document.getElementById("hour10").innerHTML = hours10;
  document.getElementById("minutes10").innerHTML = minutes10;
  document.getElementById("seconds10").innerHTML = seconds10;
  //item11
  document.getElementById("hour11").innerHTML = hours11;
  document.getElementById("minutes11").innerHTML = minutes11;
  document.getElementById("seconds11").innerHTML = seconds11;
  //item12
  document.getElementById("hour12").innerHTML = hours12;
  document.getElementById("minutes12").innerHTML = minutes12;
  document.getElementById("seconds12").innerHTML = seconds12;

  //Expire-Item
  if (distance7 < 0) {
    clearInterval(x);
    document.getElementById("gold__timer_Expire").innerHTML = "EXPIRED";
  }
  if (distance8 < 0) {
    clearInterval(x);
    document.getElementById("gold__timer_Expire").innerHTML = "EXPIRED";
  }
  if (distance9 < 0) {
    clearInterval(x);
    document.getElementById("gold__timer_Expire").innerHTML = "EXPIRED";
  }
  if (distance10 < 0) {
    clearInterval(x);
    document.getElementById("gold__timer_Expire").innerHTML = "EXPIRED";
  }
  if (distance11 < 0) {
    clearInterval(x);
    document.getElementById("gold__timer_Expire").innerHTML = "EXPIRED";
  }
  if (distance12 < 0) {
    clearInterval(x);
    document.getElementById("gold__timer_Expire").innerHTML = "EXPIRED";
  }
  
}, 1000);
