# CSS

## CSS Layout - Position

position 속성은 웹의 레이아웃을 설정하는데 가장 유용하게 사용되는 속성 중 하나이다.

- 속성값

  - static : 기본값으로 고정을 의미
  - relative : 기본 위치에 상대적으로 이동
  - **absolute** : relative 속성을 가진 가장 가까운 부모 태그 기준으로 이동
  - fixed : 뷰포트(화면)를 기준으로 이동
  - sticky : 스크롤시에도 static 위치 고정

  static 이외 속성값에서 공통적으로 top, left, right, bottom 값을 이용해서 위치를 조정함.

- z-index
  - 요소가 겹쳐질 때 z축 방향의 가중치를 설정하는 속성
  - 숫자가 클수록 앞으로 보여짐
  - [쌓임 맥락](https://developer.mozilla.org/ko/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
