/**
 * 템플릿 메서드에서는 알고맂므의 각 단계들을 정의하며
 * 그 중 한개 이상의 단계가 서브클래스에 의해 제공 될 수 있다.
 */
abstract class CaffeinBeverage {
    /**
     * 템플릿 메서드
     * 어떤 알고리즘에 대한 템플릿(툴) 역할을 한다.
     */
    prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    /**
     * 알고리즘이 즉 처리 방식이 다르기 때문에 추상 메서드로 선언
     * 해당 메서드는 서브 클래스에서 구현해야한다.
     */
    abstract brew(): void;
    abstract addCondiments(): void;

    boilWater(): void {
        console.log("물 끓이는 중");
    }

    pourInCup(): void {
        console.log("컵에 따르는 중");
    }

    /**
     * 해당 메서드는 서브클래스에서 필요에 따라 오버라이드가 가능한 hook 메서드이다.
     */
    customWantsCondiments() {
        return true
    }
}

class Tea extends CaffeinBeverage {
    brew(): void {
        console.log("차를 우려내는 중");
    }

    addCondiments(): void {
        console.log("레몬을 추가하는 중");
    }
}

class Coffee extends CaffeinBeverage {
    brew(): void {
        console.log("필터로 커피를 우려내는 중");
    }
    
    addCondiments(): void {
        console.log("설탕과 커피를 추가하는 중")
    }

    // hook 메서드 오버라이드
    customWantsCondiments(): boolean {
        const answer = true;
        /**
         * 첨가물을 넣을지 말지 오버라이드
         */
        if(answer) return true;
        else return false;
    }
}

class Main {
    constructor() {
        const myTea: Tea = new Tea();
        myTea.prepareRecipe();

        const myCoffee: Coffee = new Coffee();
        myCoffee.prepareRecipe();
    }
}

new Main();

/**
 * 커피를 우려내는 것과 티백을 물에 넣어서 홍차를 우려내는 것은 별반 다르지 않다.
 * 이거를 일반화 시키면 그냥 brew()라는 메서드로 통일 시킬 수 있다
 * 즉 공통 알고리즘 부분은 추상클래스에서 구현하되 서브클래스마다 각자 다른 메서드 구현 부분은 서브클래스에서 구현을 하도록 하는 것이다.
 */