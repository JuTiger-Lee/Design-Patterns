abstract class Beverage {
    public description: string;

    getDescription(): string {
        return this.description;
    }

    // getDescription은 이미 구현되어있지만
    // cost는 서브클래스에서 구현해야 함
    abstract cost(): number
}

abstract class CondimentDecorator extends Beverage {
    /**
     * 모든 첨가물에 데코레이터에서 getDescription 메서드를 새로 구현하도록 만들 계획
     * 그래서 추상메서드를 선언
     */
    abstract getDescription(): string;
}

class Espresso extends Beverage {
    constructor() {
        super();
        this.description = "에소프레소";
    }

    cost(): number {
        return 1.99;
    }
}

class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = "하우스 블렌드 커피";
    }

    cost(): number {
        return 0.89;
    }
}

class DarkRost extends Beverage {
    constructor() {
        super();
        this.description = "다크 로스트 커피";
    }

    cost(): number {
        return 1.22;
    }
}

// 데코레이터 class
class Mocah extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()}, 모카`;
    }

    cost(): number {
        return 0.20 + this.beverage.cost();
    }
}

class Whip extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()}, 휩`;
    }

    cost(): number {
        return 0.30 + this.beverage.cost();
    }
}

class Soy extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()}, 소이`;
    }

    cost(): number {
        return 0.40 + this.beverage.cost();
    }
}

class Main {
    constructor() {
        const beverage: Beverage = new Espresso();
        console.log(`${beverage.getDescription()}$${beverage.cost()}`);

        let beverage2: Beverage = new DarkRost();
        beverage2 = new Mocah(beverage2);
        beverage2 = new Mocah(beverage2);
        beverage2 = new Whip(beverage2);
        console.log(`${beverage2.getDescription()}$${beverage2.cost()}`);

        let beverage3: Beverage = new HouseBlend();
        beverage3 = new Soy(beverage3);
        beverage3 = new Mocah(beverage3);
        beverage3 = new Whip(beverage3);
        console.log(`${beverage3.getDescription()}$${beverage3.cost()}`);
    }
}

new Main();