function countToBy(countTo, countBy) {
  for (let i= 0; i < countTo; i += countBy) {
    $("#results").append(i + " ");
  }
}

$(document).ready(function() {
  $("#counter-form").submit(function(event) {
    event.preventDefault();
    const countTo = parseInt($("#countTo").val());
    console.log(countTo);
  });
});