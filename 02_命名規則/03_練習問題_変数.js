// 曜日の配列
const DAY_OF_WEEKS = ["日", "月", "火", "水", "木", "金", "土"];

// 指定した日付から曜日を取得
function getDayOfWeek(year, month, day) {
  return DAY_OF_WEEKS[new Date(year, month - 1, day).getDay()];
}
```

// 都道府県
const prefectures = {
  hokkaido: '北海道',
  aomori: '青森',
  iwate: '岩手',
  miyagi: '宮城',
  ・
  kagoshima: '鹿児島',
  okinawa: '沖縄'
}

// 配列を昇順にする関数
function sortCharacterASC(array) {
  return array.sort((first, second) => first - second);
}
