// 객체 선언 방식

// Object 생성자 방식
const dummy = new Object();

dummy.attr = 10;

dummy.method = function () {
    return 20;
}

console.log(dummy.attr, dummy.method());

// 함수 방식
const Dummy = function (param) {
  this.attr = param;
};

Dummy.prototype.attr2 = 40;
Dummy.prototype.dummyMethod = function () {
    return 50;
}

const obj = new Dummy(30);
console.log(obj.attr, obj.attr2, obj.dummyMethod());