// Ellie의 코드
// callback hell
// function runInDelay(callback, seconds) {
//   if (!callback) throw new Error("callback함수를 전달 해야 함");

//   if (!seconds || seconds < 0) throw new Error("seconds는 0보다 커야 함");
//   console.log("시작해 엘리");
//   setTimeout(callback, seconds * 1000);
// }

// try {
//   runInDelay(() => {
//     console.log("타이머 완료");
//   }, 2);
// } catch (error) {}

// callback hell 탈출
function runInDelay(seconds) {
  console.log("시작");
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error("seconds가 0보다 작음"));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log("타이머 완료"))
  .catch(console.error)
  .finally(() => console.log("끝났다"));
