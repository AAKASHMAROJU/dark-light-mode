const toggleButton = document.getElementById("inp-check");

const l_d_mode = document.getElementById("light-dark-mode");

const darkMode = () => {
  l_d_mode.children[1].classList.remove("fa-sun");
  l_d_mode.children[1].classList.add("fa-moon");
  l_d_mode.style.color = "white";
  l_d_mode.children[0].textContent = "Dark";
};

const lightMode = () => {
  l_d_mode.children[1].classList.remove("fa-moon");
  l_d_mode.children[1].classList.add("fa-sun");
  l_d_mode.children[0].style.color = "white";
  l_d_mode.children[1].style.color = "white";
  l_d_mode.children[0].textContent = "Light";
};

const changeTheme = (e) => {
  const isChecked = e.target.checked;
  console.log(isChecked);
  if (isChecked) {
    // dark Mode
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    // Light Mode
    document.documentElement.setAttribute("data-theme", "white");
    lightMode();
  }
};

toggleButton.addEventListener("change", changeTheme);
