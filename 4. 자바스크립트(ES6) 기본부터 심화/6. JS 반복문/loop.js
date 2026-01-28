// while문
let a = 1
while (a <= 10) {
	console.log("안녕");
	a++;
}

// while문 중간실습
let b = 1;
while (b <= 50) {
    if (b % 5 === 0) {
        console.log(b);        
    }
    b++;
}

// for문
for(let c = 1; c <= 10; c++) {
	console.log(c);
}

// for문 중간실습
for (let d = 1; d <= 50; d++) {
    if (d % 5 === 0) {
        console.log(d);
    }    
}

// 컨테이너와 함께 for - in문 & for - of문
const arr = [5,6,7,8];

for (let index in arr) {
	console.log(arr[index]);
}

for (let item of arr) {
	console.log(item);
}

const jsonArr = {email: "dummy", password: "a123"};

for (let key in jsonArr) {
	console.log(jsonArr[key]);
}

// break 예제
// 1부터 10까지 출력하는 반복문에서 i가 5이상이 되면 반복문을 빠져나오게 만들기
for (let e = 1; e <= 10; e++) {
  if (e >= 5) {
    break;
  }
  console.log(e);
}

// continue 예제
// 1부터 10까지 출력하는 반복문에서 5는 건너뛰고 출력하게 만들기
for(let f = 1; f <= 10; f++){
	if(f == 5){
		continue;
	}
	console.log(f);
}