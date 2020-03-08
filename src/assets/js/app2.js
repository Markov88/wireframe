// -----WhireFrame-2.html-----

$(function() {
  $("#color-block").on("colorchange", function(e) {
    var color = $(this).wheelColorPicker("value");
    var name = $("#element span")
      .first()
      .text()
      .trim();
    var onOrOff = $("#element span")
      .last()
      .text();
    var obj = {
      color: color,
      name: name,
      onOrOff: onOrOff
    };

    $.ajax({
      url: "url:",
      method: "POST",
      cache: false,
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(obj),
      success: function(data) {
        alert("data: " + data);
      },
      error: function(xhr, textStatus, error) {
        console.log(xhr.statusText);
        console.log(textStatus);
        console.log(error);
      }
    });
  });
});
