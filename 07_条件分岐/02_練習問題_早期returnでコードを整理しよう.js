// 問1
// bad
// function getUserName(user) {
//   let username = "";
//   if (user !== undefined) {
//     username = user.name;
//   } else {
//     username = "名無し";
//   }
//   return username;
// }

function getUserName(user) {
  return user ? user.name || "" : "名無し"
}


// 問2. 1~30までの数字のうち、素数の場合は true を、そうでない場合は false を返す関数を作成してください。
// function isPrimeNumber(n) {
//   if (n > 2) {
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   } else if (n === 2) {
//     return true;
//   } else if (n === 1) {
//     return false;
//   }
// }

// for (let i = 1; i <= 30; i++) {
//   console.log(i, isPrimeNumber(i));
// }

function isPrimeNumber(n) {
  if (n === 1)  return false
  if (n === 2)  return true
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
  
for (let i = 1; i <= 30; i++) {
  console.log(i, isPrimeNumber(i));
}