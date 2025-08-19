import { Screen, hrLine, priceFormat } from "./utils";

class MenuScreen extends Screen {
  #dishes = [
    new PotatoDish(
      "Crispy Potato Straws",
      "Pommes Paille, crispy potato straws, are ultra-thin french fries! They fry up in just 90 seconds, making them a speedy snack, or use as a classic garnish for dishes like tartare and tataki.",
      "https://www.recipetineats.com/tachyon/2024/07/Crispy-potato-straws-Pommes-Paille_6.jpg?resize=1200%2C1500&zoom=0.54",
      190
    ),
    new PotatoDish(
      "Brie Dauphinoise Potatoes",
      "Think: melt-in-your-mouth layers of thinly sliced potato bubbling away in a butter-cream sauce perfumed with just the right amount of garlic and thyme. Already great.",
      "https://www.recipetineats.com/tachyon/2023/12/Brie-potato-dauphinoise_2c.jpg?resize=1200%2C1500&zoom=0.54",
      210
    ),
    new PotatoDish(
      "Hasselback potatoes",
      "Regular baked spuds are good. Hasselback potatoes are awesome! Soft on the inside and crispy on the outside, basted with garlic rosemary olive oil. This is roast potato perfection!",
      "https://www.recipetineats.com/tachyon/2023/10/Hasselback-potatoes.jpg?resize=900%2C1125&zoom=0.72",
      200
    ),
    new PotatoDish(
      "Perfect Crispy French fries",
      "The perfect french fries recipe! Based on a ground-breaking method from the legendary Kenji López-Alt’s The Food Lab, these hot chips are so crispy they stay that way even after they’ve gone cold. It’s rare to find fries this good even at up-market bistros!",
      "https://www.recipetineats.com/tachyon/2022/09/Fries-with-rosemary-salt_1.jpg?resize=900%2C1125&zoom=0.72",
      215
    ),
    new PotatoDish(
      "Easy Roast Potatoes",
      "Great garlic-thyme flavour. Fresh herbs really are lovely, though dried can be used in a pinch! Don’t make the mistake of using minced garlic. It burns!",
      "https://www.recipetineats.com/tachyon/2023/09/Easy-roast-potatoes_4a.jpg?resize=900%2C1125&zoom=0.72",
      210
    ),
    new PotatoDish(
      "Baby Potatoes with Butter & Herbs",
      "This potato recipe isn’t supposed to be rich and super buttery. It’s supposed to be simple, with just a light coating of butter on the potatoes, so they can be served with rich mains like steak, prime rib or crackling roast pork.",
      "https://www.recipetineats.com/tachyon/2020/11/Baby-potatoes-with-butter-herbs_1.jpg?resize=900%2C1260&zoom=0.72",
      190
    ),
    new PotatoDish(
      "Mashed Potato Casserole",
      "Mashed Potato Casserole is an outrageously delicious yet highly practical way to make mashed potato ahead of time! A layer of cheese and bacon prevents the mash from drying out as it reheats in the oven, while transforming this humble side into something extra-devilish and decadent. Oh the power of cheese (plus bacon)!",
      "https://www.recipetineats.com/tachyon/2022/11/Mashed-Potato-Casserole_2.jpg?resize=900%2C1125&zoom=0.72",
      215
    ),
    new PotatoDish(
      "German Potato Salad",
      "Slices of boiled potato are tossed in a warm, tangy-sweet bacon vinaigrette while hot so they absorb the flavour. They’re then showered with crispy, golden bacon bits and hit with freshness from dill and green onion. This excellent combination of flavours and textures makes this quite possibly my all-time favourite potato salad!",
      "https://www.recipetineats.com/tachyon/2021/05/German-Potato-Salad_4.jpg?resize=900%2C1125&zoom=0.72",
      300
    ),
  ];

  buildUI() {
    const menuContent = document.createElement("section");
    menuContent.classList.add("menu-content");

    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    const h1 = document.createElement("h1");
    h1.textContent = "Our Menu";
    const p = document.createElement("p");
    p.textContent = "Fresh and Delicate Potato Dishes";
    menuTitle.appendChild(h1);
    menuTitle.appendChild(p);

    menuTitle.appendChild(hrLine());
    menuContent.appendChild(menuTitle);

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    this.#dishes.forEach((dish) => {
      menuGrid.appendChild(dish.buildCard());
    });

    const soonContainer = document.createElement("div");
    soonContainer.classList.add("soon-container");
    const soonh2 = document.createElement("h2");
    soonh2.textContent = "More Dishes Soon...";
    soonContainer.appendChild(soonh2);
    menuGrid.appendChild(soonContainer);

    menuContent.appendChild(menuGrid);

    return menuContent;
  }
}

class PotatoDish {
  constructor(name, description, image, price) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
  }

  set image(newImage) {
    if (typeof newImage === "string") {
      this._image = newImage;
    } else {
      throw Error(`Price must be string not ${typeof newImage} type`);
    }
  }

  get image() {
    return this._image;
  }

  set price(newPrice) {
    if (typeof newPrice === "number") {
      this._price = newPrice;
    } else {
      throw Error(`Price must be number not ${typeof newPrice} type`);
    }
  }

  get price() {
    return this._price;
  }

  get priceString() {
    return `${priceFormat.format(this.price)}`;
  }

  buildCard() {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = this.image;
    figure.appendChild(img);
    menuCard.appendChild(figure);

    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card-description");
    const h3 = document.createElement("h3");
    h3.textContent = this.name;
    const p = document.createElement("p");
    p.textContent = this.description;
    cardDescription.appendChild(h3);
    cardDescription.appendChild(p);
    menuCard.appendChild(cardDescription);

    const hr = document.createElement("hr");
    menuCard.appendChild(hr);

    const h2 = document.createElement("h2");
    h2.classList.add("price");
    h2.textContent = this.priceString;
    menuCard.appendChild(h2);

    return menuCard;
  }
}

export default MenuScreen;
