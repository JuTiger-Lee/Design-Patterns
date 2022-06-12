class TV {
    on() {};
    off() {};
    setInputChange() {};
    setVolume() {};
}

class OutdoorLight {
    on() {};
    off() {};
}

class CeilingLight {
    on() {};
    off() {};
    dim() {};
}

class Light {
    on() {};
    off() {};
}

class Main {
    constructor() {
        const ceilingLight = new CeilingLight();
        const outdoorLight = new OutdoorLight();
        const tv = new TV();
    }
}

/**
 * 위 모든 클래스에 on, off만 있는게 아닌
 * dim(), setInputChange()와 같은 메서드들이 잔뜩 있다. 
 * 이렇게되면 클라이언트는 무슨 메서드를 사용을 해야할지 헷갈리고 복잡해진다.
 * 이렇게 되면 다형성을 하기 어렵다. 또 추후에 또다른 제품이 추가되면 변경도 힘들어진다.
 */