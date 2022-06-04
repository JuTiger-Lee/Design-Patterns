/**
 * 싱글톤은 멀티 스레드 환경에서는 두개 이상의 인스턴스 생성이 될 수 가 있다.
 * 즉 thread1, thread2가 동시에 하나의 싱글톤 class에 접근 할시 두개의 인스턴스가 만들어진다.
 */

// 해결 방법 1
// TODO: 싱글톤 동기화 처리 코드 작성

/**
 * 인스턴스를 요청하는 정적 메서드인 getInstance 메서드를 동기화 시키는 것이다.
 * 그렇게되면 한 thread가 작업이 끝날 때 까지 나머지 thread는 작업을 기다려야한다.
 * 하지만 메서드에 동기화를 하게되면 병렬성 처리가 떨어져 속도에 문제가 생긴다 즉 100배 정도 성능이 저하가된다.
 */

// 해결 방법 2

/**
 * 인스턴스를 필요할 때 생성하지 말고, 처음부터 만들어 버린다.
 * 처음부터 만들어 버리면 인스턴스 검사 로직을 안해도되기에 동시성 문제를 해결할 수 있다.
 * 이렇게되면 전체를 static으로 하는거처럼의 성능이 나온다. 
 */

class Singleton {
    // 정적 초기화 부분에서 Singleton의 인스턴를 생성
    private static uniqueInstance: Singleton = new Singleton();

    private constructor() {};

    public getInstance(): Singleton {
        // 인스턴스가 이미 있으니 반환
        return Singleton.uniqueInstance;
    }
}

// 해결 방법 3
// TODO: 싱글톤 DCL 처리 코드 작성

/**
 * DCL(DOuble Checking Locking)
 * DCL을 이용해서 동기화 부분을 줄이는것이다.
 * 해결 방법 1에서는 처음부터 끝까지 동기화 메서드이지만
 * DCL을 사용하면 처음에만 동기화 처리를 하고 나중에 동기화를 하지 않는다.
 */

/** ---- 중요 ----- */

/**
 * DCL은 자바 1.4 이전 버전에서는 쓸 수 없다
 */