```js
const nameList = ["Bob", "Alice", "Mike", "John", "Tom", "Ken"];

// アルファベット順にソート
function sortAlphabet() {
  nameList.sort();
  return nameList;
}

// 文字数が小さい順にソート
function sortWordCount() {
  nameList.sort((a, b) => a.length - b.length);
  return nameList;
}

function getThreeNames() {
  return nameList.slice(0, 3);
}

sortAlphabet();

setTimeout(() => {
  const names = getThreeNames();
  console.log(names); // <- アルファベット順に並べた配列から3人目までの名前を取得したい
}, 1000);

sortWordCount();
```

const nameList = ["Bob", "Alice", "Mike", "John", "Tom", "Ken"];

const sortedNameListAlpha = sortAlphabet(nameList);

consoleLogAfterOnesec(sortedNameListAlpha)

const sortedNameListLength = sortWordCount(nameList);

// 1秒後に配列をログに出力する関数
function consoleLogAfterOnesec(list){
  setTimeout(() => {
    const threeElementsList = getThreeNames(list);
    console.log(threeElementsList); // <- アルファベット順に並べた配列から3人目までの名前を取得したい
  }, 1000);
}

// アルファベット順にソート
function sortAlphabet(list) {
  const sortedList = [...list]
  sortedList.sort();
  return sortedList;
}

// 文字数が小さい順にソート
function sortWordCount(list) {
  const sortedList = [...list]
  sortedList.sort((a, b) => a.length - b.length);
  return sortedList;
}

function getThreeNames(list) {
  return list.slice(0, 3);
}

