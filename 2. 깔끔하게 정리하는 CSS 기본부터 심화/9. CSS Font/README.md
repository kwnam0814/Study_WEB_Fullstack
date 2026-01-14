# CSS

## CSS Font

웹은 정보를 전달하는 텍스트가 꼭 포함되기 때문에 관련 속성을 파악하는 것이 중요하다.

- font-size

  - 폰트의 크기를 지정하는 속성
  - 속성값
    - rem, px, em, %
    - xx-small, x-small, small
    - medium
    - large, x-large, xx-large

- font-family

  - 글꼴을 지정하는 속성

  - 설정한 글꼴이 없는 경우를 대비하여 마직막은 generic-family로 정해두는 것이 좋다.

  - generic family

    - serif : 삐침 있는 명조계열의 글꼴
    - sans-serif : 삐침 없고 굵기가 일정한 고딕계열의 글꼴
    - monospace : 글자 폭과 간격이 일정한 글꼴
    - cursive : 손으로 쓴 것 같은 필기계열의 글꼴
    - fantasy : 화려한 글꼴

  - 웹폰트
    - 웹 폰트를 사용하면 사용자 PC 환경에 상관 없이 동일한 글꼴을 제공할 수 있다.
      - [구글 웹 폰트](https://fonts.google.com/)
      - [눈누](https://noonnu.cc/)
      - awesome font icon

- font-weight

  - 글자의 굵기를 설정하는 속성
  - 속성값
    - 100, 200, ... 900
    - normal = 400
    - bold = 700
    - bolder: 더 굵게
    - lighter: 더 얇게

- line-height

  - 라인 높이를 설정하는 속성
  - 텍스트 줄 간격 조절
  - 일반적으로 단위 없이 숫자로 표현
  - 이는 폰트 사이즈의 몇 배로 라인 높이를 설정할 것인가에 대한 값으로, 1 ~ 2 사이의 값을 주로 사용. (기본값은 1.2)
  - px, %, em 등 단위 사용도 가능

- text-align

  - 글자의 수평 방향 정렬 방식을 설정하는 속성
  - 속성값
    - left
    - right
    - center
    - justify

- text-decoration

  - 글자에 선을 넣는 속성
  - 속성값
    - line-throght: 취소선
    - overline: 글자 윗줄
    - underline: 밑줄

- text-overflow
  - 문자열이 지정된 공간을 벗어나는 경우 어떻게 처리할 것인가에 관한 속성.
  - 단, 이 속성은 적용되기 위한 사전 조건이 있다.
    1. **너비(width)**가 설정되어 있어야 함.
    2. **overflow: hidden** 설정 (컨텐츠가 블록을 가릴때 처리 방식에 관한 설정)
    3. **white-space: nowrap** 설정 (줄바꿈, 공백을 어떻게 처리할 것인가에 관한 설정)
  - 속성값
    - clip: 자르기
    - ellipsis: 점점점(...)으로 표시
