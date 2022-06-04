/**
 * 싱글톤 패턴
 */

class Singleton {
    // 싱글톤 클래스의 유일한 인스턴스를 저장 하기 위한 정적변수
    private static uniqueInstance: Singleton;

    // 생성자는 외부에서 인스턴스화를 하지 못하도록 즉 내부에서 생성할 수 있도록 private 처리를 한다.
    private constructor() {}

    static getInstance(): Singleton {
        if(!this.uniqueInstance) Singleton.uniqueInstance = new Singleton();

        return Singleton.uniqueInstance;
    }
}

const singletonInstance = Singleton.getInstance();

/**
 * 해당 싱글톤은 큰 문제를 가지고 있다.
 * 즉 멀티 스레드의 동시성 문제에 취약하다는 것이다.
 */

