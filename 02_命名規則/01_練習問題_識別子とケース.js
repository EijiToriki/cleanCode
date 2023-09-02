// クラス属性をケバブケースに直す
{/* <h1 class="pagetitle">...</h1>
<ul class="user_name_list">...</ul> */}

<h1 class="page-title">...</h1>
<ul class="user-name-list">...</ul>



// スネークケースに直す
// const headerHeight = 80;
// const UserMessage = "hello world";

const header_height = 80;
const user_message = "hello world";


// パスカルケースに直す
// class user_data {
//   constructor() {
//     this.id = "12345";
//   }
// }

class UserData {
  constructor() {
    this.id = "12345";
  }
}

// class gamePlayer {
//   constructor() {
//     this.score = 0;
//   }
// }

class GamePlayer {
  constructor() {
    this.score = 0;
  }
}


// キャメルケースに直す
// const BookItem = {
//   id: '1',
//   title: 'Hello World'
// };

// function ADD_ACTIVE_CLASS() {...};

const bookItem = {
  id: '1',
  title: 'Hello World'
};

function addActiveClass() {...};