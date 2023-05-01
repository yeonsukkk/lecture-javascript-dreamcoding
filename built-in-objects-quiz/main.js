console.clear();

// 1. 문자열의 모든 캐릭터를 하나씩 출력
const text = 'Hello World!';
const textSplit = text.split('');
textSplit.forEach((item) => console.log(item));

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const idx = 'user1, user2, user3, user4';
const idxSplit = idx.split(', ');
console.log(idxSplit);

// 3. 1초에 한번씩 시계를(날짜포함) 출력
setInterval(() => {
  console.log(new Date().toLocaleString('ko-KR'));
}, 1000);
