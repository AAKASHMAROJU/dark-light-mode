const toggleButton = document.getElementById("inp-check");

const l_d_mode = document.getElementById("light-dark-mode");

const contact_img = document.querySelector("#img-contact");
const search_img = document.querySelector("#img-about");
const settings_img = document.querySelector("#img-settings");

const imgMode = (color) => {
  contact_img.src = `./contact_${color}.svg`;
  search_img.src = `./search_${color}.svg`;
  settings_img.src = `./settings_${color}.svg`;
};

const darkMode = () => {
  l_d_mode.children[1].classList.replace("fa-sun", "fa-moon");
  l_d_mode.style.color = "white";
  l_d_mode.children[0].textContent = "Dark";
  imgMode("dark");
};

const lightMode = () => {
  l_d_mode.children[1].classList.replace("fa-moon", "fa-sun");
  l_d_mode.children[1].style.color = "white";
  l_d_mode.children[0].textContent = "Light";
  l_d_mode.children[0].style.color = "white";
  imgMode("light");
};

const changeTheme = (e) => {
  const isChecked = e.target.checked;
  console.log(isChecked);
  if (isChecked) {
    // dark Mode
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
    localStorage.setItem("theme", "dark");
  } else {
    // Light Mode
    document.documentElement.setAttribute("data-theme", "white");
    lightMode();
    localStorage.setItem("theme", "light");
  }
};

toggleButton.addEventListener("change", changeTheme);

const currTheme = localStorage.getItem("theme");
if (currTheme) {
  document.documentElement.setAttribute("data-theme", currTheme);
  if (currTheme === "dark") {
    darkMode();
    toggleButton.checked = true;
  } else {
    lightMode();
    toggleButton.checked = false;
  }
}
