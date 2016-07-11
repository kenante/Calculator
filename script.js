var value = $(".button").val();
var odabir = "";
var suma = "";
$(".button").on("click", function() {
  var text = $(this).attr('value');
  if (parseInt(text, 10) == text || text === "." || text === "/" || text === "*" || text === "-" || text === "+" || text === "%") {
    suma += text
    $("input").val(suma);
  }
  if (text == "AC") {
    suma = "";
    $("input").val(suma);
  } else if (text == "CE") {
    suma = suma.slice(0, -1);
    $("input").val(suma);
  } else if (text === "=") {
    odabir = eval(suma);
    $("input").val(odabir);
    suma = "";
  } else if (text === "And") {
    suma = $("input").val()
    $("input").val(suma);
  }

})