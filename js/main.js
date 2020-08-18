function countToBy(countTo, countBy) {
  for (let i= 0; i < countTo; i += countBy) {
    $("#results").append(i + " ");
  }
}

