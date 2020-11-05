function beepBoop(number) {
  const numberString = number.toString();
  if (numberString.includes("3")) {
    return "Won't you be my neighbor?";
  } else if (numberString.includes("2")) {
    return "Boop!";
  } else if (numberString.includes("1")) {
    return "Beep!";
  } else {
    return numberString
  }
}

function processInput(userInput) {
  $("#output").empty();
  const userNumber = parseInt(userInput)
    for (i = 0; i <= userInput; i++) { 
    $("#output").append(`<li>${beepBoop(i)}</li>`);
  }
}

$(document).ready(function() {
  $("form#roboCount").submit(function(event) {
    event.preventDefault();
    const userInput = $("#userNumber").val();
    processInput(userInput);
  });
});