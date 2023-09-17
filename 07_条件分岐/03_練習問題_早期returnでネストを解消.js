// bad
// function isCorrectInput(member) {
//   if (member.id) {
//     if (member.name) {
//       if (member.age) {
//         if (member.email) {
//           return true;
//         } else {
//           console.error("メールアドレスが入力されていません");
//           return false;
//         }
//       } else {
//         console.error("年齢が入力されていません");
//         return false;
//       }
//     } else {
//       console.error("名前が入力されていません");
//       return false;
//     }
//   } else {
//     console.error("idがありません");
//     return false;
//   }
// }

// const profile = {
//   id: 1,
//   name: "John",
//   age: 20,
//   email: "",
// };
// isCorrectInput(profile);

// good
function isCorrectInput(member) {
  if (!member.id){
    console.error("idがありません");
    return false
  }
  if (!member.name){
    console.error("名前が入力されていません");
    return false;
  }
  if (!member.age){
    console.error("年齢が入力されていません");
    return false;
  }
  if (!member.email){
    console.error("メールアドレスが入力されていません");
    return false;
  }
  return true
}

const profile = {
  id: 1,
  name: "John",
  age: 20,
  email: "",
};
isCorrectInput(profile);