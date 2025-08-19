import { Screen, hrLine } from "./utils";

class ContactScreen extends Screen {
  buildUI() {
    const contactContent = document.createElement("section");
    contactContent.classList.add("contact-content");

    const contactCard = document.createElement("div");
    contactCard.classList.add("contact-card");

    const h1 = document.createElement("h1");
    h1.textContent = "📞 Contact Us!";
    contactCard.appendChild(h1);
    const p = document.createElement("p");
    p.textContent = `At PotatZ, we’re always ready to talk spuds! Got questions,
              feedback, or just want to share your love for potatoes? Reach out
              to us!`;
    contactCard.appendChild(p);
    contactCard.appendChild(hrLine());

    const locationh2 = document.createElement("h2");
    locationh2.textContent = "🥔 Location";
    const plocation = document.createElement("p");
    plocation.textContent = "📍 123 Spud Street, Mashtown, Potato Land";
    contactCard.appendChild(locationh2);
    contactCard.appendChild(plocation);

    contactCard.appendChild(hrLine());

    const openingh2 = document.createElement("h2");
    openingh2.textContent = "🕒 Opening Hours";
    contactCard.appendChild(openingh2);

    const openingHours = [
      "Monday - Friday: 10:00 AM - 10:00 PM",
      "Saturday - Sunday: 9: 00 AM - 11:00 PM",
    ];
    const ulOpening = document.createElement("ul");
    openingHours.forEach((hour) => {
      const li = document.createElement("li");
      li.textContent = hour;
      ulOpening.appendChild(li);
    });
    contactCard.appendChild(ulOpening);
    contactCard.appendChild(hrLine());

    const emailh2 = document.createElement("h2");
    emailh2.textContent = "📧 Get in Touch";
    const ulEmail = document.createElement("ul");
    const liEmail = document.createElement("li");
    liEmail.innerHTML = `Email: <a href="mailto:hello@potatz.com">hello@potatz.com</a>`;
    ulEmail.appendChild(liEmail);
    const liPhone = document.createElement("li");
    liPhone.innerHTML = `Phone: <a href="tel:+63 912 345 6789">+63 912 345 6789</a>`;
    ulEmail.appendChild(liPhone);
    contactCard.appendChild(emailh2);
    contactCard.appendChild(ulEmail);

    contactCard.appendChild(hrLine());

    
    contactContent.appendChild(contactCard);
    return contactContent;
  }
}

export default ContactScreen;
