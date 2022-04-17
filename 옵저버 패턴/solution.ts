/**
 * 옵저버는 주제에게서 갱신해 주기를 기다리는 입장이기 때문에 의존성을 가진다.
 * 이러한 방법을 사용하면 여러 객체에서 동일한 데이터를 
 * 제어하도록 하는 것에 비해 더 깔끔한 객체지행 디자인을 만들 수 있디.
 */

/**
 * 느슨한 결합의 위력
 * 두 객체가 느슨하게 결합되어 있다는 것은, 그 둘이 상호작요을 하기 하지만 서로에 대해 서로 잘 모른다는것을 의미한다.
 * !옵저버 패턴에서는 주제와 옵저버가 느슨하게 결합되어있는 객체 디잔을 제공을 한다.!
 * 옵저버가 추가가된다고해도 주제 객체는 전혀 신경도 쓰지 않는다.
 * 
 * 주제와 옵저버는 서로 독립적으로 재사용이 가능 하다.
 * 주제나 옵저버가 바뀌더라도 영향을 미치지 않는다.
 */

// 주제 인터페이스
interface Subject {
    // 옵저버 등록
    registerObserver(observer: Observer): void;
    // 옵저버 제거
    removeObserver(observer: Observer): void;
    // 주체 객체의 상태가 변경 되었을 때 모든 옵저버들한테 알리기 위해 호출되는 메소드
    notifyObservers(): void;
}

// 옵저버 인터페이스 
/**
 * Observer 인터페이스는 모든 옵저버 클래스에서 구현해야한다.
 * 따라서 모든 옵저는 update 메서드를 구현해야한다.
 */
interface Observer {
    // 기상 정보가 변경되었을 때 옵저버한테 전달되는 상태 값들
    update(temperature: number, humidity: number, pressure: number): void;
}

// display  인터페이스
interface DisplayElement {
    dispaly(): void;
}

class WeatherData implements Subject {
    // observer 객체들을 저장하기 위해 array 객체 생성
    private observers: Array<Observer>;
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor() {
        this.observers = [];
    }

    // pull 방식 옵저버가 필요로할 때 부르는 메서드
    getTemperature() {
        return this.temperature;
    }

    getHumidity() {
        return this.humidity;
    }

    getPressure() {
        return this.pressure;
    }

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);

        if(index > 0) this.observers.splice(index, 1);
    }

    notifyObservers() {
        for(let i = 0; i < this.observers.length; i++) {
            // 상태에 대해서 모든 옵저버들한테 알려주는 두분 
            this.observers[i].update(this.temperature, this.humidity, this.pressure);
        }
    }

    measurementsChanged(): void {
        this.notifyObservers();
    }

    setMeasurements(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;

        this.measurementsChanged();
    }
}

class CurrentConditions implements Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private weatherData: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temperature: number, humidity: number, pressure): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.dispaly();
    }

    dispaly(): void {
        // 현재 측정값을 화면에 표시
        console.log(`current conditions ${this.temperature} F degress and ${this.humidity}`);
    }
}

class StatisticsDisplay implements Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private weatherData: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.dispaly();
    }

    dispaly(): void {
        console.log(`statistics ${this.temperature} F degress and ${this.humidity}`);
    }
}

class ForecasDisplay implements Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private weatherData: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.dispaly();
    }

    dispaly(): void {
        console.log(`forecas ${this.temperature} F degress and ${this.humidity}`);
    }
}

class Main {
    constructor() {
        const weatherData = new WeatherData();

        const currentConditions = new CurrentConditions(weatherData);
        const statisticsDisplay = new StatisticsDisplay(weatherData);
        const forecasDisplay = new ForecasDisplay(weatherData);

        /* 옵저버 삭제 */
        // weatherData.removeObserver(statisticsDisplay);
        weatherData.setMeasurements(80, 65, 304);
        weatherData.setMeasurements(82, 70, 204);
        weatherData.setMeasurements(78, 90, 104);
    }
}

new Main();