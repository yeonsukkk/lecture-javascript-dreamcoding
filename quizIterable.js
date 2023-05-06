console.clear();
/* 
  0~9까지의 숫자의 두배를 순회하는 이터레이터 만들기
*/
function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
        next() {
          /* 
          return {value: i++ * 2, done: i < max}
          */
          return num < maxValue
            ? { value: num++ * 2, done: false }
            : { done: true };
        },
      };
    },
  };
}

const multiple = makeIterable(0, 10, (n) => n * 2);

for (const item of multiple) {
  console.log(item);
}
