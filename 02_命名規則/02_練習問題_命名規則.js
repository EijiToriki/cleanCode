// 元旦
const yearStartDay = "1月1日";

// 曜日を格納した配列
const dayOfweekArr = ["日", "月", "火", "水", "木", "金", "土"];

// 3割引の商品の値段
function calc30PercentOff(number) {
  return number * (1 - 0.3);
}

// 数値配列の合計値を取得
function getTotal(array) {
  return array.reduce(function (a, b) {
    return a + b;
  });
}

// お気に入りのスポーツのクラス
class FavoriteSports {
  constructor(name) {
    this.name = name;
  }
  showInfo() {
    console.log(`私の好きなスポーツは${this.name}です。`);
  }
}

// 惑星
class Planet {
  constructor(name) {
    this.name = name;
  }
  // 地球からの距離を返す
  getDistFromEarth() {...}
}
