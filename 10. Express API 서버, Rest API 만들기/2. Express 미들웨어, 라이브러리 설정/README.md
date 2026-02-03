# Node & Express

## Express 서버 구축

**포스트맨 설치**

API 요청을 손쉽게 테스트 해볼 수 있는 도구이다.

[postman 설치](https://www.postman.com/downloads/)

**Express 설치**

[Express 홈페이지](https://expressjs.com/)

```bash
npm i express
```

**미들웨어 & 라이브러리 설정**

미들웨어란 클라이언트 요청과 서버의 응답이 중간에 거쳐가는 일종의 함수이다.

우리가 만든 API 서버가 정상적으로 작동할 수 있도록 몇가지 미들웨어를 설치하고 적용하겠다.

또한 개발에 사용될 유용한 라이브러리를 설치하도록 하겠다.

- express.json() : body값 파싱
- compression : HTTP 요청 압축 및 해제
- cors : 웹브라우저 cors 설정 관리 (Cross-origin resource sharing)
- crypto : 비밀번호 암호화 작업
- jsonwebtoken : jwt 토큰과 관련된 라이브러리
- mysql2 : 벡엔드와 DB를 연결할 수 있는 라이브러리

```json
"dependencies": {
    "compression": "^1.7.4",
    "cors": "^2.8.5",
    "crypto": "^1.0.1",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mysql2": "^2.3.2"
}
```

[Express 미들웨어](https://expressjs.com/en/resources/middleware.html)

```bash
npm i compression cors crypto ....
```

또는 package.json에 dependencies 내용 추가하면 됨.

또는

```bash
npm install
```