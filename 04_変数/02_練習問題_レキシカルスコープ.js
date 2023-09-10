``` bad 
let baseNum = 0;

function plus10() {
  baseNum = baseNum + 10;
}
plus10();

console.log(baseNum);
```

function plus10(baseNum) {
  return baseNum + 10;
}

const baseNum = 0;
const resultNum = plus10(baseNum);

console.log(resultNum);

