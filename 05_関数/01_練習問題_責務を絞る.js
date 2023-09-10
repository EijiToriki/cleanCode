```問題①：bad
async function submitBlogPost() {
  let result;

  const inputTitle = getUserInputTitle(); // ユーザーからの入力を取得
  const inputBody = getUserInputBody(); // ユーザーからの入力を取得

  // POST送信する際のデータを定義
  const sendData = {
    title: inputTitle,
    body: inputBody,
  };

  try {
    setLoadingState("LOADING");
    // POST送信をしている
    const response = await fetch("/blog-post", {
      method: "POST",
      body: JSON.stringify(sendData),
    });

    // HTTPステータスコードが200番代以外の場合はエラーを発生させる
    if (result.status < 200 && 300 <= result.status) {
      throw new Error(result.message);
    }

    result = await response.json();

    setLoadingState("DONE");
  } catch (error) {
    setLoadingState("FAIL");
    setErrorMessage(error);
  }

  return result;
}
```

function getSendData(){
  const inputTitle = getUserInputTitle(); // ユーザーからの入力を取得
  const inputBody = getUserInputBody(); // ユーザーからの入力を取得

  // POST送信する際のデータを定義
  return {
    title: inputTitle,
    body: inputBody,
  };
}

async function postSendData(url, sendData){
  // POST送信をしている
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(sendData),
  });

  // HTTPステータスコードが200番代以外の場合はエラーを発生させる
  if (result.status < 200 && 300 <= result.status) {
    throw new Error(result.message);
  }

  return await response.json();
}


async function submitBlogPost() {
  let result;
  const sendData = getSendData()

  try {
    setLoadingState("LOADING");
    const url = "/blog-post"
    result = postSendData(url, sendData)
    setLoadingState("DONE");
  } catch (error) {
    setLoadingState("FAIL");
    setErrorMessage(error);
  }

  return result;
}



// 問題②：bad
// const profile = {
//   name: "山田太郎",
//   birthday: "2000-01-01",
//   age: null,
// };

// function getAge(birthday) {
//   if (!birthday.match(/^\d{4}-\d{2}-\d{2}$/)) {
//     throw new Error(`誕生日のフォーマットが正しくありません。[${birthday}]`);
//   }
//   const today = new Date();
//   const birth = new Date(birthday);
//   const age = today.getFullYear() - birth.getFullYear();
//   if (
//     today.getMonth() < birth.getMonth() ||
//     (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
//   ) {
//     profile.age = age - 1;
//     return age - 1;
//   }
//   profile.age = age;
//   return age;
// }

// getAge(profile.birthday);
// console.log(`${profile.name}さんは${profile.age}歳です。`);

const profile = {
  name: "山田太郎",
  birthday: "2000-01-01",
  age: null,
};
const age = getAge(profile.birthday);
profile.age = age
console.log(`${profile.name}さんは${profile.age}歳です。`);

function getAge(birthday) {
  checkBirthdayFormat(birthday)

  const today = new Date();
  const birth = new Date(birthday);
  const age = today.getFullYear() - birth.getFullYear();
  if (
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
  ) {
    return age - 1;
  }
  return age;
}

function checkBirthdayFormat(birthday){
  if (!birthday.match(/^\d{4}-\d{2}-\d{2}$/)) {
    throw new Error(`誕生日のフォーマットが正しくありません。[${birthday}]`);
  }
}


// 問題③：bad
// async function fetchText(id) {
//   const response = await fetch(`https://api.example.com/users/${id}`);
//   const json = await response.json();
//   const { text } = json;

//   // すべての改行とスペースを除去
//   text.replace(/\r?\n|\r|\s/g, "");
//   return text;
// }


async function fetchText(id) {
  const response = await fetch(`https://api.example.com/users/${id}`);
  const json = await response.json();
  const { text } = json;
  return text
}

function deleteSpaceNewline(text){
  return text.replace(/\r?\n|\r|\s/g, "");
}

async function getFormattedText(id){
  const respText = await fetchText(id)
  const formattedText = deleteSpaceNewline(respText)
  return formattedText
}

const text = getTextbyId(id=1)

