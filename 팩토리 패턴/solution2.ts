/**
 * 각 지역마다 특성에 맞는 피자를 만들어야한다.
 * 예를 들어 뉴욕 스타일은 빵은 얇고 소스를 주로 맛을 내고 치즈는 적게 들어간다.
 * 하지만 시카고 피자는 두꺼운 빵에 풍부한 소스, 치즈가 들어간다. 
 * 
 * 시카고, 뉴욕 마다의 팩토리를 만드는게 아닌 
 * 시카고, 뉴욕 마다의 피자집을 만드는 방식 즉 각 스토어 마다 각 팩토리를 만들어서 하나의 프레임워크로 가는거다.
 */

abstract class Pizza {
    name: string;
    dough: string;
    sauce: string;
    toppings = [];

    prepare() {
        console.log(`Preparing ${this.name}`);
        console.log(`Tossing dough...`);
        console.log(`Adding sauce...`);
        console.log(`Adding toppings: `);

        for(let i = 0; i < this.toppings.length; i++) {
            console.log(`  ${this.toppings[i]}`);
        }
    }

    bake(): void {
        console.log("Bake for 25 minutes at 350");
    }

    cut(): void {
        console.log("Cutting the pizza into diagonal slices");
    }

    box(): void {
        console.log("Place pizza in official PizzaStore box");
    }

    getName(): string {
        return this.name;
    }
}

abstract class PizzaStore {
    /**
     * 각 분점마다 달라질 수 있는것은 피자의 스타일 뿐이다.
     * 피자를 자르거나 포장하는거는 다 똑같다.
     * 이 메서드는 실제로 어떤 서브클래스에서 코드를 실행시키고 피자를 만드는지 알 수가 없다.
     */
    orderPiza(type: string): Pizza {
        let pizza: Pizza;

        pizza = this.createPizaa(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    } 

    /**
     * 팩토리 객체 대신 이 메소드를 사용 한다.
     * 피자 스타일이 달라지는것은 
     * 즉 피자 인스터를 만드는일은 "팩토리" 역할을 하는 "메소드"에서 맡아 처리를 한다.
     */
    abstract createPizaa(type: string);
}

/**
 * 서브클래스 가운데 어느 구상 클래스 객체의 인스터를 만들어서 리턴할지는
 * 전적으로 PizzaStore의 서브클래스에 의해 결정 된다.
 */
class NYPizzaStore extends PizzaStore{
    createPizaa(type: string) {
        if(type === "cheese") {
            return new NYStyleChessePizaa();
        } else if(type === "veggie") {

        } else if(type === "clam") {

        } else if(type === "pepperoni") {

        } else return null;
    }
}

class NYStyleChessePizaa extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Sauce and Cheese Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Marinara Sauce";

        this.toppings.push("Grated Regginao Cheese");
    }
}

class ChicagoPizzaStore extends PizzaStore {
    createPizaa(type: string) {
        if(type === "cheese") {
            return new ChicagoStyleChessePizza();
        } else if(type === "veggie") {

        } else if(type === "clam") {

        } else if(type === "pepperoni") {

        } else return null;
    }
}

class ChicagoStyleChessePizza extends Pizza {
    constructor() {
        super();
        this.name = "Chicago Style Deep Dish Cheese Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";

        this.toppings.push("Shredded Mozzarella Cheese");
    }

    cut(): void {
        console.log("Cutting the pizza into square slices");
    }
}

class Main {
    constructor() {
        const nyStore: PizzaStore = new NYPizzaStore();
        const chicagoStore: PizzaStore = new ChicagoPizzaStore();

        const pizza: Pizza = nyStore.orderPiza("cheese");
        console.log(`Ethan ordered a ${pizza.getName()} \n`);

        const pizza2: Pizza = chicagoStore.orderPiza("cheese");
        console.log(`Joel ordered a ${pizza2.getName()} \n`);
    }
}

new Main();