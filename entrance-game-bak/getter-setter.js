class Store {
  #init; // 손님 수 init
  #store; // store 이름
  #people = 0; // 총 손님 수
  #addPeople = 0; // 입장 수
  #removePeople = 0; // 퇴장 수
  constructor(init, store) {
    this.#init = init;
    this.#store = store;
  }
  get openStore() {
    return `🎪 Welcome to ${this.#store}'s Store!`;
  }

  // 증가!!
  get increment() {
    return `${this.#addPeople}명이 입장하여서, 현재 매장의 손님은 ${
      this.#init
    }명 입니다.`;
  }
  set increment(people) {
    this.#addPeople = people;
    this.#people = this.#people + people;
    this.#init = this.#init + people;
  }

  // 감소!!
  get decrement() {}
  set decrement(people) {}

  endStore() {
    if (this.#init !== 0) {
      return `😱손님이 ${this.#init}명이므로 영업을 종료할 수 없습니다.`;
    }
    return `🌃 현재 매장의 손님은 ${
      this.#init
    }명 입니다. 영업을 종료하겠습니다.`;
  }
}

let customer = new Store(0, 'Yeonsu');

const customerCheck = (event) => {
  // nodes init
  const parentLi = document.querySelector('#root');
  const inputAdd = event.currentTarget.children[0];
  const outputAdd = event.currentTarget.children[1];
  const elm = document.createElement('li');

  // input 입력 없을 시
  if (inputAdd.value === '' || outputAdd.value === '') {
    alert('숫자를 입력하세요');
    inputAdd.value = '';
    inputAdd.focus();
    return;
  }

  // actvie
  customer.increment = parseInt(inputAdd.value);
  elm.textContent = customer.increment;
  parentLi.append(elm);
  inputAdd.value = '';
};

window.addEventListener('load', function () {
  const startElm = document.createElement('h1');
  startElm.classList.add('title');
  startElm.textContent = customer.openStore;
  this.document.querySelector('body').prepend(startElm);
});
