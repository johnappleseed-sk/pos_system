(function () {
  if (window.__posNavDropdownBound) {
    return;
  }
  window.__posNavDropdownBound = true;

  function getDropdowns() {
    return document.querySelectorAll(".app-main-nav .nav-dropdown");
  }

  function closeAll(except) {
    getDropdowns().forEach(function (dropdown) {
      if (dropdown !== except) {
        dropdown.removeAttribute("open");
      }
    });
  }

  // Keep only one nav dropdown open at a time.
  document.addEventListener(
    "toggle",
    function (event) {
      var dropdown = event.target;
      if (!dropdown.matches || !dropdown.matches(".app-main-nav .nav-dropdown")) {
        return;
      }
      if (dropdown.open) {
        closeAll(dropdown);
      }
    },
    true
  );

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".app-main-nav .nav-dropdown")) {
      closeAll(null);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeAll(null);
    }
  });
})();
