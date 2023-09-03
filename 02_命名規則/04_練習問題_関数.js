// 配列を昇順にする
function sortASC(array) {
  return array.sort(function (a, b) {
    return a - b;
  });
}

// 配列を降順にする
function sortDESC(array) {
  return array.sort(function (a, b) {
    return b - a;
  });
}

// メールアドレスの形式が正しいかどうか
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// 電話番号の形式が正しいかどうか
function validateTel(tel) {
  return tel.match(/^\d{2,4}-\d{2,4}-\d{3,4}$/);
}


// 三角形の面積を取得
function calcTriangleArea(base, height) {
  return (base * height) / 2;
}

// 四角形の面積を取得
function calcSquareArea(width, height) {
  return width * height;
}

// 次のオリンピック開催年を求める
function getNextOrinpicYear(year) {
  return year + 4 - (year % 4);
}

// 次の閏年を求める
function getNextLeapYear(year) {
  while (true) {
    year++;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      return year;
    }
  }
}