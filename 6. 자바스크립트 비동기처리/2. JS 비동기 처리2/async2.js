// promise 사용 예시
const helloPromise = new Promise((resolve, reject) => {
    // 생성 자체는 pending
    let isSuccess = true;
    // let isSuccess = false;

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

// promise chaining
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

// 에러 발생 방법
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