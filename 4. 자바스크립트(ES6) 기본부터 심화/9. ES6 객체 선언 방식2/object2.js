// 객체 선언 방식

// 클래스 방식
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
console.log(myCar.wheels);
console.log(myCar.say())

// 클래스 상속
class SmallCar extends Car {
  constructor() {
    super(); // 부모 클래스에 정의되어 있는 속성값을 그대로 가져옴
    this.doors = 2;
  }
}

const mySmallCar = new SmallCar();

console.log(mySmallCar);

console.log(mySmallCar.say());

// 클래스 방식 예제

// 1. 비행기 클래스(Aircraft)와 전투기 클래스(FighterAircraft)를 생성.
// 2. 전투기 클래스는 비행기 클래스를 상속함.
// 3. 비행기 클래스는 이륙여부를 확인하는 속성 (isTakeOff)과 이륙 메서드(takeOff)를 가지고 있다.
// 4. 전투기 클래스는 미사일 발사(fire) 메서드를 가지고 있다. 단, 이륙을 한 후 발사할 수 있다.
// 5. 전투기 객체를 생성하고 미사일 발사를 할 수 있도록 코드를 작성해보자.
class Aircraft {
    constructor () {
        this.isTakeOff = false;
    }

    takeOff () {
        this.isTakeOff = true;
        console.log("이륙 완료!");
        return true;
    }
}

class FighterAircraft extends Aircraft {
    fire () {
        if (!this.isTakeOff) {
            console.log("이륙 후 발사할 수 있습니다!");
            return false;
        }

        console.log("미사일을 발사했습니다.");
    }
}

const myCraft = new FighterAircraft();
myCraft.fire();


class Aircraft2 {
    constructor () {
        this.isTakeOff = false;
    }

    takeOff () {
        this.isTakeOff = true;
        console.log("이륙 완료!");
        return true;
    }
}

class FighterAircraft2 extends Aircraft2 {
    fire () {
        if (!this.isTakeOff) {
            console.log("이륙 후 발사할 수 있습니다!");
            return false;
        }

        console.log("미사일을 발사했습니다.");
    }
}

const myCraft2 = new FighterAircraft2();
myCraft2.takeOff();
myCraft2.fire();