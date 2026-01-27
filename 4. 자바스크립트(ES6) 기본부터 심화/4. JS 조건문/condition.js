// if문
let a = 1;

if (a < 10) {
	console.log("안녕");
}

let b;

console.log(typeof b); // undefined
console.log(Boolean(b)); // false

let c = null;

console.log(typeof c); // object(null값)
console.log(Boolean(c)); // false

let d = "";

console.log(typeof d); // string(빈 문자열)
console.log(Boolean(d)); // false

// else문
let f = 8;

if (f < 10) {
    console.log("f는 10 미만입니다.")
} else {
    console.log("f는 10 미만이 아닙니다.")
}

// else if문
const score = 87;

if (score >= 90) {
    console.log("A");
}
else if (score >= 80) {
    console.log("B");
}
else if (score >= 70 && score < 80) {
    // 70 <= score < 80 : 이런 경우 없음
    // score >= 70 and score < 80 : 이런 경우 없음
    console.log("C");
}
else if (score >= 60 && score < 70) {
    console.log("D");
}
else {
    console.log("F");
}

// 중간정리 실습

const num = 7;

if (num % 2 === 0) {
    console.log("짝수")
}
else {
    console.log("홀수")
}

// switch문
let color = "blue";

switch(color) {
    case "red": 
        console.log("RED");
	    break;
	case "blue": 
        console.log("BLUE");
	    break;
	case "green": 
        console.log("GREEN");
	    break;
    default: 
        console.log("NOTHING MATCH");
        break;
}

// 삼항연산자
let g = 1 < 10 ? true : false;
console.log(g);

let h = 3 > 10 ? "정답" : "거짓";
console.log(h);