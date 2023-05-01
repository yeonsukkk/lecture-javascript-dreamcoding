console.clear();

/* 
  정직원, 파트파임직원을 나타낼 수 있는 클래스 만들기
  직원들의 정보: 이름, 부서이름, 한달 근무 시간
  매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있음
  정직원은 시간당 10,000원
  파트타임 직원은 시간당 8,000원

  -> 하루 근무일수와 며칠 근무했는지 입력 받아서 계산 후 노출시키기
*/

class AdminStaff {
  #staff; // 정직원, 파트파임직원
  #name; // 이름
  #department; // 부서
  #dayTime; // 하루 일한 시간
  #days; // 근무 일수
  #hourly; // 시급
  #salary; // 급여
  constructor(staff, name, department) {
    this.#staff = staff;
    this.#name = name;
    this.#department = department;
    this.#staff === '정직원' ? (this.#hourly = 10000) : (this.#hourly = 8000);
  }
  get phrase() {
    if (this.#staff !== '정직원' && this.#staff !== '파트타임') {
      return '고용형태가 잘못되었습니다. 다시 기입해주세요';
    }
    return `${this.#department}에 속한 ${this.#name}님은 ${
      this.#staff
    }입니다.\n${this.#staff}의 급여는 ${this.#hourly
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 이고, 하루에 ${
      this.#dayTime
    }시간 ${this.#days}일 일하셨습니다.\n따라서 ${this.#days}일에 따른 급여는 ${
      this.#salary
    }원 입니다.`;
  }

  calcDays(dayTime, days) {
    this.#dayTime = dayTime;
    this.#days = days;
    this.#salary = (this.#hourly * this.#dayTime * days)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return [this.#dayTime, this.#days, this.#salary];
  }
}

const kang = new AdminStaff('정직원', '강아무개', '인사팀');
kang.calcDays(8, 30);

const park = new AdminStaff('파트타임', '박땡땡', '개발팀');
park.calcDays(5, 10);

const choi = new AdminStaff('정직원', '최뭐시기', '인재발굴팀');
choi.calcDays(3, 8);

const staffList = [kang.phrase, park.phrase, choi.phrase];

window.addEventListener('load', function () {
  const root = this.document.querySelector('#root');
  const ul = this.document.createElement('ul');

  /* 개행문자 바꾸기: staff.replace(/\n/g, '<br/>') */
  const staffElm = staffList?.map((staff) => {
    const li = this.document.createElement('li');
    li.append(staff);
    return li;
  });

  staffElm?.map((staff) => {
    ul.append(staff);
    return ul;
  });
  root.append(ul);
});
