// Global Variables
const apiKey = "ac98b8a2e1msh48e3a397a66c1f9p1e06e7jsn6d33f38350c5";
const url = "https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all";
const searchInput = document.querySelector(".search-input");
const searchFilter = document.querySelector(".search-filter");
const searchForm = document.querySelector(".search-bar");
const gallery = document.querySelector(".gallery-map");
const darkModeIcon = document.querySelector(".dark-mode");
const linkNextPage = document.querySelector(".next-page");
let searchValue;

// Functions
function updateInput(e) {
  searchValue = e.target.value;
}

function clear() {
  linkNextPage.innerHTML = "";
  searchInput.value = "";
}

function filterWorld(e) {
  const list = linkNextPage.childNodes;
  list.forEach((country) => {
    const continent = e.target.value;
    switch (continent) {
      case "all":
        country.style.display = "flex";
        break;
      case "africa":
        if (country.classList.contains("Africa-div")) {
          country.style.display = "flex";
        } else {
          country.style.display = "none";
        }
        break;
      case "america":
        if (country.classList.contains("Americas-div")) {
          country.style.display = "flex";
        } else {
          country.style.display = "none";
        }
        break;
      case "asia":
        if (country.classList.contains("Asia-div")) {
          country.style.display = "flex";
        } else {
          country.style.display = "none";
        }
        break;
      case "europe":
        if (country.classList.contains("Europe-div")) {
          country.style.display = "flex";
        } else {
          country.style.display = "none";
        }
        break;
      case "oceania":
        if (country.classList.contains("Oceania-div")) {
          country.style.display = "flex";
        } else {
          country.style.display = "none";
        }
        break;
    }
  });
}

async function fetchApi() {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "ajayakv-rest-countries-v1.p.rapidapi.com",
      useQueryString: true,
    },
  });
  const data = await dataFetch.json();
  return data;
}

function createDiv(item) {
  //console.log(country);
  const countryDiv = document.createElement("div");
  countryDiv.classList.add("country-div");
  countryDiv.classList.add(`${item.region}-div`);
  // Top Div
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("image-div");
  // Image
  const image = document.createElement("img");
  image.classList.add("image");
  image.alt = item.name;
  image.src = `http://purecatamphetamine.github.io/country-flag-icons/3x2/${item.alpha2Code}.svg`;
  // Bottom Div
  const textDiv = document.createElement("div");
  textDiv.classList.add("text-div");
  // Name
  const countryName = document.createElement("h3");
  countryName.classList.add("country-name");
  countryName.innerText = item.name;
  // Population
  const populationText = document.createElement("p");
  populationText.classList.add("population-text");
  populationText.innerText = "Population: ";
  const populationNr = document.createElement("span");
  populationNr.classList.add("population-nr");
  populationNr.innerText = item.population;
  populationText.appendChild(populationNr);
  // Region
  const regionText = document.createElement("p");
  regionText.classList.add("region-text");
  regionText.innerText = "Region: ";
  const regionNr = document.createElement("span");
  regionNr.classList.add("region-nr");
  regionNr.innerText = item.region;
  regionText.appendChild(regionNr);
  // Capital
  const captialText = document.createElement("p");
  captialText.classList.add("capital-text");
  captialText.innerText = "Capital: ";
  const capitalNr = document.createElement("span");
  capitalNr.classList.add("capital-nr");
  capitalNr.innerText = item.capital;
  captialText.appendChild(capitalNr);
  // Append All
  imageDiv.appendChild(image);
  textDiv.appendChild(countryName);
  textDiv.appendChild(populationText);
  textDiv.appendChild(regionText);
  textDiv.appendChild(captialText);
  countryDiv.appendChild(imageDiv);
  countryDiv.appendChild(textDiv);
  linkNextPage.appendChild(countryDiv);

  darkModeIcon.addEventListener("click", () => {
    textDiv.classList.toggle("active");
  });
}

async function fetchCountry() {
  const data = await fetchApi();
  let countryName = [
    data[84],
    data[239],
    data[31],
    data[103],
    data[0],
    data[1],
    data[2],
    data[3],
  ];
  // Adds divs
  countryName.forEach((country) => {
    createDiv(country);
  });
}

fetchCountry();

async function fetchSelectedCountry(country) {
  const data = await fetchApi();
  let searchedCountry;
  for (const countryObject of data) {
    if (countryObject.name === `${country}`) {
      searchedCountry = countryObject;
    }
  }
  createDiv(searchedCountry);
}

function changeMode(e) {
  const header = document.querySelector("header");
  const alpha = document.querySelector("a");
  const moonIcon = document.querySelector("i");
  const main = document.querySelector("main");
  const searchButton = document.querySelector("button");
  const searchIcon = document.querySelector(".fa-search");
  const body = document.querySelector("body");

  if (moonIcon.classList.contains("fa")) {
    moonIcon.classList.remove("fa");
    moonIcon.classList.add("far");
  } else {
    moonIcon.classList.remove("far");
    moonIcon.classList.add("fa");
  }
  header.classList.toggle("active");
  alpha.classList.toggle("active");
  main.classList.toggle("active");
  searchButton.classList.toggle("active");
  searchIcon.classList.toggle("active");
  searchInput.classList.toggle("active");
  searchFilter.classList.toggle("active");
  body.classList.toggle("active");
}

// EventListeners
searchFilter.addEventListener("change", filterWorld);
searchInput.addEventListener("input", updateInput);
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clear();
  fetchSelectedCountry(searchValue);
});
darkModeIcon.addEventListener("click", changeMode);

// const invalidText = document.createElement("h1");
// invalidText.classList.add("invalid-text");
// invalidText.innerText = "Sorry your input doesn't match....";
// gallery.appendChild(invalidText);
// return;
// Add Div
