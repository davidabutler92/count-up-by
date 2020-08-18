$(document).ready(function() {
  $("#counter-form").submit(function(event) {
    event.preventDefault();
    const countTo = parseInt($("input#countTo").val());
    const countBy = parseInt($("input#countBy").val());
    
    const arraySize = (countTo/countBy);
    arraySize = Math.floor(arrayOfNumbers);

  });
});