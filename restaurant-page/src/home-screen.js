import { Screen, hrLine } from "./utils.js";

class HomeScreen extends Screen {
  buildUI() {
    const homeContent = document.createElement("section");
    homeContent.classList.add("home-content");

    const heroTitle = document.createElement("div");
    heroTitle.classList.add("hero-title");
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to PotatZ";
    const p = document.createElement("p");
    p.textContent =
      "Serving the finest fried, mashed, baked, and roasted potatoes since 2025.";
    heroTitle.appendChild(h1);
    heroTitle.appendChild(p);
    heroTitle.appendChild(hrLine());
    homeContent.appendChild(heroTitle);

    const showMenuBtn = document.createElement("button");
    showMenuBtn.type = "button";
    showMenuBtn.textContent = "Show Menu";
    showMenuBtn.addEventListener("click", (e) => {
      this.transitioner("menu");
    });
    heroTitle.appendChild(showMenuBtn);

    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src =
      "https://images.pexels.com/photos/1439177/pexels-photo-1439177.jpeg";
    figure.appendChild(image);

    homeContent.appendChild(figure);

    return homeContent;
  }
}

export default HomeScreen;
