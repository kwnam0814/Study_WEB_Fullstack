# CSS

## CSS Layout - display

- 블록 엘리먼트

  - 언제나 줄바꿈
  - 종류
    ```
    <address><article><aside><blockquote><canvas><dd><div><dl><dt><fieldset><figcaption><figure><footer><form><h1>-<h6><header><hr><li><main><nav><noscript><ol><p><pre><section><table><tfoot><ul><video>
    ```

- 인라인 엘리먼트
  - 공간이 충분하다면 줄바꿈을 하지 않고 옆에 표시
  - 종류
    ```
    <a><abbr><acronym><b><bdo><big><br><button><cite><code><dfn><em><i><img><input><kbd><label><map><object><output><q><samp><script><select><small><span><strong><sub><sup><textarea><time><tt>< var >
    ```

### display

모든 HTML 태그는 기본적으로 블록 또는 인라인 속성을 가지고 있다.

display 속성을 이용하면 block, inline을 설정할 수 있다.

- block

  - 기본값이 `width: 100%, height: auto` → 언제나 줄바꿈을 하면서 등장!
  - 박스 형태로 width, height, margin, padding 등 속성을 설정할 수 있다.

- inline

  - 기본적으로 컨텐츠 크기만큼만 너비를 차지함.
  - 박스 형태가 아니기 때문에 블록 엘리먼트와 다르게 width, height, margin, padding 등 속성을 설정할 수 없다.

- inline-block

  - block, inline의 특성을 모두 가지고 있는 속성값.
  - inline처럼 **한 라인에 표시**가 되고, block처럼 **박스 형태**로 width, height, margin, padding 지정이 가능함.

- none
  - 화면에 표시하지 않게 하는 속성
  - 차지하는 공간까지 사라지게 만듦.
  - 비슷한 속성으로 `visibility: hidden` 이 있다. 하지만 이 속성은 해당 요소가 차지하는 공간 자체는 남겨둔다는 차이가 있다.
