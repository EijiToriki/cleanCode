// 都道府県コードから四国かどうかを判定
// 徳島: 36
// 香川: 37
// 愛媛: 38
// 高知: 39
// const isShikoku =
//   code === "36" || code === "37" || code === "38" || code === "39";

const TOKUSHIMA = "36"
const KAGAWA = "37"
const EHIME = "38"
const KOCHI = "39"
const isShikoku =
  code === TOKUSHIMA || code === KAGAWA || code === EHIME || code === KOCHI;

// 税込価格を取得
// function getIncludeTaxPrice(price) {
//   return price * 1.1;
// }

const RATE = 1.1
function getIncludeTaxPrice(price) {
  return price * RATE;
}
