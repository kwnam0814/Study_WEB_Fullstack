# CSS

## CSS Background 속성

background 속성은 색상, 이미지, 크기 등 배경 스타일을 지정하는 속성, 자주 사용하는 것 중에 하나.

[background](https://developer.mozilla.org/ko/docs/Web/CSS/background) 와 관련된 속성은 아래와 같다.

- background-color

  - 요소의 배경 색상을 지정하는 속성
  - 색상코드, rgb, rgba 등으로 값을 지정할 수 있음.

- background-image

  - 요소의 배경 이미지를 지정하는 속성
    ![테스트용 사진](./css-background-image.jpg)

- background-size

  - 요소 배경 이미지의 크기를 설정
  - 원본, 크기 수정, 공간에 맞게 등.. 다양한 설정이 가능한 속성
  - 속성값
    - contain
      - 이미지가 찌그러지지 않는 한도 내에서 제일 크게 설정.
      - 남는 공간은 똑같은 사진이 반복됨
    - cover
      - 이미지가 찌그러지지 않는 한도 내에서 제일 크게 설정. 이미지의 가로세로비가 요소와 다르다면 이미지를 세로 또는 가로방향으로 잘라내어 빈 공간이 생기지 않도록 설정.
      - 너비, 높이 지정

- background-repeat

  - 배경 이미지의 반복 방법을 지정합니다.
  - 가로, 세로축에 따라서 반복하거나 반복하지 않을 수 있습니다.
  - 속성값
    - repeat: 배경영역을 채울때까지 이미지를 반복하며, 넘칠 경우 잘라냄.
    - no-repeat: 반복하지 않음.
    - space: 요소가 잘리지 않을 만큼만 반복함.
    - round: 공간이 늘어나면 이미지도 늘어나 여백을 남기지 않음.

- background-position

  - background-image를 사용하면 기본적으로 좌측 상단에 이미지가 위치됨.
  - 이 속성은 배경 이미지의 위치를 지정하는 속성
  - 속성값
    - top
    - left
    - right
    - bottom
    - center
    - x y
    - right 10px bottom 10px

- background-attachment

  - 배경 이미지를 뷰포트에 고정할 것인가, 함께 스크롤할 것인가에 대한 설정이 가능한 속성
  - 속성값
    - scroll: 배경 이미지를 요소에 고정 (기본값)
    - fixed: 배경을 뷰포트에 고정 (절대위치)
  - background 관련 속성 단축!
    ```
    backgrond: color image repeat attachment position
    ```
