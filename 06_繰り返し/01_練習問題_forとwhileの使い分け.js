// 問1
// 0 ~ 9 までの整数を繰り返しランダム生成して出力。
// 生成した乱数が 1 になったらループを抜ける。

let randomNum = -1

while(randomNum !== 1){
  randomNum = Math.floor(Math.random() * 10)
  console.log(randomNum)
}


// 問2
// 以下の配列の中の値を全て出力する。

const fruits = ["lemon", "apple", "banana"];

for(const fruit of fruits){
  console.log(fruit)
}