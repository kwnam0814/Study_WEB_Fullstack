# JavaScript

## DOM Event 처리 방식

### 이벤트 전파

이벤트 전파 : 이벤트가 발생했을 때, 브라우저가 이벤트 리스너를 실행시킬 대상 요소를 결정하는 과정을 의미.

이벤트의 대상이 Window 객체와 같은 단일 객체라면 이벤트의 전파는 일어나지 않음.

하지만 Document 객체나 HTML 문서의 요소에서 이벤트가 일어나면 대상 요소를 결정하기 위해 이벤트의 전파가 일어남.

이벤트의 전파 방식은 크게 두 가지 방식으로 구분됨.

1. 버블링(bubbling) 전파 방식

2. 캡쳐링(capturing) 전파 방식

![](./js_event.png)

### 1. 버블링(bubbling) 전파 방식

버블링 전파 방식 : 이벤트가 발생한 요소부터 시작해서, **DOM 트리를 따라 위쪽으로 올라가며** 전파되는 방식.

이 전파 방식은 해당 요소의 리스너가 실행된 후, 그 부모 요소에 등록된 리스너가 실행되고, 또다시 그 부모 요소에 등록된 리스너가 실행됨.

이러한 이벤트의 전파는 Document 객체뿐만 아니라 가장 마지막에는 Window 객체까지 계속 이어짐.

버블링 전파 방식은 다수의 요소에 공통으로 적용되는 이벤트 리스너를 각각의 요소마다 따로 등록할 필요 없이 공통된 조상 요소에 한 번만 등록하면 처리할 수 있다는 장점을 가짐.

```html
<div id="container">
    <input type="text" id="input-tag"/>
    <button id="button-tag">확인</button>
</div>
```

```javascript
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
```

### 2. 캡쳐링(capturing) 전파 방식

캡쳐링 전파 방식 : 이벤트가 발생한 요소까지 **DOM 트리의 최상위부터 아래쪽으로 내려가며** 전파되는 방식.

이 전파 방식은 맨 먼저 Window 객체의 리스너가 실행된 후, Document 객체에 등록된 리스너가 실행되고, 또다시 그 자식 요소에 등록된 리스너가 실행됨.

이러한 이벤트의 전파는 이벤트가 발생한 요소까지 이어짐.

이 전파 방식을 사용하기 위해서는 addEventListener() 메소드의 세 번째 인수에 true를 전달하면 됨.

캡쳐링 전파 방식은 실제 이벤트의 대상이 되는 요소에 이벤트가 전달되기 전에 상위 요소에 등록된 이벤트 리스너가 이를 가로채거나 잡아낼 수 있음.

이렇게 이벤트를 걸러내어 해당 이벤트 리스너가 호출되지 않도록 하는 기법을 이벤트 취소 기법이라고 함.

```html
<div id="container">
    <input type="text" id="input-tag" />
    <button id="button-tag">확인</button>
</div>
```

```javascript
const div = document.getElementById("container");
const input = document.getElementById("input-tag");
const button = document.getElementById("button-tag");

div.addEventListener("click", function (event) {
    console.log("div에서 클릭이벤트 감지");
},
    true
);
input.addEventListener(
    "click",
    function (event) {
        console.log("input에서 클릭이벤트 감지");
    },
    true
);
button.addEventListener(
    "click",
    function (event) {
        console.log("button에서 클릭이벤트 감지");
    },
    true
);
```

### 이벤트 위임

버블링과 캡쳐는 사실 이벤트 위임을 위한 선수 지식임.

이벤트 위임을 한 문장으로 요약해보면 `하위 요소에 각각 이벤트를 붙이지 않고 상위 요소에서 하위 요소의 이벤트들을 제어하는 방식` 이다.

우선 위임을 사용하지 않을 때 예시

```html
<h1>오늘의 할 일</h1>
<ul class="itemList">
	<li>
		<input type="checkbox" id="item1">
		<label for="item1">이벤트 버블링 학습</label>
	</li>
	<li>
		<input type="checkbox" id="item2">
		<label for="item2">이벤트 캡쳐 학습</label>
	</li>
</ul>
```

```javascript
const inputs = document.querySelectorAll("input");
for (input of inputs) {
  input.addEventListener("click", function (event) {
    alert("clicked");
  });
}
```

만약 새로운 li 요소가 들어온다고 가정 해보자.

```javascript
const itemList = document.querySelector("ul.itemList");

const newItem = `
<li>
    <input type="checkbox" id="item3">
    <label for="item3">새로운 아이템</label>
</li>
`;

itemList.innerHTML = itemList.innerHTML + newItem;
```

이벤트가 작동하지 않는다. 

innerHTML 속성이 초기화 되었기 떄문이다.

이때 이벤트 위임의 개념이 문제를 해결합니다.

```javascript
const itemList = document.querySelector('.itemList');
itemList.addEventListener('click', function(event) {
	alert('clicked');
});
```