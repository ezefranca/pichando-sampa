//color picker
$(".basic").spectrum({
    color: "#f00",
    change: function(color) {
        pixacolor = color.toRgbString();
  		trocarCor(pixacolor);
    }
});