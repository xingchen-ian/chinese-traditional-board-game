(function () {
  var button = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("site-nav");
  if (!button || !nav) return;

  document.documentElement.classList.add("js");
  button.hidden = false;
  button.setAttribute("aria-expanded", "false");

  button.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
