let currentStyle = "dropdown";
let isMenuOpen = false;

const styleBtns = document.querySelectorAll(".style-btn");
styleBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    styleBtns.forEach((b) => b.classList.remove("active"));

    this.classList.add("active");

    currentStyle = this.dataset.style;

    closeAllMenus();
  });
});

function closeMenu(style) {
  switch (style) {
    case "dropdown":
      document.getElementById("dropdownMenu").style.display = "none";
      break;
    case "side":
      document.getElementById("sideMenu").style.right = "-300px";
      break;
    case "modal":
      document.getElementById("modalMenu").style.display = "none";
      break;
  }
  isMenuOpen = false;
}

function closeAllMenus() {
  document.getElementById("dropdownMenu").style.display = "none";
  document.getElementById("sideMenu").style.right = "-300px";
  document.getElementById("modalMenu").style.display = "none";
  isMenuOpen = false;
}

function openMenu(style) {
  closeAllMenus();

  switch (style) {
    case "dropdown":
      document.getElementById("dropdownMenu").style.display = "block";
      break;
    case "side":
      document.getElementById("sideMenu").style.right = "0";
      break;
    case "modal":
      document.getElementById("modalMenu").style.display = "flex";
      break;
  }
  isMenuOpen = true;
}

document.getElementById("profileButton").addEventListener("click", () => {
  if (isMenuOpen) {
    closeAllMenus();
  } else {
    openMenu(currentStyle);
  }
});

document.addEventListener("click", (event) => {
  const profileButton = document.getElementById("profileButton");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const sideMenu = document.getElementById("sideMenu");
  const modalMenu = document.getElementById("modalMenu");
  const modalContent = modalMenu.querySelector(".modal-content");

  if (isMenuOpen) {
    switch (currentStyle) {
      case "dropdown":
        if (
          !dropdownMenu.contains(event.target) &&
          event.target !== profileButton
        ) {
          closeMenu("dropdown");
        }
        break;
      case "side":
        if (
          !sideMenu.contains(event.target) &&
          event.target !== profileButton
        ) {
          closeMenu("side");
        }
        break;
      case "modal":
        if (event.target === modalMenu) {
          closeMenu("modal");
        }
        break;
    }
  }
});
