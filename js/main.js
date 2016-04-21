
//modeled off of codepen Drawing with text by Tim Holman

$(function() {

  var currentFlower = '<div class="flower rose"></div>';

  $("#garden").click( function(clickLocaton) {
    var flower = $(currentFlower);

    // alert(flower);

    var offset = $(this).offset();
    var relativeX = (clickLocaton.pageX - offset.left);
    var relativeY = (clickLocaton.pageY - offset.top);

    var myGarden = $("#garden");
    var gardenWidth = myGarden.outerWidth();
    var gardenHeight = myGarden.outerHeight();

    var flowerTop = ((relativeY / gardenHeight) * 100) + "%";
    var flowerLeft = ((relativeX / gardenWidth) * 100) + "%";


    $(flower).css({
      top: flowerTop,
      left: flowerLeft
    });

    myGarden.append(flower);
  });


  $("#bud").click( function() {
    currentFlower = '<div class="flower bud"></div>';
  });

  $("#tulip").click( function() {
    currentFlower = '<div class="flower tulip"></div>';
  });

  $("#orangeflower").click( function() {
    currentFlower = '<div class="flower orangeflower"></div>';
  });

  $("#purpleflower").click( function() {
    currentFlower = '<div class="flower purpleflower"></div>';
  });

});
