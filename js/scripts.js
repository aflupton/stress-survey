$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    $(".output").hide();
    $("#output-1").show();
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var warningSigns = $(this).val();
      counter1 ++;
      $("#output-1").append(warningSigns + "<br>");
    });

    $("#output-2").show();
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var healthSymptoms = $(this).val();
      counter2 ++;
      $("#output-2").append(healthSymptoms + "<br>");
    });

    $("#output-3").show();
    $("input:checkbox[name=coping-mechanisms]:checked").each(function(){
      var copingMechanisms = $(this).val();
      counter3 ++;
      $("#output-3").append(copingMechanisms + "<br>");
    });

  if (counter1 === 0 && counter2 === 0 && counter3 === 0) {
    $(".output").hide();
  } else if (counter1 < 3 && counter2 < 2) {
    $("#output-5").show();
  } else if (counter1 >= 3 || counter2 >= 3 && counter3 > 4) {
    $("#output-6").show();
  } else {
    $("#output-4").show();
  }

  });
});
