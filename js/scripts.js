$(document).ready(function() {
  $("form#sides").submit(function(event) {
    event.preventDefault();
    const sideA = parseInt($("#side1").val());
    const sideB = parseInt($("#side2").val());
    const sideC = parseInt($("#side3").val());
  }
});