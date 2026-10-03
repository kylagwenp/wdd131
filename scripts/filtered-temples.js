"use strict";

// The seven original assignment entries, followed by three additional temples.
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Manila Philippines",
    location: "Quezon City, Philippines",
    dedicated: "1984, September, 25",
    area: 26683,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/cf62ebb59aefa1d2856981fb77574fb9982c5fad/full/500%2C/0/default"
  },
  {
    templeName: "Cebu City Philippines",
    location: "Cebu City, Philippines",
    dedicated: "2010, June, 13",
    area: 29556,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/3b515c363a8c71994bd6e110cf021fc84d9c90f6/full/500%2C/0/default"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/809f567ccf240d2f1c8e457e8c81fbd94ef96759/full/500%2C/0/default"
  }
];

const gallery = document.querySelector("#temple-gallery");
const navigation = document.querySelector("#temple-navigation");
const menuButton = document.querySelector("#menu-button");
const navigationLinks = document.querySelectorAll("nav a[data-filter]");

// Extract the year directly instead of relying on browser-specific date parsing.
function dedicationYear(temple) {
  return Number(temple.dedicated.split(",")[0]);
}

const filters = {
  home: { title: "Home", description: "Explore all the temples in this album.", matches: () => true },
  old: { title: "Old Temples", description: "Temples dedicated before 1900.", matches: temple => dedicationYear(temple) < 1900 },
  new: { title: "New Temples", description: "Temples dedicated after 2000.", matches: temple => dedicationYear(temple) > 2000 },
  large: { title: "Large Temples", description: "Temples larger than 90,000 square feet.", matches: temple => temple.area > 90000 },
  small: { title: "Small Temples", description: "Temples smaller than 10,000 square feet.", matches: temple => temple.area < 10000 }
};

function addDetail(card, labelText, value) {
  const paragraph = document.createElement("p");
  const label = document.createElement("span");
  label.className = "label";
  label.textContent = `${labelText}: `;
  paragraph.append(label, document.createTextNode(value));
  card.append(paragraph);
}

function createTempleCards(templeList) {
  gallery.replaceChildren();

  templeList.forEach(temple => {
    const card = document.createElement("section");
    card.className = "temple-card";
    const name = document.createElement("h2");
    name.textContent = temple.templeName;
    card.append(name);

    addDetail(card, "Location", temple.location);
    const [year, month, day] = temple.dedicated.split(",").map(part => part.trim());
    addDetail(card, "Dedicated", `${month} ${day}, ${year}`);
    addDetail(card, "Area", `${temple.area.toLocaleString("en-US")} sq ft`);

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple`;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 400;
    image.height = 250;
    card.append(image);
    gallery.append(card);
  });
}

function showFilter(filterName) {
  const filter = filters[filterName];
  const results = temples.filter(filter.matches);
  createTempleCards(results);
  document.querySelector("#filter-title").textContent = filter.title;
  document.querySelector("#filter-description").textContent = filter.description;
  document.querySelector("#temple-count").textContent = `${results.length} temple${results.length === 1 ? "" : "s"} displayed`;

  navigationLinks.forEach(link => {
    if (link.dataset.filter === filterName) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function closeMenu() {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
  menuButton.firstElementChild.textContent = "☰";
}

document.documentElement.classList.add("js");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  menuButton.firstElementChild.textContent = isOpen ? "✕" : "☰";
});

navigationLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showFilter(link.dataset.filter);
    // Move focus to the visible menu button when the mobile navigation closes.
    if (window.matchMedia("(max-width: 899px)").matches) {
      menuButton.focus();
    }
    closeMenu();
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && navigation.classList.contains("open")) {
    closeMenu();
    menuButton.focus();
  }
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
showFilter("home");
