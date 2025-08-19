import "./styles.css";

import HomeScreen from "./home-screen.js";
import MenuScreen from "./menu-screen.js";
import ContactScreen from "./contact-screen.js";

const content = document.querySelector(".content");
const nav = document.querySelector("header nav");

const screens = {
  home: new HomeScreen("home", transitionScreen),
  menu: new MenuScreen("menu", transitionScreen),
  contact: new ContactScreen("contact", transitionScreen),
};

let currentScreen;

nav.addEventListener("click", (e) => {
  transitionScreen(e.target.textContent);
});

transitionScreen("home");

function transitionScreen(screenType) {
  if (!screens.hasOwnProperty(screenType)) {
    throw Error(
      `${screenType} screen doesn't exist in screens list: ${screens}`
    );
  }
  content.innerHTML = "";
  currentScreen = screens[screenType];
  content.appendChild(currentScreen.buildUI());
}
