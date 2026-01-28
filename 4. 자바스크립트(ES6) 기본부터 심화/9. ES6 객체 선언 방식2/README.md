# JavaScript

## 객체 선언 방식2

### 2. 클래스 방식

다른 객체지향 기반 언어에서는 클래스 기반으로 표현한다.

ES6부터는 자바스크립트도 클래스 방식을 사용할 수 있으며 권장되는 방식이다.

객체 리터럴 방식과 함께 두가지 방식을 모두 익혀두는 것이 좋다.

`기본적 클래스 선언, 객체 생성 및 속성 접근`

```javascript
class Car {
  constructor() {
    this.wheels = 4;
  }

  say() {
    console.log(1);
  }
}

const myCar = new Car();

console.log(myCar);
```

`클래스 상속`

- extentds를 사용하여 상속할 수 있다.
- 서브 클래스에서는 super() 메서드를 사용해서 부모 생성자에서 정의된 속성을 가져올 수 있다.

```javascript
class SmallCar extends Car {
  constructor() {
    super(); // 부모 클래스에 정의되어 있는 속성값을 그대로 가져옴
    this.doors = 2;
  }
}

const mySmallCar = new SmallCar();

console.log(mySmallCar);
```

**클래스 방식 예제**

1. 비행기 클래스(Aircraft)와 전투기 클래스(FighterAircraft)를 생성.
2. 전투기 클래스는 비행기 클래스를 상속함.
3. 비행기 클래스는 이륙여부를 확인하는 속성 (isTakeOff)과 이륙 메서드(takeOff)를 가지고 있다.
4. 전투기 클래스는 미사일 발사(fire) 메서드를 가지고 있다. 단, 이륙을 한 후 발사할 수 있다.
5. 전투기 객체를 생성하고 미사일 발사를 할 수 있도록 코드를 작성해보자.
