# JavaScript

## Javascript Async

### 동기/비동기 방식의 이해

**promise 객체**

ES6부터 새롭게 나온 비동기 처리 방식이다.

콜백함수의 단점을 개선하는 방법으로 유용하게 사용할 수 있다.

`promise의 상태`

promise는 총 3가지의 상태값이 존재함.

1. 대기(pending) : promise 객체를 새로 생성한 상태. 대기
2. 이행(fulfilled) : `resolove` 가 실행된 상태. 비동기 로직이 완료된 상태
3. 거부(rejected) : `reject`가 실행된 상태. 비동기 로직에서 에러가 난 경우

![promise 객체](./js_promise.png)

`promise 객체 구조`

```javascript
new Promise((resolve, reject) => {});
```

promise 객체 역시 콜백함수를 받고, 그 콜백함수의 인자로는 resolve와 reject가 있다.

**resolve가 호출 됨 → 이행 상태 →  promise 객체의 then() 메서드 호출**

**reject가 호출 됨 → 거부 상태 →  promise 객체의 catch() 메서드 호출**

`promise 사용 예시`

```javascript
const helloPromise = new Promise((resolve, reject) => {
    // 생성 자체는 pending
    let isSuccess = true;

    if (!isSuccess) {
        reject(false);
        return;
    }

    resolve(true);
});

helloPromise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
```

`promise로 콜백지옥 개선하기 → promise chaining`

앞서 콜백함수를 이용한 비동기처리는 실행 순서를 보장해야하는 여러 작업이 꼬리를 물 결우

코드의 가독성이 떨어지고 복잡해진다는 단점이 있었다.

이를 promise에서는 chaining을 사용해서 해결할 수 있다.

**promise의 then() 메서드를 호출하고 나면, 새로운 promise 객체를 리턴함.**

이렇게 새롭게 리턴된 promise 객체에도 또한 then() 메서드를 사용해서 연결시킬 수 있다.

```javascript
const heaven = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = 1;
    resolve(num);
  }, 500);
});

heaven
  .then((num) => {
    console.log(num);
    return num + 1;
  })
  .then((num) => {
    console.log(num);
    return num + 10;
  })
  .then((num) => {
    console.log(num);
    return num + 100;
  })
  .then((num) => {
    console.log(num);
  });
```

`에러 발생 방법`

에러는 프로그래밍에서 피하고 싶지만 피할 수 없는 존재이다.

에러 메세지는 디버깅을 하는데 굉장히 중요하다.

그리고 때때로 일부러 에러를 발생시켜야할 때도 있다.

```javascript
throw new Error("에러 메시지");
```

```javascript
const example = new Promise((resolve, reject) => {
  let isSuccess = true; // true, false 값을 변경하며 테스트 해봅니다.

  if (!isSuccess) {
    throw new Error("요청에 실패했습니다."); // 에러가 발생하면 reject하지 않아도 catch메서드로 이동합니다.
  }

  resolve();
});

example
  .then((res) => {
    console.log(res);
    throw new Error("일부러 에러를 내봤어요.."); // 에러가 발생하면 reject하지 않아도 catch 메서드로 이동합니다.
  })
  .catch((err) => console.log(err));
  ```