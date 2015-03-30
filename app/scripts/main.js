$(document).ready(function() {

  $(".logo, .sparkleeeee").sparkle({
    color: "#FFFFFF",
    count: 50,
    overlap: 90,
    speed: 1,
    minSize: 5,
    maxSize: 14,
    direction: "both"
  }).off("mouseover.sparkle")
    .off("mouseout.sparkle")
    .off("focus.sparkle")
    .off("blur.sparkle");

  $(".logo, .sparkleeeee").sparkle({
    color: "#FFFFFF",
    count: 4,
    overlap: 10,
    speed: 1,
    minSize: 3,
    maxSize: 8,
    direction: "both"
  }).off("mouseover.sparkle")
    .off("mouseout.sparkle")
    .off("focus.sparkle")
    .off("blur.sparkle");

  $('.logo, .sparkleeeee').load(function() {
    $(this).trigger("start.sparkle");
  });

  $(".subscribe-top, .tickets .btn, footer").sparkle({
    color: "#FFFFFF",
    count: 38,
    overlap: 0,
    speed: 1,
    minSize: 4,
    maxSize: 9,
    direction: "both"
  });

  $('.share-btn').prettySocial();
  
});