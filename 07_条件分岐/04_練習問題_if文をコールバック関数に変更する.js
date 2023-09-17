// bad
// function createVegetableText(name) {
//   return `${name}は洗って皮を剥き、食べやすい大きさにカットします。`;
// }
// function createFruitText(name) {
//   return `${name}は皮を剥いてお皿に盛り付けます。`;
// }
// function createMeatText(name) {
//   return `${name}は一口大に切り、炒めます。`;
// }

// // 食材のタイプ別に処理方法を取得する
// function getRecipe(ingredient) {
//   if (ingredient.type === "vegetable") {
//     return createVegetableText(ingredient.name);
//   } else if (ingredient.type === "fruit") {
//     return createFruitText(ingredient.name);
//   } else if (ingredient.type === "meat") {
//     return createMeatText(ingredient.name);
//   }
// }

// const recipes = [];
// recipes.push(getRecipe({ type: "vegetable", name: "にんじん" }));
// recipes.push(getRecipe({ type: "fruit", name: "ぶどう" }));
// recipes.push(getRecipe({ type: "meat", name: "鶏肉" }));
// console.log(recipes);


function createVegetableText(name) {
  return `${name}は洗って皮を剥き、食べやすい大きさにカットします。`;
}
function createFruitText(name) {
  return `${name}は皮を剥いてお皿に盛り付けます。`;
}
function createMeatText(name) {
  return `${name}は一口大に切り、炒めます。`;
}

// 食材のタイプ別に処理方法を取得する
function getRecipe(ingredient) {
  return ingredient.createText(ingredient.name)
}

class Ingredient{
  constructor(name, createText){
    this.name = name
    this.createText = createText
  }
}

const vegetable = new Ingredient("にんじん", createVegetableText)
const fruit = new Ingredient("ぶどう", createFruitText)
const meat = new Ingredient("鶏肉", createMeatText)

const recipes = [];
recipes.push(getRecipe(vegetable));
recipes.push(getRecipe(fruit));
recipes.push(getRecipe(meat));
console.log(recipes);