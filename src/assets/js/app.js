// -----WhireFrame.html-----
function caller() {
  $(".list-group-item").each(function() {
    $(this)
      .find(".button")
      .on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass("isClick");
        $(this).hasClass("isClick") ? $(this).text("ON") : $(this).text("OFF");
        $(this)
          .parent()
          .find(".fas")
          .toggleClass("isClick-icon");
      });
  });
}
caller();

// -----WhireFrame.html - CLONE-----
$(".list-group-item").each(function() {
    $(this).on("click", function(e) {
      var toClone = $(this).clone(true, true);
      localStorage.setItem("clone", JSON.stringify(toClone.html()));
      window.location = $(this).attr("href");
    });
  });