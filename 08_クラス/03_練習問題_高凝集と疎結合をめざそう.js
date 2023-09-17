class Delivery {
  #destination
  #AREA = {
    hokkaido: 1000,
    tohoku: 600,
    kanto: 600,
    chubu: 600,
    kinki: 800,
    chugoku: 800,
    shikoku: 800,
    kyushu: 1000,
  };

  constructor(destination){
    this.#destination = destination
  }

  getFee() {
    return this.#AREA[this.#destination];
  }

  changeDestination(destination){
    this.#destination = destination
  }
}

// 商品
class Item {
  #name
  #price
  #quantity
  constructor(name, price, quantity) {
    this.#name = name;
    this.#price = price;
    this.#quantity = quantity;
  }

  getName(){
    return this.#name
  }

  getSubTotal(){
    return this.#price * this.#quantity
  }

  get name(){
    return this.#name
  }

  get price(){
    return this.#price
  }

  get quantity(){
    return this.#quantity
  }
}

// 買い物かご
class Cart {
  #items
  delivery = new Delivery();

  constructor(items) {
    this.#items = items;
  }

  add(item) {
    this.#items.push(item);
  }

  remove(itemName) {
    this.#items = this.items.filter((item) => item.getName !== itemName);
  }

  getItemTotal() {
    return this.#items.reduce((total, item) => {
      return total + item.getSubTotal();
    }, 0);
  }

  getItems(){
    return this.#items
  }
}

// 注文
class Order {
  #delivery
  #cart

  constructor(cart, destination) {
    this.#delivery = new Delivery(destination)
    this.#cart = cart;
  }

  removeItem(itemName){
    this.#cart.removeItem(itemName);

  }

  changeDestination(destination){
    this.#delivery.changeDestination(destination)
  }

  getTotalPrice() {
    const itemTotal = this.#cart.getItemTotal();
    const delivery = this.#delivery.getFee();
    return itemTotal + delivery;
  }
  confirm() {
    return {
      items: this.#cart.getItems(),
      total: `${this.getTotalPrice()}円`,
    };
  }
}

const items = [
  new Item("apple", 100, 1),
  new Item("orange", 200, 2),
  new Item("banana", 300, 3),
];
const cart = new Cart(items);
const order = new Order(cart, "hokkaido")
console.log(order.confirm());

order.removeItem("apple");
order.changeDestination("kanto");
console.log(order.confirm());
