# JavaScript

## 객체 선언 방식3

### 3. Object 생성자 방식

```javascript
const dummy = new Object();

dummy.attr = 1;

console.log(dummy);
```

### 4. 함수 방식

- 속성, 메서드를 추가하고 싶으면 prototype을 사용하면 됨.

```javascript
const Dummy = function (param) {
  this.attr = param;
};

Dummy.prototype.attr2 = 3;

const obj = new Dummy(1);

console.log(obj.attr, obj.attr2);
```
