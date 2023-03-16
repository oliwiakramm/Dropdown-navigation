const menuBtn = document.querySelector(".navBtn");
const dropdownBtn = document.querySelectorAll(".dropdownBtn");
const dropdownEls = document.querySelectorAll(".dropdown");
const menuMobile = document.querySelector(".menu");
const menuIcon = document.querySelector(".navBtn img");

menuBtn.addEventListener("click", function () {
  if (!document.body.classList.contains("menu__open")) {
    document.body.classList.add("menu__open");
  } else {
    document.body.classList.remove("menu__open");
  }

  if (menuMobile.classList.contains("active")) {
    menuMobile.style.transform = "translateX(100%)";

    setTimeout(() => {
      menuMobile.classList.remove("active");
      menuMobile.style.transform = "";
    }, 300);
  } else {
    menuMobile.classList.add("active");
  }

  iconChange(menuIcon);

  if (!document.body.classList.contains("menu__open")) {
    dropdownEls.forEach((dropdown) => {
      setTimeout(() => {
        dropdown.classList.remove("show");
        dropdown.classList.remove("dropdown__open");
      }, 300);
    });
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 1167) {
    document.body.classList.remove("menu__open");
    menuMobile.classList.remove("active");
  }

  if (window.innerWidth < 1167) {
    iconChange(menuIcon);
  }
});

// Dropdown functionality
dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownEl = btn.closest(".dropdown");
    if (!dropdownEl.classList.contains("dropdown__open")) {
      dropdownEl.classList.add("dropdown__open");
      setTimeout(() => {
        dropdownEl.classList.add("show");
      }, 100);
    } else {
      dropdownEl.classList.remove("show");
      setTimeout(() => {
        dropdownEl.classList.remove("dropdown__open");
      }, 250);
    }

    const target = e.target.closest(".dropdownBtn");
    if (dropdownEl.classList.contains("dropdown__open")) {
      target.setAttribute("aria-expanded", true);
    } else {
      target.setAttribute("aria-expanded", false);
    }
  });
});

function iconChange(icon) {
  if (document.body.classList.contains("menu__open")) {
    icon.src = "images/icon-close-menu.svg";
  } else {
    icon.src = "images/icon-menu.svg";
  }
}
