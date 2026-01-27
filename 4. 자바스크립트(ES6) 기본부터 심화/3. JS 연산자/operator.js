// let과 const 차이
let myName = "홍길동";
console.log(myName); // 홍길동

myName = "김철수";
console.log(myName); // 김철수

// const myName = "홍길동";
// console.log(myName);

// myName = "김철수"; // 재할당 불가 에러
// console.log(myName);

// 산술 연산자
console.log(7 + 3); // 10

console.log(7 - 3); // 4

console.log(7 * 3); // 21

console.log(7 / 3); // 2.xxx

console.log(7 % 3); // 1

// 비교 연산자
console.log(1 > 5); // false

console.log(1 < 5); // true

console.log(5 >= 5); // true

console.log(5 == "5"); // true

console.log(5 === "5"); // false

console.log(3 != "3"); // false

console.log(3 !== "3"); // true

// 논리 연산자
let option1 = 10 > 1; // true
let option2 = 2 == 3; // false

console.log(option1 || option2); // true
console.log(option1 && option2); // false
console.log(!option1); // false

// 중간정리 실습: 적정체중 계산 코딩
const myHeight = 175;
let goodWeight = (myHeight - 100) * 0.9;

console.log(goodWeight);
console.log("당신의 키는", myHeight, "cm이며, 적정체중은", goodWeight, "kg입니다.")