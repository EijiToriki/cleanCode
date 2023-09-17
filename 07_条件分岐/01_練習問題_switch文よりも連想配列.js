// bad
// function getAreaName(areaCode) {
//   switch (areaCode) {
//     case 1:
//       return "千代田区";
//     case 2:
//       return "中央区";
//     case 3:
//       return "港区";
//     case 4:
//       return "新宿区";
//     default:
//       return "他の区";
//   }
// }




function getAreaName(areaCode) {
  areaObject = {
    1: "千代田区",
    2: "中央区",
    3: "港区",
    4: "新宿区"
  }
  return areaObject[areaCode] || "他の区"
}
