// DOM API

// 태그 추가

// div.inner를 선택
let inner = document.querySelector(".inner");

// <div>태그 생성
let element = document.createElement("div");

// text 노드 hello 생성
let hello = document.createTextNode("hello");

// <div class="item">hello</div>로 만들기
element.appendChild(hello);
element.setAttribute("class", "item");

// div.inner에 element 추가
inner.appendChild(element);

// ES6 템플릿 리터럴
let name = "홍길동"
console.log(`안녕하세요 제 이름은 ${name}입니다.`);


const productsData = { title: "감자칩", weight: 300 };

// div#app 선택
const app = document.querySelector("#app");
const element2 = `<div class="item">상품명 : ${productsData.title}, 무게 : ${productsData.weight}</div>`
app.innerHTML = element2;

// 중간 실습
const productsData2 = [
    { title: "감자칩", weight: 300 },
    { title: "칙촉", weight: 100 },
    { title: "고구마칩", weight: 300 },
    { title: "오잉", weight: 50 },
];

// div#app2 선택
const app2 = document.querySelector("#app2");

let result = "";

for (item of productsData2) {
    let element3 = `<div class="item">상품명 : ${item.title}, 무게 : ${item.weight}</div>`
    result = result + element3
}

app2.innerHTML = result;