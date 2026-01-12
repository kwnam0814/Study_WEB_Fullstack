# CSS

## CSS 배경지식

- CSS는 HTML과 마찬가지로 문법이나 구조는 굉장히 간단하지만 언제나 그렇듯 활용이 어렵다. CSS의 기본부터 심화 내용까지 익힌 다음, HTML, CSS를 활용해 퍼블리싱해보도록 하자.

- CSS(Cascading Style Sheets)란, 한마디로 HTML을 꾸미는 기술이다.

- **CSS의 핵심은 HTML의 어떤 부분을 어떻게 꾸밀지 정하는 것이다.**

### 선택자(Selector)

- HTML 문서에 존재하는 어떠한 부분을 선택하기 위해 존재하는 개념.

![CSS 선택자(Selector)](./css_선택자.png)

### HTML - CSS 연결

1. 대상 태그 내부 style 속성 사용

```html
<h1 style="color:red">빨강</h1>
```

2. head 태그 내부 style 태그 선언

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>빨간맛</h1>
  </body>
</html>
```

3. **파일 분리**

```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```

### 우선순위

- CSS(Cascading Style Sheets)에서 cascade는 '계단식'이라는 의미를 가지고 있음.
- 동일한 요소에 서로 다른 CSS를 적용했을 때 충돌이 일어나게 됨.
- CSS는 계단식이라는 의미에 맞게 기본적으로 **나중에 선언된 스타일로 재정의**함.

- 선택자별로 우선순위 역시 존재함.
  - `id > class > tag` : id라는 속성이 가장 우선됨!

### 기본 셋팅

- 브라우저마다 기본 스타일이 지정되어 있음.
- 같은 태그라도 브라우저마다 조금씩 다르게 보일 수 있다는 점을 최소화 시키기 위해 기본적으로 아래와 같은 CSS 속성을 설정 하고 시작함.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}
```
