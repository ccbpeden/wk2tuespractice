$(document).ready(function() {
  $("#headline").click(function() {
    alert("this is a headline?");
  });

  $("#visibility, #invisibility").click(function() {
    $("#visibility").toggle();
    $("#invisibility").toggle();
  });

  $("#fader, #fadein").click(function() {
    $("#fader").fadeToggle();
    $("#fadein").fadeToggle();
  });
  $("#slider, #slidein").click(function(){
    $("#slider").slideToggle();
    $("#slidein").slideToggle();
  });
  $("#tbd").click(function() {
    $("#superfancy").toggle();
  });
});
