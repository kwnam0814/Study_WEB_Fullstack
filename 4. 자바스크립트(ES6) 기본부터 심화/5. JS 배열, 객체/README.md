# JavaScript

## 변수와 자료형

### 컨테이너 자료형 (배열, 객체)

개발을 하다보면 숫자, 문자를 한번에 모아서 관리할 수 있는 컬렉션이 필요하다.

유저 아이디 목록, 상품 목록 등..

이럴 때 사용하는 자료형이 바로 컨테이너 자료형이다.

자바스크립트에서 만나볼 컨테이너 자료는 배열과 객체이다.

`CRUD를 눈 여겨 볼 것`

개발자들 사이에선 CRUD라는 용어가 있다.

Create 생성

Read 조회

Update 수정

Delete 삭제

조금 과장하자면 프로그래밍에서 하는 일은 모두 CRUD를 위한 것이라고도 볼 수 있을 것 같다.

#### 배열

**배열 선언 (Create)**

```javascript
let arr = [1, 2, 3, 4];
```

**배열 조회 (Read)**

```javascript
arr[0];
arr.slice(시작 인덱스, 끝 인덱스); // 시작 인덱스 이상, 끝 인덱스 미만
```

**배열 수정 (Update)**

```javascript
arr[0] = 9;
```

**배열 삭제 (Delete)**

```javascript
arr.splice(인덱스, 갯수); // indexOf
```

```javascript
console.log(arr.indexOf(9)); // 배열에서 숫자 9가 몇 번째 인덱스에 있니?
```

`자주 쓰는 length`

```javascript
console.log(arr.length);
```

`ES6 구조분해 할당`

```javascript
const arr = [5, 6, 7];
const [first, second, third] = arr;
console.log(first, second, third);
```

#### 객체

이 자료형은 key와 value로 이루어진 자료형이다.

컨테이너가 배열만 있다면 유저 아이디, 비밀번호를 서로 각기 다른 배열에 순서를 맞춰서 저장해야하는 번거로움이 있다.

하지만 객체를 사용하면 더욱 효율적으로 작업할 수 있다.

**객체 선언 (Create)**

```javascript
let userInfo = {
  email: "dummy@dummy.com",
  password: "a1234",
};
```

**객체 조회 (Read)**

```javascript
userInfo.email;
userInfo["email"];
```

**객체 수정 (Update)**

```javascript
userInfo.email = "update";
// userInfo['email'] = "update";
```

**객체 삭제 (Delete)**

```javascript
delete userInfo.email;
// delete userInfo['email']
```

### 객체 연습문제

1. title, date, users 세 가지 키 값을 가지는 객체를 선언
2. title에는 "코하전자"
3. date에는 "2020-10-10"
4. users에는 빈 배열을 선언
5. users 속성에 객체로 `email: "dummy@dummy.com", password: "a123"` 을 추가

**★★★ push ★★★** : 배열에 새로운 요소 추가

```javascript
corpInfo.users.push({ email: "dummy@dummy.com", password: "a123" });
```
