# HTML

## HTML 코드 구조 파악

![HTML 구조](./HTML_구조.png)

### HTML 코드 기본 구조

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

### 상세 파악

#### doctype

```html
<!DOCTYPE html>
```

- 웹브라우저에게 해당 문서는 HTML 문서라는 것을 명시하기 위한 태그.

#### html

```html
<html lang="en"></html>
```

- HTML 문서의 범위를 알려주는 태그.
- 시작과 끝에 태그를 열고 닫아주면 됨.

##### 속성

- lang: 문서가 어떤 언어로 작성되어있는지 명시하는 용도. ex) ko, en 등..

#### head

```html
<head></head>
```

- 문서에 대한 메타데이터를 넣는 태그.
- head 태그 내부에는 주로 meta, link, title 태그 등이 들어가게 됨.

#### body

```html
<body></body>
```

- 실제 화면에 표시되는 내용을 넣는 태그.

#### meta

```html
<meta 속성="값" />
```

- 메타데이터를 설정하기 위한 태그.

##### meta 태그 속성

- charset: 문자 인코딩 방식 설정 ex) utf-8..
- name: 메타정보 이름 ex) author, description, keyword, viewport..

##### 알아둬야하는 meta 태그 name 속성값

1. author: 문서 작성자 또는 회사명

```html
<meta name="author" content="John Doe" />
```

2. description: 서비스에 대한 설명

```html
<meta name="description" content="Free Web tutorials" />
```

3. keywords: 검색엔진에서 잡을 만한 키워드

```html
<meta name="keywords" content="HTML, CSS, JavaScript" />
```

4. viewport: 보여지는 화면 영역 설정 → 다양한 디바이스를 고려한 반응형과 관련

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

#### link

```html
<link rel="icon" href="favicon.ico" />
<link rel="stylesheet" href="style.css" />
```

- 주로 CSS, 파비콘 파일을 가져오기 위해서 사용하는 태그.

##### 속성

- rel: 현재 html 문서와 관계를 정의
- href: 데이터 경로 표시

#### title

```html
<titie>Document</title>
```

- 문서 제목을 설정하는 태그.

#### script

```html
<script src="index.js"></script>
```

- 자바스크립트 파일을 연결하기 위해 사용하는 태그.

##### 속성

- src: 자바스크립트 파일 경로 표시
