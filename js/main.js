$(document).ready(function() {
  $("#counter-form").submit(function(event) {
    event.preventDefault();
    const countTo = parseInt($("input#countTo").val());
    const countBy = parseInt($("input#countBy").val());
    if(countTo < countBy) {
      $("span#results").text("Count to needs to be great than count by");
    } else {
      for(let i = 0; i <= countTo; i += countBy) {
        $("span#results").append("<li>" + i);
      }
    }
  });
});