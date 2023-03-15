const menuBtn = document.querySelector(".navBtn");
const dropdownBtn = document.querySelectorAll(".dropdownBtn");
const dropdownEls = document.querySelectorAll(".dropdown");

menuBtn.addEventListener("click", function () {
  document.body.classList.toggle("menu__open");
  const menuIcon = menuBtn.querySelector("img");

  if (document.body.classList.contains("menu__open")) {
    menuIcon.src = "images/icon-close-menu.svg";
  } else {
    menuIcon.src = "images/icon-menu.svg";
  }

  if (!document.body.classList.contains("menu__open")) {
    dropdownEls.forEach((dropndown) => {
      dropndown.classList.remove("show");
      dropndown.classList.remove("dropdown__open");
    });
  }
});

// Dropdown functionality
dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownEl = btn.closest(".dropdown");
    dropdownEl.classList.toggle("dropdown__open");
    setTimeout(() => {
      dropdownEl.classList.toggle("show");
    }, 100);

    const target = e.target.closest(".dropdownBtn");
    if (dropdownEl.classList.contains("dropdown__open")) {
      target.setAttribute("aria-expanded", true);
    } else {
      target.setAttribute("aria-expanded", false);
    }
  });
});
