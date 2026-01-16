# CSS

## CSS Layout - Flexbox2

### 아이템 관련 속성

#### flex-grow

플렉스 박스 내부에서 아이템이 차지하는 증가 비율을 설정

`속성값`

- 비율 (기본값 0)
  - [flexbox의 기본 개념](https://developer.mozilla.org/ko/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)

#### flex-basis

아이템의 초기 크기를 지정함.

기본값으로 지정해두는게 일반적임.

`속성값`

- 단위 (기본값 auto)

#### flex-shrink

아이템의 감소 비율을 설정함.

#### flex

flex-grow, flex-shrink, flex-basis의 단축 속성임.

실무에선 flex grow를 주로 쓰기 때문에 1개의 속성값만 주고 사용하는 경우가 많은 것 같다.

`속성값`

- flex: flex-grow flex-shrink flex-basis (0 1 auto)

#### align-self

교차축 방향의 개별 아이템 정렬 방식 설정.

`속성값`

- stretch
- flex-start
- flex-end
- center
- baseline

### [Flexbox 연습 사이트](https://flexboxfroggy.com/#ko)
