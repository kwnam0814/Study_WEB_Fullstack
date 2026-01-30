// DOM Event 처리 방식
// 이벤트 전파
// 버블링(bubbling) 전파 방식
const div = document.getElementById("container");
const input = document.getElementById("input-tag");
const button = document.getElementById("button-tag");

div.addEventListener("click", function (event) {
    console.log("div에서 클릭이벤트 감지");
});
input.addEventListener("click", function (event) {
    console.log("input에서 클릭이벤트 감지");
});
button.addEventListener("click", function (event) {
    console.log("button에서 클릭이벤트 감지");
});

// 캡쳐링(capturing) 전파 방식
const div2 = document.getElementById("container2");
const input2 = document.getElementById("input-tag2");
const button2 = document.getElementById("button-tag2");

div2.addEventListener("click", function (event) {
    console.log("div에서 클릭이벤트 감지");
},
    true
);
input2.addEventListener("click", function (event) {
    console.log("input에서 클릭이벤트 감지");
},
    true
);
button2.addEventListener("click", function (event) {
    console.log("button에서 클릭이벤트 감지");
},
    true
);


// 이벤트 위임
// 사용하지 않을 때
const inputs = document.querySelectorAll("input");
for (input3 of inputs) {
    input3.addEventListener("click", function (event) {
        alert("clicked");
    });
}
// 새로운 li 요소 들어옴
const itemList = document.querySelector("ul.itemList");

const newItem = `
<li>
    <input type="checkbox" id="item3">
    <label for="item3">새로운 아이템</label>
</li>
`;

itemList.innerHTML = itemList.innerHTML + newItem;