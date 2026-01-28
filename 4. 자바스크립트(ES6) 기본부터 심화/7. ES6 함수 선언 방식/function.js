// 함수

// 더하기 함수 예제

// 기본형 - 함수 선언하기 전에 호출에도 작동함
function basic1(num1, num2) {
    console.log(num1 + num2);
}

basic1(1, 3);

// 익명함수 - 함수 선언하기 전에 호출하면 작동하지 않음
let basic2 = function (num1, num2) {
    console.log(num1 + num2);
}

basic2(3, 5);

// ES6 화살표 함수 - 익명함수의 일종
// 함수 선언하기 전에 호출하면 작동하지 않음
let basic3 = (num1, num2) => {
    console.log(num1 + num2);
}

basic3(5, 7);

// 리턴
function basic4(num1, num2) {
    return num1 + num2;
}

let result = basic4(7, 9);

console.log(result);


function basic5(num1, num2) {
    num1 + num2;
}

let result2 = basic5(7, 9);

console.log(result2);


// 함수 중간정리 예제
function BMI(height, weight) {
    // console.log(weight / ((height / 100) ** 2));
    const BMI_Index = weight / ((height / 100) ** 2);

    return BMI_Index;
}

console.log(BMI(175, 75));