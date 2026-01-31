// 콜백함수, Promise, async 한 눈에 비교하기

// 콜백함수
function example1(callback) {
    console.log(1);
    callback();
}

function getCallback() {
    setTimeout(() => {
        console.log(2);
        console.log(3);
    }, 500);
}

example1(getCallback);

// Promise
function example2() {
    console.log(4);
    getPromise().then((res) => {
        console.log(res);
        console.log(6);
    });
}

function getPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 500);
    });
}

example2();

// async, await
async function asyncFunction() {
    console.log(7);
    const result = await getResult();
    console.log(result);
    console.log(9);
}

function getResult() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(8);
        }, 500);
    });
}

asyncFunction();

// try-catch 문법
try {
    블라블라;
} catch (err) {
    console.log(err);
}

// async-await 예외처리
async function asyncFunction() {
    try {
        console.log(1);
        const result = await getResult();
        console.log(result);
        console.log(3);
    } catch (err) {
        console.log(err);
    }
}

function getResult() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("에러발생 예시"));
        }, 500);
    });
}

asyncFunction();