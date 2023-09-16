// 問1. forEach に書き直す
const continents = ["Africa", "Australia", "Antractica"];

for (let i = 0; i < continents.length; i++) {
  console.log(continents[i]);
}

continents.forEach((contient)=>{
  console.log(contient)
})

// 出力される値
// > Africa
// > Australia
// > Antractica

// 問2. map に書き直す
const oceans = ["Pacfic", "Atlantic", "Indian"];

const result = [];
for (let i = 0; i < oceans.length; i++) {
  result[i] = oceans[i] + "-ocean";
}
console.log(result);

const resultMap = oceans.map((ocean) => {
  return ocean + "-ocean"
})
console.log(resultMap)
// 出力される値
// > ['Pacfic-ocean', 'Atlantic-ocean', 'Indian-ocean']

// 問3. filter に書き直す
const sports = [
  { name: "baseBall", category: "ball-game" },
  { name: "Judo", category: "martial-arts" },
  { name: "wrestling", category: "fighting-sports" },
];

const filteredSports = [];

for (let i = 0; i < sports.length; i++) {
  if (sports[i].category === "fighting-sports") {
    filteredSports.push(sports[i]);
  }
}
console.log(filteredSports);

const filterSports = sports((sport) => {
  return sport.category === "fighting-sports"
})

console.log(filterSports)

// 出力される値
// > {name: 'wrestling', category: 'fighting-sports'}