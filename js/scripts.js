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
  $("#comicsans").click(function(){
    if ($("body").hasClass("font-arial")){
     $("body").removeClass("font-arial");
    };
    if ($("body").hasClass("font-timesnewroman")){
     $("body").removeClass("font-timesnewroman");
    };
    $("body").addClass("font-CS");
  });

  $("#arial").click(function(){
    if ($("body").hasClass("font-CS")){
      $("body").removeClass("font-CS");
    };
    if ($("body").hasClass("font-timesnewroman")){
      $("body").removeClass("font-timesnewroman");
    };
    $("body").addClass("font-arial");
  });

  $("#timesnewroman").click(function(){
    if ($("body").hasClass("font-arial")){
      $("body").removeClass("font-arial");
    };
    if ($("body").hasClass("font-CS")){
      $("body").removeClass("font-CS");
    };
    $("body").addClass("font-timesnewroman");
  });

  $("p").click(function(){
    $(this).toggleClass("bleepbloop");
  });

});
