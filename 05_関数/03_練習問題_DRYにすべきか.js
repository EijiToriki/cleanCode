// js
const lastName = "やまだ";
const firstName = "たろう";

// 苗字をカタカナに変換する関数
function convertLastNameToKana(lastName) {
  return lastName.replace(/[\u3041-\u3096]/g, function (match) {
    var chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}

// 名前をカタカナに変換する関数
function convertFirstNameToKana(firstName) {
  return firstName.replace(/[\u3041-\u3096]/g, function (match) {
    var chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}

console.log(convertLastNameToKana(lastName));
console.log(convertFirstNameToKana(firstName));

``` 回答
ドライにするべき
苗字と名前を分離する必要性を感じない。
ひらがなをカタカナに変換する関数にして良いと考える。
```


//js
// たこ銀行から送金する場合
function transferMoneyFromTakoBank(deposit) {
  const commission = 100;
  updateDeposit(deposit, commission);
}

// いか銀行から送金する場合
function transferMoneyFromIkaBank(deposit) {
  const commission = 100;
  updateDeposit(deposit, commission);
}

``` 回答
ドライにすべきではない
偶々手数料が被っただけ。各銀行の処理を1つの関数にすべし。
```