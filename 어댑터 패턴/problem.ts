interface Duck {
    quack(): void;
    fly(): void;
}

interface Turkey {
    gobble(): void;
    fly(): void;
}

class MallardDuck implements Duck {
    quack(): void {
        console.log("Quack");
    }

    fly(): void {
        console.log("I'm Flying");
    }
}

class WildTurkey implements Turkey {
    gobble(): void {
        console.log("Gobble gobble");
    }

    fly(): void {
        console.log("I'm flying a short distance");
    }
}

/**
 * 지금 현재 서로 인터페이스가 다르기 때문에 두개의 class 중 하나를 수정해서 동일하게 바꿔줘야한다.
 * 하지만 두 class가 다른 class에 의존성이 걸려있거나하면 수정이 불가능한 상황이고 바꾸는데도 많이 비용이 든다.
 */
