/** 팩토리 패턴 */

/**
 * 객체 생성 부분을 캡슐화 한다.
 * 간단한 팩토리로 문제를 해결한다.
 */

interface Pizza {
    prepare(): void;
    bake(): void;
    cut(): void;
    box(): void;
}

class PizzaStore {
    private factory: SimplePizzaFactory;

    constructor(factory: SimplePizzaFactory) {
        this.factory = factory;
    }

    orderPiza(type: string): Pizza {
        let pizza: Pizza;

        pizza = this.factory.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    } 
}

/**
 * SimplePizzaFactory class가 하는 일은
 * 간단하게 클라이언트를 위해서 피자 생성만 한다.
 */
class SimplePizzaFactory {
    // 클라이언트에서 새로운 객체의 인스턴스를 만들 때 호출하는 메서드
    // 종종 static 메서드로 선언하는 경우가 있음
    createPizza(type: string): Pizza {
        let pizza: Pizza;

        if(type === 'cheese') {
            pizza = new CheesePizza();
        } else if(type === 'greek') {
            pizza = new GreekPizza();
        } else if(type === 'pepperoni') {
            pizza = new PepperoniPizza();
        }

        return pizza;
    }
}

class CheesePizza implements Pizza {
    prepare(): void {
        console.log("prepare");
    }

    bake(): void {
        console.log("bake");
    }

    cut(): void {
        console.log("cut");
    }

    box(): void {
        console.log("box");
    }
}

class GreekPizza implements Pizza {
    prepare(): void {
        console.log("prepare");
    }

    bake(): void {
        console.log("bake");
    }

    cut(): void {
        console.log("cut");
    }

    box(): void {
        console.log("box");
    }
}

class PepperoniPizza implements Pizza {
    prepare(): void {
        console.log("prepare");
    }

    bake(): void {
        console.log("bake");
    }

    cut(): void {
        console.log("cut");
    }

    box(): void {
        console.log("box");
    }
}

/**
 * SimplePizzaFactory를 그냥 다른 객체로 넘겨버린거라고 생각할 수 있다.
 * 하지만 SimplePizzaFactory를 다른 client에서 많이 사용을 한다는 점에서 생각하면
 * 충분하게 장점이 있다.
 */

/**
 * 간단한 팩토리 디자인 패턴은 디자인 패턴이라고 할 수는 없다. 
 * 디자인 패터보다는 관용구에 가깝다고 할 수 있다.
 */