// Global Variables
const apiKey = "ac98b8a2e1msh48e3a397a66c1f9p1e06e7jsn6d33f38350c5";
const url = "https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all";
const searchInput = document.querySelector(".select-input");
const searchFilter = document.querySelector(".select-filter");
const gallery = document.querySelector(".gallery-map");

// Functions
async function fetchCountry() {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "ajayakv-rest-countries-v1.p.rapidapi.com",
      useQueryString: true,
    },
  });
  const data = await dataFetch.json();

  let Germany = data[84];
  let UnitedStates = data[239];
  let Brazil = data[31];
  let Iceland = data[103];
  let Afghanistan = data[0];
  let AlandIslands = data[1];
  let Albania = data[2];
  let Algeria = data[3];
  let countryName = [
    Germany,
    UnitedStates,
    Brazil,
    Iceland,
    Afghanistan,
    AlandIslands,
    Albania,
    Algeria,
  ];
  // Adds divs
  countryName.forEach((country) => {
    //console.log(country);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country-div");
    // Top Div
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-div");
    // Image
    const image = document.createElement("img");
    image.classList.add("image");
    image.alt = country.name;
    image.src =
      `http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.alpha2Code}.svg`;
    // Bottom Div
    const textDiv = document.createElement("div");
    textDiv.classList.add("text-div");
    // Name
    const countryName = document.createElement("h3");
    countryName.classList.add("country-name");
    countryName.innerText = country.name;
    // Population
    const populationText = document.createElement("p");
    populationText.classList.add("population-text");
    populationText.innerText = "Population: ";
    const populationNr = document.createElement("span");
    populationNr.classList.add("population-nr");
    populationNr.innerText = country.population;
    populationText.appendChild(populationNr);
    // Region
    const regionText = document.createElement("p");
    regionText.classList.add("region-text");
    regionText.innerText = "Region: ";
    const regionNr = document.createElement("span");
    regionNr.classList.add("region-nr");
    regionNr.innerText = country.region;
    regionText.appendChild(regionNr);
    // Capital
    const captialText = document.createElement("p");
    captialText.classList.add("capital-text");
    captialText.innerText = "Capital: ";
    const capitalNr = document.createElement("span");
    capitalNr.classList.add("capital-nr");
    capitalNr.innerText = country.capital;
    captialText.appendChild(capitalNr);
    // Append All
    imageDiv.appendChild(image);
    textDiv.appendChild(countryName);
    textDiv.appendChild(populationText);
    textDiv.appendChild(regionText);
    textDiv.appendChild(captialText);
    countryDiv.appendChild(imageDiv);
    countryDiv.appendChild(textDiv);
    gallery.appendChild(countryDiv);
  });
}

fetchCountry();

// EventListeners
