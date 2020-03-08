// -----WhireFrame.html-----
function caller() {
  $(".list-group-item").find(".button").on("click",function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass("isClick");
        $(this).hasClass("isClick") ? $(this).text("ON") : $(this).text("OFF");
        $(this)
          .parent()
          .find(".fas")
          .toggleClass("isClick-icon");
      });
}
caller();

// -----WhireFrame.html - CLONE-----
$(".list-group-item").on("click",'body',function(e) {
      var toClone = $(this).clone(true, true);
      localStorage.setItem("clone", JSON.stringify(toClone.html()));
    });
  