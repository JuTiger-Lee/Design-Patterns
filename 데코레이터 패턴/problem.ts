// 문제 있는 코드 example 1

/**
 * 음료를 나타내는 추상 클래스이며,
 * 커피샵에서 판매되는 모든 음료는 이 클래스의 서브 클래스가 된다.
 */
abstract class Beverage {
    // 음료 설명
    public description: string;

    getDescription(): string {
        return this.description;
    }
    /**
     * 서브클래스에서 그 메서드를 구현해서 새로 정의해야한다.
     */
    abstract cost(): void;
}

class HouseBlend extends Beverage {
    cost(): void {

    }
}

class DarkRoast extends Beverage {
    cost(): void {
        
    }
}

class Decaf extends Beverage {
    cost(): void {
        
    }
}

class Espresso extends Beverage {
    cost(): void {
        
    }
}

/**
 * 커피를 주문할 때는 스팀 우유나 두유, 모카를 추가한다.
 * 또는 그 위에 휘핑 크림을 얹기도 한다. 각각을 추가할 때 마다 커피 가격을 올린다.
 * 즉 Espresso에 휘핑클림을 얹는다면 휘핑크림을 얹은 Espresso class를 새로 만들어야한다.
 * 이렇게 될 경우에는 너무나도 많은 서브클래스가 생성되어 관리하기 힘들다.
 */

// 문제 있는 코드 example 2

/**
 * 위 코드는 옵션에 따른 많은 class가 추가된다.
 * 그러면 그냥 인스턴스 변수와 메서드로 한 다음 상속으로 관리하면 좋지 않을까?
 */

 abstract class Beverage2 {
    // 각 추가 요소에 해당하는 부울 변수를 새로 추가
    public description: string;
    public milk: string;
    public soy: string;
    public mocha: string;
    public whip: string;

    getDescription(): string {
        return this.description;
    }

    /**
     * 여기서는 cost를 추상 메서드가 아닌 구현 메서드로 한다.
     * 이렇게 하면 서브클래스에서는 오버라이드를 해야한다.
     * 하지만 기본 음료 값에 추가 비용을 합친 총 가격을 리턴이 가능하다.
     */
    cost(): void {
        // 계산 
    }

    // 첨가물에 대한 부울 값을 알아내거나 설정하기 위한 게터/세터 메서드
    hasMilk() {}
    setMilk() {}
    hasSoy() {}
    setSoy() {}
    hasMocha() {}
    setMocha() {}
    hasWhip() {}
    setWhip() {}
}

/**
 * 각 cost() 메서드에서는 일단 음료의 가격을 계산한 다음
 * 수퍼클래스에서 구현한 cost()를 호출하여 첨가된 항목에 따른 추가 가격을 더 한다.
 */
class HouseBlend2 extends Beverage2 {
    cost(): void {

    }
}

class DarkRoast2 extends Beverage2 {
    cost(): void {
        
    }
}

class Decaf2 extends Beverage2 {
    cost(): void {
        
    }
}

class Espresso2 extends Beverage2 {
    cost(): void {
        
    }
}

/**
 * 위 처럼 하면 확실히 첨가물이 첨가된 음료수마다 class를 안 만들어도된다.
 * 하지만 첨가물 가격이 바뀔때 마다 기존 코드를 cost 메서드를 수정해야한다. 
 * 첨가물의 종류가 많아지면 새로운 메서드 추가 및 수퍼클래스 cost 메소드도 고쳐야 한다. 
 * 첨가물을 메서드가 필요없는 서브 클래스까지 메서드를 상속 받게된다.
 */