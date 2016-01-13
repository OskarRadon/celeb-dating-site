$(document).ready(function() {
  $("form#celebrity").submit(function(event) {

    var gender = $("select#gender").val();
    var profession = $("select#profession").val();

    if (gender === "female" && profession === "musician") {
      $("#result").append('<img src="img/beyonce.jpeg">');
    } else if (gender === "female" && profession === "actor") {
      $("#result").append('<img src="img/daisy.jpg">');
    } else if (gender === "female" && profession === "athlete") {
      $("#result").append('<img src="img/serena.jpg">');
    } else if (gender === "male" && profession === "musician") {
      $("#result").append('<img src="img/musicianm.jpeg">');
    } else if (gender === "male" && profession === "actor") {
      $("#result").append('<img src="img/actorm.jpeg">');
    } else if (gender === "male" && profession === "athlete") {
      $("#result").append('<img src="img/athletem.jpeg">');
    } else {
      alert("Please enter values for both categories");
    }

    event.preventDefault();
  });
});
