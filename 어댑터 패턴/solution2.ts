/**
 * 구식 interface를 사용하는 구현 class가 종종 있지만 
 * 최종 목표는 신형 interface를 사용하는 구현 class로 맞추는것이다.
 * 
 */

// 구식 interface
interface Enumeration {
    hasMoreElements(): void;
    nextElement(): void;
}

// 신형 인터페이스
interface Iteratord {
    hasNext(): void;
    next(): void;
    // 구식 interface에는 remove라는 기능이 없다.
    remove(): void; 
}

// 어댑티
class EnumerationImpl implements Enumeration {
    hasMoreElements(): void {
        console.log("hasMoreElements");
    }

    nextElement(): void {
        console.log("nextElement");
    }
}

class EnumerationAdapter implements Iteratord {
    enumerationImpl: Enumeration;

    constructor(enumerationImpl: Enumeration) {
        this.enumerationImpl = enumerationImpl;
    }

    hasNext(): void {
        this.enumerationImpl.hasMoreElements();
    }

    next(): void {
        this.enumerationImpl.nextElement();
    }

    remove(): void {
        // 구식 Enumeration에는 remove 기능이 없기에 에러를 던짐
        throw new Error("remove method is not exited");
    }
}

// 클라이언트
class IteratordImpl implements Iteratord {
    hasNext(): void {
        console.log("hasNext");
    }

    next(): void {
        console.log("next");
    }

    remove(): void {
        console.log("remove");
    }
}


