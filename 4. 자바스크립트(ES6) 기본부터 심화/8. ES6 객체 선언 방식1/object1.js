// 객체 선언 방식

// 1. 리터럴 방식
const userInfo = {
	name: "홍길동",
	birth: "2020-10-10",
	getName: function () {
        console.log(this);
        return this.name
	}
};

console.log(userInfo.name); // 홍길동

console.log(userInfo.getName()); // 홍길동

// this와 화살표 함수
const obj = {
  nickname: "하하",
  age: 22,
  say: function () {
    console.log(this);
    console.log(`제 이름은 ${this.nickname}, 나이는 ${this.age}살 입니다.`);
  },
};

obj.say();

const obj2 = {
  nickname: "하하",
  age: 22,
  say: () => {
    console.log(this);
    console.log(`제 이름은 ${this.nickname}, 나이는 ${this.age}살 입니다.`);
  },
};

obj2.say();

// 객체 리터럴 방식 예제
const obj3 = {
    setNumbers: function () {
        (this.num1 = 3), (this.num2 = 5);
    },
    sum: function () {
        return this.num1 + this.num2;
    },
    multiply: function () {
        return this.num1 * this.num2;
    }
};

obj3.setNumbers();
console.log(obj3.sum());
console.log(obj3.multiply());

const obj4 = {
    setNumbers: function (num1, num2) {
        (this.num1 = num1), (this.num2 = num2);
    },
    sum: function () {
        return this.num1 + this.num2;
    },
    multiply: function () {
        return this.num1 * this.num2;
    }
};

obj4.setNumbers(5, 8);
console.log(obj4.sum());
console.log(obj4.multiply());