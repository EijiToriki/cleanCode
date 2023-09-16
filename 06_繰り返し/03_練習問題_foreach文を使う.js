const pickedCountries = ["Japan", "Tanzania", "Germany", "France"];
const continents = {
  asia: ["Japan", "China", "Korea", "India"],
  europe: ["United Kingdom", "France", "Germany", "Italy"],
  america: ["United States", "Canada"],
  africa: ["Egypt", "South Africa", "Kenya", "Tanzania"],
};

for (const pickedCountry of pickedCountries) {
  for (const continent in continents) {
    if (continents[continent].includes(pickedCountry)) {
      console.log(pickedCountries + " is in " + continent);
    }
  }
}