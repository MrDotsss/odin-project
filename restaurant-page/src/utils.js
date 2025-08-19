class Screen {
  constructor(screenType, transitioner) {
    this.screenType = screenType;
    this.transitioner = transitioner;
  }

  buildUI() {
    return document.createElement("div");
  }
}

function hrLine() {
  return document.createElement("hr");
}

const priceFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export { Screen, hrLine, priceFormat };
