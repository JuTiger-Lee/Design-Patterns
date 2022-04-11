/* 문제 패턴 */

interface Flyable {
    fly(): void;
}

interface Quackable {
    quack(): void;
}

class Duck {
    swim() {
        console.log("swim");
    }

    display() {
        console.log("display");
    }
}

class MallardDuck extends Duck implements Flyable, Quackable {
    display(): void {
        console.log("오버라이딩 dispaly");
    }

    fly(): void {
        console.log("fly");
    }

    quack(): void {
        console.log("quack");
    }
}

class RedheadDuck extends Duck implements Flyable, Quackable {
    display(): void {
        console.log("오버라이딩 dispaly");
    }

    fly(): void {
        console.log("fly");
    }

    quack(): void {
        console.log("quack");
    }
}


class RubberDuck extends Duck implements Quackable {
    display(): void {
        console.log("오버라이딩 dispaly");
    }

    fly(): void {
        console.log("fly");
    }

    quack(): void {
        console.log("quack");
    }
}

class DecoyDuck extends Duck {
    display(): void {
        console.log("오버라이딩 dispaly");
    }
}

/*
    이유: 모든 자식클래스에서 fly, quack 같은 기능이 있어야하는것은 아니다.
    그러므로 상속을 통해서는 올바른 해결책이 아니다.

    문제점: interface를 통해서 fly, quack를 하게되면 
    똑같이 나는 코드인데도 코드 중복이 일어나게된다.
    interface는 선언부만 존재하고 구현부는 존재하지 않으니 말이다.
    즉 코드 재사용을 전혀 기대할 수 없게 된다.
    한 행동을 바꿀 때 마다 그 행동이 정의되어 있는 서로 다른
    서브클래스들을 전부 찾아서 코드를 일일이 고쳐야한다.
    *java에 interface default method가 없다는 전제하에*
*/