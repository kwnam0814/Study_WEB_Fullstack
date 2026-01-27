// 배열 선언
let arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]

// 배열 조회
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
console.log(arr.slice(2, 5)); // 3, 4, 5
console.log(arr.slice(2)); // 3, 4, 5

// 배열 수정
arr[0] = 9;
console.log(arr); // [9, 2, 3, 4, 5]

// 배열 삭제
arr.splice(3, 1);
console.log(arr); // [9, 2, 3, 5]

arr.splice(2);
console.log(arr); // [9, 2]

console.log(arr.indexOf(9)); // 0

let arr2 = [1, 2, 3, 4, 5];

let index = arr2.indexOf(3);

arr2.splice(index, 1);

console.log(arr2); // [1, 2, 4, 5]

// length
console.log(arr2.length); // 4

// ES6 구조분해 할당
const arr3 = [5, 6, 7];
const [first, second, third] = arr3;
console.log(first, second, third); // 5 6 7


// 객체 선언 (Create)
let userInfo = {
  email: "dummy@dummy.com",
  password: "a1234",
};

// 객체 조회 (Read)
console.log(userInfo.email); // dummy@dummy.com
console.log(userInfo['email']); // dummy@dummy.com

// 객체 수정 (Update)
userInfo.email = "test@test.com";
console.log(userInfo); // {email: 'test@test.com', password: 'a1234'}

// 객체 삭제 (Delete)
console.log(userInfo); // {email: 'test@test.com', password: 'a1234'}

delete userInfo.email;

console.log(userInfo); // {password: 'a1234'}

// 객체 연습문제
let obj = {
    title: "코하전자",
    date: "2020-10-25",
    users: []
};

console.log(obj);

obj.users.push({email: "dummy@dummy.com", password: "a123"});

console.log(obj);