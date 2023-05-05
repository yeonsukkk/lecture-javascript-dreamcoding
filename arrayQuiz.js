console.clear();

// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
const quiz1Arr = ['🍌', '🍓', '🍇', '🍓'];
function quiz1(obj) {
  const newQuiz1 = obj.map((item) => (item === '🍓' ? '🥝' : item));
  return newQuiz1;
}
console.log('quiz1: ', quiz1(quiz1Arr));

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
const quiz2Arr = ['🍌', '🥝', '🍇', '🥝'];
function quiz2(obj) {
  let i = 0;
  obj.map((item) => (item === '🥝' ? ++i : i));
  return i;
}
console.log('quiz2: ', quiz2(quiz2Arr));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
const quiz3Arr1 = ['🍌', '🥝', '🍇'];
const quiz3Arr2 = ['🍌', '🍓', '🍇', '🍓'];
function quiz3(obj1, obj2) {
  const newQuiz3 = obj2.filter((item) => obj1.indexOf(item) !== -1);
  return newQuiz3;
}
console.log('quiz3: ', quiz3(quiz3Arr1, quiz3Arr2));
