$(document).ready(function() {
  $("form#sides").submit(function(event) {
    event.preventDefault();
    const sideA = parseInt($("#side1").val());
    const sideB = parseInt($("#side2").val());
    const sideC = parseInt($("#side3").val());

    if (sideA == sideB && sideB === sideC) {
      alert("Your triangle is equilateral");
    } else if (sideA === sideB !== sideC || sideB === sideC !== sideA || sideC === sideA !== sideB) {
      alert("You triangle is isoceles");
    } else {
      alert("testtesttest")
    }
  });
});