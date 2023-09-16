// 問1. 2の倍数の場合、処理を行わずスキップする
for (let i = 0; i < 13; i++) {
  if(i%2 === 0){
    continue
  }
  console.log(i)
}

// 問2. 5以上、かつ4の倍数を1つ出力したらループを終了させる
for (let i = 1; i < 15; i++) {
  console.log(i)
  if(i >= 5 && i%4 === 0){
    break
  }  
}