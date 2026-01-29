// DOM API 1

// HTML 요소 선택
console.log(document.getElementsByTagName("div"));
console.log(document.getElementById("hi"));
console.log(document.getElementsByClassName("welcome"));
console.log(document.getElementsByClassName("welcome")[0]);
console.log(document.querySelector("div.welcome"));
console.log(document.querySelectorAll("div"));

// HTML 요소 Read, Update를 위한 속성
const divTag = document.querySelector("div");

divTag.innerText = "잘가";

divTag.innerText = "<h1>잘가</h1>";

divTag.innerHTML = "<h1>잘가</h1>";

divTag.style.color = "blue";

// 중첩된 태그에서 선택
const container = document.querySelector(".container")

console.log(container);

// 부모 태그
console.log(container.parentElement);

// 자식 태그
console.log(container.children);
console.log(container.children[0]);
console.log(container.children[0].children);
console.log(container.children[0].children[1]);

// 인접 형제 태그
console.log(container.nextElementSibling);