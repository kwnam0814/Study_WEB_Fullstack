# Node & Express

## Node, NPM 이해

우리는 이전까지 자바스크립트를 실행시키기 위해서

HTML 파일에 JS파일을 연결하고, 웹브라우저를 통해 동작을 확인하는 과정을 거쳤다.

하지만 노드를 사용하면 이런 번거로운 과정이 없어지게 된다.

노드는 자바스크립트를 실행할 수 있는 도구이다. (런타임)

노드가 등장하기 전에는 웹 브라우저에서만 자바스크립트를 실행할 수 있었지만

노드가 등장한 후에는 자바스크립트로도 서버, PC 앱, 모바일 앱 등 활용 범위가 늘어나게 된 것이다.

### Node 환경 구축

[Node 설치](https://nodejs.org/ko/download/)

index.js

```javascript
console.log(1);

// 터미널에 node index.js를 입력해보세요.
// 웹브라우저 없이도 자바스크립트를 실행할 수 있다. 이게 바로 노드이다.
```

### Node의 모듈시스템

### **노드의 모듈시스템**

이전에 웹브라우저에서 자바스크립트를 사용할 때는 script 태그로 앞서 선언된 script 태그에 있는 함수, 변수 등을 사용할 수 있었다.

이와 비슷하게 노드에서는 다른 파일에 있는 함수나 변수를 가져와 쓸 수 있는 시스템이 존재한다.

파일이 '기능이 모여 있는 **모듈**이다'라고 이해하면 된다.

노드에서 모듈 간의 기능을 끌어와서 사용할 수 있는데 이와 관련된 문법이 바로 `exports, require` 이다.

exports와 module.exports는 모두 동일한 빈 객체 `{ }` 를 가리킨다.

hello.js

```javascript
exports.dummy = 1;

// 또는

const dummy = 1;

module.exports = {
	dummy: dummy
};
```

world.js

```javascript
const { dummy } = require("./hello");

console.log(dummy);
```