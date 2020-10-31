const countUp = [0, "Beep!"]
const count2 = [0, "Beep!", "Boop!"]
const count3 = [0, "Beep!", "Boop!", "Won't you be my neighbor?"]

function beepBoop(userInput) {
  for (i = 0; i < count3.length; i++) {
  if (userInput === 0) {
    return 0;
  } else if (userInput === 1) {
    return countUp;
  } else if (userInput === 2) {
    return count2;
  } else if (userInput === 3) {
    return count3;
  }

  }
}

function beepBoop2(number) {
  const numberString = number.toString
  if (numberString.includes("3")) {
    return "Won't you be my neighbor?";
  } else if (numberString.includes("2")) {
    return "Boop!";
  } else if (numberString.includes("1")) {
    return "Beep!";
}
}

function processInput(userInput) {
const userNumber = parseInt(userInput)
  for (i = userInput; i >= 0; i--) { 

}
}


//document.getElementById("#output").submit();


$(document).ready(function() {
  $("form#roboCount").submit(function(event) {
    event.preventDefault();

  $("#results").show();

  });
});

//let userNumber  = parseInt($("#userNumber").val()); <---- right under if (userInput) line