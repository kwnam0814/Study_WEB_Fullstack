# JavaScript

## 반복문

반복문을 사용하면 코드를 원하는 횟수만큼 반복하여 실행할 수 있다.

"안녕"이라는 문자를 100번 반복하고 싶으면 `console.log("안녕");` 을 100번 입력해야 된다.

하지만 반복문을 사용한다면 적은 코드로 해당 작업을 수행할 수 있다.

### while문

while문은 조건식이 참인 동안 계속해서 반복함.

기본형

```javascript
let 변수 = 초깃값;

while (조건식) {
  소스코드;
  증감식;
}
```

**while문 중간실습**

while을 사용하여 1 ~ 50까지의 숫자 중 5의 배수만 console.log()로 출력해보세요.

### for문

for문은 while문과 다르게 자체적으로 초깃값, 조건식, 증감식을 모두 포함하고 있는 반복문이다.

while문보다는 좀 더 간결하게 반복문을 표현할 수 있다.

기본형

```javascript
for (초깃값; 조건식; 증감식) {
  소스코드;
}
```

**for문 중간실습**

for를 사용하여 1 ~ 50까지의 숫자 중 5의 배수만 console.log()로 출력해보세요.

#### 컨테이너와 함께 for - in문 & for - of문

```javascript
const arr = [5, 6, 7, 8];

for (let index in arr) {
  // 배열 안의 인덱스값 가져옴
  console.log(arr[index]);
}

for (let item of arr) {
  // 배열 안의 아이템을 직접 가져옴
  console.log(item);
}

const jsonArr = { email: "dummy", password: "a123" };

for (let key in jsonArr) {
  // 배열 안의 인덱스(키 값)를 직접 가져옴
  console.log(jsonArr[key]);
}
```

#### 반복문 제어. break, continue

- break : 반복문이 break를 만나면 반복문을 강제종료한다.

```javascript
// break 예제
// 1부터 10까지 출력하는 반복문에서 i가 5이상이 되면 반복문을 빠져나오게 만들기
for (let i = 1; i <= 10; i++) {
  if (i >= 5) {
    break;
  }
  console.log(i);
}
```

- continue : 반복문이 continue를 만나면 해당 반복은 건너뛰게 된다.

```javascript
// continue 예제
// 1부터 10까지 출력하는 반복문에서 5는 건너뛰고 출력하게 만들기
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
```
