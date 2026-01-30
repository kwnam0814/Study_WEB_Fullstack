# Javascript

## DOM Event 처리방식

### 이벤트

이벤트란 웹 브라우저가 인식하는 사건이다.

쉽게 말하자면 유저가 웹 사이트를 사용하는동안 무언가를 클릭하고, 키보드를 누르고, 마우스를 올리는 등에 대한 것이 이벤트라고 이해하면 된다.

### 이벤트 타입

이벤트 타입(event type)은 발생한 이벤트의 종류를 나타내는 문자열로, 이벤트 명(event name)이라고도 함.

가장 많이 사용하는 키보드, 마우스, HTML DOM, Window 객체 등을 처리하는 이벤트가 폭넓게 제공되고 있다.

**자주 사용되는 이벤트**

|이름|설명|
|---|---|
|load|HTML, CSS가 모두 로드 완료되었을 때 발생|
|keydown, keyup|키를 누를 때, 키에서 손을 땟을 때 발생|
|change|변동이 있을 때 발생 (input..)|
|click|클릭 했을 때 발생|
|focus|포커스를 얻을 때 발생 (input..)|

다음은 HTML 문서의 특정 단락을 클릭하면 발생하는 이벤트를 처리하는 예제이다.

```html
<p>이 문자열을 클릭해 보세요!</p>
```

```javascript
const pTag = document.querySelector("p");
pTag.addEventListener("click", changeText);

function changeText(event) {
    event.target.innerHTML = "문자열의 내용이 바뀌었습니다!";
}
```

### 이벤트 리스너 등록

작성된 이벤트 리스너는 먼저 해당 객체나 요소에 등록되어야만 호출될 수 있다.

객체나 요소에 이벤트 리스너를 등록하는 방법은 다음과 같다.

1. 이벤트의 대상이 되는 객체나 요소에 프로퍼티로 등록하는 방법

```html
// HTML 태그에 속성으로 등록
<p onclick="alert('문자열을 클릭했어요!')">이 문자열을 클릭해 보세요!</p>
```

2. 객체나 요소의 메소드에 이벤트 리스너를 전달하는 방법 (권장 방식)

```javascript
element.addEventListener(이벤트 타입, 이벤트 핸들러, 이벤트 전파방식)
```

1. 이벤트 타입 : 이벤트 리스너를 등록할 이벤트 타입을 문자열로 전달.

2. 이벤트 핸들러 : 지정된 이벤트가 발생했을 때 실행할 함수

3. 이벤트 전파 방식 : false면 버블링(bubbling) 방식으로, true면 캡처링(capturing) 방식으로 이벤트를 전파. 기본값은 false.

```html
<button id="btn">클릭</button>
<p id="text"></p>
```

```javascript
const showBtn = document.getElementById("btn"); // 아이디가 "btn"인 요소를 선택함.

showBtn.addEventListener("click", function () {
    document.getElementById("text").innerHTML = "짜잔~!! 텍스트가 나타났어요!!";
      }); // 선택한 요소에 click 이벤트 리스너를 등록함.
```

### 이벤트 핸들러 호출

이벤트 리스너가 등록되고 해당 객체나 요소에 지정된 타입의 이벤트가 발생하면, 브라우저는 자동으로 등록된 이벤트 핸들러를 호출함.

이때 이벤트 핸들러는 인수로 `이벤트 객체`(event object) 를 전달받으며, 식별자를 통해 전달받은 이벤트 객체를 참조함.

### 이벤트 객체

이벤트 객체(event object) : 특정 타입의 이벤트와 관련이 있는 객체이다.

이벤트 객체는 해당 타입의 이벤트에 대한 상세 정보를 저장하고 있다.

모든 이벤트 객체는 이벤트의 타입을 나타내는 type 프로퍼티와 이벤트의 대상을 나타내는 target 프로퍼티 등.. 다양한 속성을 가진다.

이러한 이벤트 객체는 이벤트 핸들러가 호출될 때 인수로 전달된다.

```javascript
const showBtn = document.getElementById("btn"); // 아이디가 "btn"인 요소를 선택함.

      showBtn.addEventListener("click", function (event) {
        console.log(event);
        document.getElementById("text").innerHTML =
          "이 이벤트의 타입은 " + event.type + "입니다.";
      });
```