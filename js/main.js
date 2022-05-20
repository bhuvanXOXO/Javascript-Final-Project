// start canvas
const canvas = document.getElementById("canvasDrawing1");
let context = canvas.getContext("2d");

 var data = [
    {name: "Name 1", count: 1045, color: "green"},
    {name: "Name 2", count: 563, color: "purple"},
    {name: "Name 3", count: 231, color: "silver"},
    {name: "Name 4", count: 423, color: "brown"}
 ]

 let y = 0;
// loop through data and draw rectangle for each
for (let item of data) {
  console.log(item);
  let x = 1;
  y = y + 10;
  let w = item.count/8;
  let h = 5;
  context.fillStyle = item.color;
  context.fillRect(x, y, w, h);

  context.fillStyle = "#000000"; // fill color
  context.font = "bold 6px sans-serif";
  context.fillText( item.name, w + x+5, y+5);
}
context.beginPath();
context.ellipse(100, 50, 20, 20, Math.PI / 4, 0, 2 * Math.PI);
context.stroke();
// canvas over


function queryKeyword(){
    // Selecting the input element and get its value 
    var queryInput = document.getElementById("queryInput").value;
    
    // Displaying the value
    alert(queryInput);
}

function countKeyword(){
    // Selecting the input element and get its value 
    var countInput = document.getElementById("countInput").value;
    
    // Displaying the value
    alert(countInput);
}

/*
(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
})(jQuery);
*/
