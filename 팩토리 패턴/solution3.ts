/** 팩토리 추상 패턴 */

/**
 * 각 지역마다 특성에 맞는 피자를 만들어야한다.
 * 예를 들어 뉴욕 스타일은 빵은 얇고 소스를 주로 맛을 내고 치즈는 적게 들어간다.
 * 하지만 시카고 피자는 두꺼운 빵에 풍부한 소스, 치즈가 들어간다. 
 * 
 * 시카고, 뉴욕 마다의 팩토리를 만드는게 아닌 
 * 시카고, 뉴욕 마다의 피자집을 만드는 방식 즉 각 스토어 마다 각 팩토리를 만들어서 하나의 프레임워크로 가는거다.
 */

 interface Dough {

}

interface Sauce {

}

interface Cheese {

}

interface Veggies {

}

interface Pepperoni {

}

interface Clams {
    
}

/**
* 인터페이스에 각 재료별 생성 메소드를 정의 한다.
* 공통적으로 사용하는 메소드가 있다면 인터페이스가 아닌 추상 클래스로 만들어도된다.
*/
interface PizzaIngredientFactory {
   createDough(): Dough;
   createSauce(): Sauce;
   createChesse(): Cheese;
   createVeggies(): Veggies[];
   createPepperoni(): Pepperoni;
   createClam(): Clams;
}

abstract class Pizza {
   // 각 피자마다 쓰이는 원재료
   name: string;
   dough: Dough;
   sauce: Sauce;
   veggies: Veggies[];
   cheese: Cheese;
   pepperoni: Pepperoni;
   clam: Clams;

   // 피자를 만드는 데 필요한 재료들을 정돈하게 된다.
   // 모든 원재료는 팩토리에서 가져온다.
   abstract prepare(): void;

   bake(): void {
       console.log("Bake for 25 minutes at 350");
   }

   cut(): void {
       console.log("Cutting the pizza into diagonal slices");
   }

   box(): void {
       console.log("Place pizza in official PizzaStore box");
   }

   setName(name: string): void {
       this.name = name;
   }

   getName(): string {
       return this.name;
   }

   toString(): string {
       // 피자이름을 출력하는 부분
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
   abstract createPizaa(type: string): Pizza;
}

/**
* 서브클래스 가운데 어느 구상 클래스 객체의 인스터를 만들어서 리턴할지는
* 전적으로 PizzaStore의 서브클래스에 의해 결정 된다.
*/
class NYPizzaStore extends PizzaStore{
    createPizaa(item: string): Pizza {
       let pizza: Pizza = null;
       let ingredientFactory: PizzaIngredientFactory = new NYPizzaIngredientFactory();

       if(item === "cheese") {
           pizza = new CheesePizza(ingredientFactory);
           pizza.setName("New York Style Cheese Pizza");
       }

       return pizza;
   }
}

class ChicagoPizzaStore extends PizzaStore {
   createPizaa(item: string): Pizza {
       let pizza: Pizza = null;
       let ingredientFactory: PizzaIngredientFactory = new ChicagoIngredientFactory();

       if(item === "cheese") {
           pizza = new CheesePizza(ingredientFactory);
           pizza.setName("New York Style Cheese Pizza");
       }

       return pizza;
   }
}

class CheesePizza extends Pizza {
   ingredientFactory: PizzaIngredientFactory;

   constructor(ingredientFactory: PizzaIngredientFactory) {
       super();
       this.ingredientFactory = ingredientFactory;
   }

   prepare(): void {
       console.log(`Preparing ${this.name}`);
       this.dough = this.ingredientFactory.createDough();
       this.sauce = this.ingredientFactory.createSauce();
       this.cheese = this.ingredientFactory.createChesse();
   }
}

class ClamPizza extends Pizza {
   ingredientFactory: PizzaIngredientFactory;

   constructor(ingredientFactory: PizzaIngredientFactory) {
       super();
       this.ingredientFactory = ingredientFactory;
   }

   prepare(): void {
       console.log(`Preparing ${this.name}`);
       this.dough = this.ingredientFactory.createDough();
       this.sauce = this.ingredientFactory.createSauce();
       this.cheese = this.ingredientFactory.createChesse();
       this.clam = this.ingredientFactory.createClam();
   }
}

/** 재료 */

// 뉴옥 원재료 공장에서도 모든 재료 공장에서 구현해야하는 인터페이스를 구현 한다.

class ThinCrustDouch implements Dough {

}

class MarinaraSauce implements Sauce {

}

class ReggianoCheese implements Cheese {

}

class Garlic implements Veggies {

}

class Onion implements Veggies {

}

class Mushroom implements Veggies {

}

class RedPepper implements Veggies {

}

class SlicedPepperoni implements Pepperoni {

}

class FreshClasm implements Clams {

}

class NYPizzaIngredientFactory implements PizzaIngredientFactory {
   createDough() {
       return new ThinCrustDouch();
   }

   createSauce() {
       return new MarinaraSauce();
   }

   createChesse() {
       return new ReggianoCheese();
   }

   createVeggies() {
       const veggies: Veggies[] = [
           new Garlic(),
           new Onion(),
           new Mushroom(),
           new RedPepper()
       ];

       return veggies;
   }

   createPepperoni() {
       return new SlicedPepperoni();
   }

   createClam() {
       return new FreshClasm();
   }
}

class ChicagoIngredientFactory implements PizzaIngredientFactory {
   createDough() {
       return new ThinCrustDouch();
   }

   createSauce() {
       return new MarinaraSauce();
   }

   createChesse() {
       return new ReggianoCheese();
   }

   createVeggies() {
       const veggies: Veggies[] = [
           new Garlic(),
           new Onion(),
           new Mushroom(),
           new RedPepper()
       ];

       return veggies;
   }

   createPepperoni() {
       return new SlicedPepperoni();
   }

   createClam() {
       return new FreshClasm();
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