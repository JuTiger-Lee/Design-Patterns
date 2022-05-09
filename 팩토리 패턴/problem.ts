/* 문제 패턴 */

interface Pizza {
    prepare(): void;
    bake(): void;
    cut(): void;
    box(): void;
}

class PizaStore {
    constructor() {
    }

    orderPizza(type: string): Pizza {
        let pizza: Pizza;

        /**
         * 만약 조개 피자, 야채 피자가 추가 된다면
         * 아래 코드는 계속해서 바뀌게 된다.
         * 즉 코드 변겨에 대해 닫혀있지 않는다.
         * -이 부분 코드는 계속해서 바뀌고 피자 종류가 증가할 때 마다 코드를 고쳐야 한다.-
         */
        if(type === 'cheese') {
            pizza = new CheesePizza();
        } else if(type === 'greek') {
            pizza = new GreekPizza();
        } else if(type === 'pepperoni') {
            pizza = new PepperoniPizza();
        }

        /**
         * 이 부분은 바뀌지 않는다.
         */
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

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