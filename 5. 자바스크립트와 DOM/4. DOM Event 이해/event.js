// DOM Event 처리방식
const pTag = document.querySelector("p");
pTag.addEventListener("click", changeText);

function changeText(event) {
    event.target.innerHTML = "문자열의 내용이 바뀌었습니다!";
}


// 이벤트 리스너
const showBtn = document.getElementById("btn"); // 아이디가 "btn"인 요소를 선택함.

showBtn.addEventListener("click", function () {
    document.getElementById("text").innerHTML = "짜잔~!! 텍스트가 나타났어요!!";
}); // 선택한 요소에 click 이벤트 리스너를 등록함.


// 이벤트 객체
const showBtn2 = document.getElementById("btn2"); // 아이디가 "btn2"인 요소를 선택함.

showBtn2.addEventListener("click", function (event) {
    console.log(event);
    document.getElementById("text2").innerHTML = "이 이벤트의 타입은 " + event.type + "입니다.";
});