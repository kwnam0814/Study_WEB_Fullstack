# JavaScript

## DOM API

### HTML 요소 선택방법

|메서드|설명|
|---|---|
|document.getElementsByTagName(태그이름)|해당 태그 이름의 요소를 모두 선택함. (배열)|
|document.getElementById(아이디)|해당 아이디의 요소를 선택함.|
|document.getElementsByClassName(클래스이름)|해당 클래스에 속한 요소를 모두 선택함. (배열)|
|document.querySelector(선택자)|해당 선택자로 선택되는 요소를 선택함.|
|document.querySelectorAll(선택자)|해당 선택자로 선택되는 요소를 모두 선택함. (배열)|

### HTML 요소 Read, Update를 위한 속성

|이름|설명|
|---|---|
|innerText = "content"|요소 내부 컨텐츠 조회, 수정|
|innerHTML = "html"|요소 내부 엘리먼트 전체 조회, 수정|
|style.property = "css"|요소 스타일 조회, 수정|

### 중첩된 태그에서 선택

|이름|설명|
|---|---|
|parentElement|부모 태그|
|children|자식 태그 리스트|
|nextElementSibling|인접 형제 태그|