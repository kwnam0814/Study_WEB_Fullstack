// 비동기 처리 방식
// 1
console.log('1등!');
// 2
setTimeout(function () { // setTimeout 함수 : 비동기적으로 작동함
    console.log('2등!');
}, 2000);
// 3
console.log('3등!');


// 콜백함수
function first(next) {
    setTimeout(() => {
        console.log("first");
        next();
    }, 2000);
}

function second() {
    console.log("second");
}

first(second);


function first() {
    setTimeout(() => {
        console.log("third");
    }, 2000);
}

function second() {
    console.log("fourth");
}

first(second);

// 콜백지옥
function hell() {
    setTimeout(
        (name) => {
            let checkList = name;
            console.log(checkList);

            setTimeout(
                (name) => {
                    checkList += ", " + name;
                    console.log(checkList);

                    setTimeout(
                        (name) => {
                            checkList += ", " + name;
                            console.log(checkList);

                            setTimeout(
                                (name) => {
                                    checkList += ", " + name;
                                    console.log(checkList);
                                },
                                500,
                                "four"
                            );
                        },
                        500,
                        "three"
                    );
                },
                500,
                "two"
            );
        },
        500,
        "one"
    );
}

hell();


// 일반 기명함수로 콜백지옥 개선하기
function hell() {
    setTimeout(
        (name) => {
            let checkList = name;
            console.log(checkList);
            hellTwo(checkList);
        },
        500,
        "one"
    );
}

function hellTwo(checkList) {
    setTimeout(
        (name) => {
            checkList += ", " + name;
            console.log(checkList);
            hellThree(checkList);
        },
        500,
        "two"
    );
}

function hellThree(checkList) {
    setTimeout(
        (name) => {
            checkList += ", " + name;
            console.log(checkList);
            hellFour(checkList);
        },
        500,
        "three"
    );
}

function hellFour(checkList) {
    setTimeout(
        (name) => {
            checkList += ", " + name;
            console.log(checkList);
        },
        500,
        "four"
    );
}

hell();