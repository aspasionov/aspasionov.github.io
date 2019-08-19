$(document).ready(function() {

  var clock;
  clock = $(".clock").FlipClock({
    clockFace: "DailyCounter",
    autoStart: false,
    callbacks: {
      stop: function() {
        $(".massage").html("время истекло")ж
      }
    }
  });
  clock.setTime(5000);
  clock.setCountdown(true);
  clock.start();
}
