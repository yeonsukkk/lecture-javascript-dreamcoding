console.clear();

/* 
  정직원, 파트파임직원을 나타낼 수 있는 클래스 만들기
  직원들의 정보: 이름, 부서이름, 한달 근무 시간
  매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있음
  정직원은 시간당 10,000원
  파트타임 직원은 시간당 8,000원
*/

class AdminStaff {
  #payRate;
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.#payRate = payRate;
  }
  get staffInfo() {
    return `${this.name}은 ${this.department} 부서입니다.\n${
      this.hoursPerMonth
    }시간 근무한 한달 급여는 ${this.calculatePay()}입니다.`;
  }
  calculatePay() {
    return this.hoursPerMonth * this.#payRate;
  }
}

class FullTimeStaff extends AdminStaff {
  static #PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeStaff.#PAY_RATE);
  }
}

class PartTimeStaff extends AdminStaff {
  static #PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeStaff.#PAY_RATE);
  }
}

const yeonsu = new FullTimeStaff('강연수', 's/w', 30);
yeonsu.calculatePay();
console.log(yeonsu.staffInfo);
console.log(yeonsu);
const minji = new PartTimeStaff('최민지', '인사팀', 20);
minji.calculatePay();
console.log(minji.staffInfo);
