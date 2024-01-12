/**
 * 주어진 seconds(초)가 지나면 callback함수를 호출
 * 단, seconds가 0보다 작으면 error를 던지자!
 */

// 나의 풀이
function runInDelay(callback, seconds) {
  console.log(`${seconds}초 후 시작`);
  if (!callback) throw new Error("need a callback function");
  if (!seconds || seconds < 0)
    throw new Error(
      "need a seconds argument or seconds argument doesn't have to be minus"
    );
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log("끝");
  }, 2);
} catch (err) {}

// Ellie의 코드
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
