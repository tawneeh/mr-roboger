$(document).ready(function() {
  $("form#roboCount").submit(function(event) {
    event.preventDefault();

    $("#output").text(result);

  });
});