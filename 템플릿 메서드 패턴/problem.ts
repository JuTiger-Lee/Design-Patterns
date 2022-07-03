/**
 * 커피 만드는 법
 * 1. 물을 끓인다.
 * 2. 끓는 물에 커피를 우려낸다.
 * 3. 커피를 컵에 따른다.
 * 4. 설탕과 우유를 추가한다.
 */

class Coffee {
    prepareRecipe(): void {
        this.boilWater();
        this.brewCoffeGrinds();
        this.pourInCup();
        this.addSugarAndMilk();
    }

    boilWater(): void {
        console.log("물 끓이는 중");
    }

    brewCoffeGrinds(): void {
        console.log("필터를 통해서 커피를 우려내는 중");
    }

    pourInCup(): void {
        console.log("컵에 따르는 중");
    }

    addSugarAndMilk(): void {
        console.log("설탕과 우유를 추가하는 중")
    }
}

/**
 * 홍차 만드는 법
 * 1. 물을 끓인다.
 * 2. 끓는 물에 차를 우려낸다.
 * 3. 차를 컵에 따른다.
 * 4. 레몬을 추가한다.
 */

class Tea {
    prepareRecipe(): void {
        this.boilWater();
        this.steepTeaBag();
        this.pourInCup();
        this.pourInCup();
    }

    boilWater(): void {
        console.log("물을 끓이는 중");   
    }

    steepTeaBag(): void {
        console.log("차를 우려내는 중");
    }

    addLemon(): void {
        console.log("레몬을 추가하는 중");
    }

    pourInCup(): void {
        console.log("컵에 따르는 중")
    }
}

/**
 * 물을 끓이는 boilWater 메서드와, 컵에 따르는 pourInCup 메서드는 똑같은 코드이다.
 * 공통적인 부분을 추상화시켜서 베이스 클래스를 만들면 더 좋은 코드를 만들 수 있을것이다.
 */