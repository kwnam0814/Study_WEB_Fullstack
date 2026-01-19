# CSS

## CSS 상속

CSS에서 상속이란 자식태그가 부모태그의 설정된 값을 물려받는 것을 의미함.

속성에 따라 상속하는 것이 있고 그렇지 않은 것도 존재함.

- 상속하는 것 : 폰트와 관련된 속성 → 글꼴, 색상, 정렬 등..
  - font-family
  - font-size
  - color
  - font-weight
  - line-height
  - text-align... etc

- 상속하지 않는 것 : 박스모델과 관련된 속성 → 상속 시 레이아웃에 영향을 줄 가능성이 큼
  - width, height
  - margin, padding
  - border ... etc

- 강제 상속: 상속하지 않는 속성을 강제로 상속하고 싶을 때 **inherit** 속성값을 이용하면 됨.

`CSS 우선순위`

id > class = attribute > tag > inherit(상속)

- 최상위 우선순위 `!important`
