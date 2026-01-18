# CSS

## Media Query

미디어쿼리 기술을 이용하면 화면 너비별로 다른 CSS를 적용할 수 있다.

따라서 모바일, 테블릿, 데스크톱 등 다양한 디바이스에 맞춰 알맞은 레이아웃을 구성할 수 있다.

`미디어 쿼리 사용법`

```css
@media 타입 and (조건) {
	CSS
}
```

`미디어 타입 정하기`

디바이스 종류를 의미함.

- **all**
- **screen (브라우저 화면)**
- print (프린트 할 때 화면)
- speech (음성합성장치?)

`조건`

어떤 조건에 해당 미디어 쿼리를 적용할지 의미함.

- **max-width & min-width : 뷰포트 너비를 기준 최대/최소 너비**
- **orientation : 디바이스 방향 (landscape, portrait)**
- height : 뷰포트 높이
- device-width & device-height : 디바이스의 물리적 너비, 높이
- aspect-ratio : 뷰포트의 가로세로 비율

`사용 예시`

```html
<h1>안녕하세요.</h1>
<h2>저는 모바일에서는 사라져요.</h2>
```

```css
@media only all and (max-width: 400px) {
  h2 {
    display: none;
  }
}
```

`논리연산자`

논리연산자 and, not, 콤마(,)를 사용해서 다양한 미디어 쿼리 적용 조건을 만들 수 있다.

- and : 모든 조건이 참일 때
- only : 구형 브라우저의 오작동을 방지하기 위함
- not : 거짓일 때
- 콤마(,) : 공통된 CSS를 여러 조건에서 실행하고 싶을 때 사용

`브레이크 포인트`

어떤 조건에서 미디어쿼리를 적용할지 나타냄.

일반적으로 어떤 너비 사이즈에서 적용할 것인가를 고민하는 것을 의미함.

**4개의 브레이크 포인트**

- 모바일 : ~480px
- 테블릿 : 481px~767px
- 테블릿 가로 : 768px~1023px
- 데스크톱 : 1024px ~

**3개의 브레이크 포인트**

- 모바일, 테블릿 : ~768px
- 테블릿 : 769px~1023px
- 데스크톱 : 1024px ~

일반적인 기준으로 참고하면 된다.

표준은 존재하지 않지만 위 범위를 크게 벗어나지 않음.

요즘 트렌드는 항상 모바일을 먼저 고려하고 점점 확장시킨다고 보면 된다.

`미디어별 CSS 파일 분리`

```html
<link
  href="desktop.css"
  media="screen and (min-width:1024px)"
  rel="stylesheet"
/>
<link
  href="tablet.css"
  media="screen and (min-width:768px) and (max-width:1023px)"
  rel="stylesheet"
/>
<link
  href="mobile.css"
  media="screen and (min-width:320px) and (max-width:767px)"
  rel="stylesheet"
/>
```
