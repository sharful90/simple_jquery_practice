$(document).ready(function() {
  $("#btn0").click(function() {
    $(".me").toggle(1000);
  });

  $(".me").on({
    mouseover: function() {
      $(".me").css("background", "red");
    },
    mouseout: function() {
      $(".me").css("color", "white");
    },
    click: function() {
      $(".me").css("background", "green");
    }
  });
});

// ========================================================================

$(document).ready(function() {
  $("#btn").click(function() {
    $(".box1").animate({ marginLeft: "400px" }, 2000);
    $(".box2").animate({ marginLeft: "300px" }, 2000);
    $(".box3").animate({ marginLeft: "500px" }, 2000);
  });
});

//========================================================================

$(document).ready(function() {
  $("#btn1").click(function() {
    $(".progress_value").animate({ width: "400px" }, 1000);
    $(".progress_value1").animate({ width: "500px" }, 1000);
    $(".progress_value2").animate({ width: "300px" }, 1000);
  });
});
