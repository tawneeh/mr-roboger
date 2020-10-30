const countUp = [0,"Beep!"]

function beepBoop(userInput) {
  if (userInput === 0) {
    return 0;
  } else if (userInput === 1) {
    return countUp;
  }
}


document.getElementById("#output").submit();


$(document).ready(function() {
  $("form#roboCount").submit(function(event) {
    event.preventDefault();



$("#clearButton").click(function() {
    $("#userNumber").hide();
    userNumber = [];
  }) 


  });
});

//let userNumber  = parseInt($("#userNumber").val()); <---- right under if (userInput) line