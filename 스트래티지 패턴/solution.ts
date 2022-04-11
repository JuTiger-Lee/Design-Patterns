/* 스트래티지 패턴 */

/**
 * 이런식으로 디자인하면 나는 행동과 꽥꽥거리는 행동을 재사용이 가능하다.
 * 그리고 기존 행동 클래스를 수정하거나 날아다니는 행동을 사용하는
 * Duck 클래스를 전혀 건드리지 않고도 새로운 행동을 추가할 수 있다.
 */

/**
 * 날 수 있는 클래스에서는 무조건 FlyBehavior 인터페이슬 구현 한다.
 * 날 수 있는 클래스를 새로 만들 때는 무조건 fly 메서드를 구현해야 한다.
 */
interface FlyBehavior {
    fly(): void;
}

class FlyWithWings implements FlyBehavior{
    fly(): void {
        console.log("FLY!");
    }
}

class FlyNoWay implements FlyBehavior {
    fly(): void {
        console.log("don't fly");
    }
}

class FlyRocketPowered implements FlyBehavior {
    fly(): void {
        console.log("로켓 추진!!!!");
    }
}

/**
 * 꽥꽥거리는 것과 관련된 행동에서도 마찬가지
 * 반드시 구현해야하만하는 quack 메소드가 들어있는 인터페이스가 있다.
 */
interface QuackBehavior {
    quack(): void;
}

class Quack implements QuackBehavior {
    quack(): void {
        console.log('quack')
    }
}

class MuteQuack implements QuackBehavior {
    quack(): void {
        console.log("조용")
    }
}

class Squeak implements QuackBehavior {
    quack(): void {
        console.log("삑!!!");
    }
}

abstract class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    constructor() {}

    abstract display(): void;

    // 행동클래스에 위임 
    performFly() { 
        this.flyBehavior.fly();
    }

    // 행동클래스에 위임 
    performQuack() {
        this.quackBehavior.quack();
    }

    /* 
     오리의 행동을 즉석에서 바꾸고 싶으면 
     언제든지 setFlyBehavior, setQuackBehavior메서드를 호출하면된다.
    */
    setFlyBehavior(fb: FlyBehavior) {
        this.flyBehavior = fb;
    }

    setQuackBehavior(qb: QuackBehavior) {
        this.quackBehavior = qb;
    }

    swim() {
        console.log("모든 오리는 물에 뜹니다. 가짜 오리도 뜨죠");
    }
}

class MallardDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = new FlyWithWings();
        this.quackBehavior = new Quack();
    }

    display(): void {
        console.log("천둥 오리");
    }
}

class ModelDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }

    display(): void {
        console.log('모형 오리!');
    }
}

class Main {
    constructor() {
        const mallard: Duck = new MallardDuck();

        mallard.performFly();
        mallard.performQuack();

        const model: Duck = new ModelDuck();
        
        // ModelDuck에서 생성자에 상속 받은 flyBehavior를 FlyNoWay 인스턴스로 설정했기에
        // fly 메서드 실행시 즉 FlyNoWay 생성자의 fly 메서드가 실행! 즉 못난다.
        model.performFly();
        model.setFlyBehavior(new FlyRocketPowered());
        // setFlyBehavior 메서드로 FlyRocketPowered 인스턴스로 교체!
        // fly 메서드 실행시 FlyRocketPowered fly 메서드 실행! 즉 로켓추진!
        model.performFly();
    }
}

new Main();