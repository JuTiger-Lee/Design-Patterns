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

/**
 * TurkeyAdapter Class 를 통해서 WildTurkey Class를 수정하지 않고 사용이 가능하다.
 * 즉 TurkeyAdapter Class를 통해 WildTurkey Class를 캡슐화를 한 것이다.
 * 이러한 클래스를 어댑터라고 부른다.
 */
class TurkeyAdapter implements Duck {
    turkey: Turkey;

    constructor(turkey: Turkey) {
        this.turkey = turkey;
    }

    quack(): void {
        this.turkey.gobble();
    }

    fly(): void {
        for(let i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    }
}

/**
 * 어댑터를 가운데에 두고, 클라이언트와 정반대에 위치하는것을 어댑티라고 부른다.
 */
class WildTurkey implements Turkey {
    gobble(): void {
        console.log("Gobble gobble");
    }

    fly(): void {
        console.log("I'm flying a short distance");
    }
}

class Main {
    constructor() {
        const duck: MallardDuck = new MallardDuck();
        const turkey: Turkey = new WildTurkey();
        const turkeyApter: TurkeyAdapter = new TurkeyAdapter(turkey);

        console.log("The Turkey says....");
        turkey.gobble();
        turkey.fly();

        console.log("\n The Duck says....");
        this.testDuck(duck);

        console.log("\n The TurkeyAdapter says....");
        this.testDuck(turkeyApter);
    }

    testDuck(duck: Duck) {
        duck.quack();
        duck.fly();
    }
}

new Main();

/**
 * 어댑터를 사용하면 클래스는 어댑티에 존재를 알지 못한다.
 * 즉 클라이언트와 어댑티과 와전히 분리가되었다.
 */