/* BOBREK SOUNDSYSTEM ONLINE  */

/* 

DIKKAT BU SITEDE COK FAZLA GIZLI BILGILER VAR O YUZDEN HEMEN BU SITEDEN CIKMANIZ GEREKMEKTEDIR!!!

*/

<script>
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
 
  let birthday = "April 1, 2021 12:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;
 
      (document.getElementById("gun").innerText = Math.floor(distance / day)),
        (document.getElementById("saat").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("dakika").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("saniye").innerText = Math.floor(
          (distance % minute) / second
        ));
 
      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");
 
        headline.innerText = "PUUUUUUU!";
        countdown.style.display = "none";
        content.style.display = "block";
 
        clearInterval(x);
      }
      //seconds
    }, 0);
})();
 
</script>