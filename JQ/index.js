$("document").ready(function () {
  // key variable for data manipulation
  let bill = "";
  let tip = "";
  let people = "";
  let tipAmount = $("#tipAmount");
  let totalAmount = $("#total");

  $("#bill").on("input", function () {
    bill = parseInt($("#bill").val());
    if (bill > 0) {
      $("#reset").removeAttr("disabled");
    }
    if (!people) {
      $("#err").css("display", "block");
      $("$people").css("boder-color", "red");
    }
  });

  $(".btn").click(function () {
    tip = parseInt($(this).val());
    $(this).css("background-color", "hsl(172, 67%, 45%)");
    tip = tip / 100;
    tip = tip.toFixed(2);
  });

  $("#people").on("input", function () {
    people = parseInt($(this).val());
    bill = parseFloat($("#bill").val());
    tipAmount = $("#tipAmount").val();

    if (people > 0) {
      $("#err").css("display", "none");
      $("#reset").removeAttr("disabled");
    }

    if (people > 0 && bill > 0) {
      tipAmount = ((bill * tip) / people).toFixed(2);
      total = ((bill + Number(tipAmount)) / people).toFixed(2);
      // alert(bill);
      $("#tipAmount").text(tipAmount);
      $("#total").text(total);
    }
  });

  $("#reset").click(function () {
    location.reload(true);
  });
});
