class CurrentConditionDisplay {
    update(temp, humidity, pressure) {}
}

class StatisticsDisplay {
    update(temp, humidity, pressure) {}
}

class ForecastDisplay {
    update(temp, humidity, pressure) {}
}

class WeatherData {
    getTemperature() {
        // 온도
    }

    getHumidity() {
        // 습도
    }

    getPressure() {
        // 기압
    }
     
    measurementsChanged() {
     const currentConditionDisplay = new CurrentConditionDisplay();
     const statisticsDisplay = new StatisticsDisplay();
     const forecastDisplay = new ForecastDisplay();

     const temp = this.getTemperature();
     const humidity = this.getHumidity();
     const pressure = this.getPressure();

     // 바뀔 수 있는 부분은 캡슐화 해야 한다.
     /* 
      구체적인 구현에 맞춰서 코딩했기 때문에 
      프로그램을 고치지 않고서는 디스플레이 항목을 추가/제거할 수 없다. 
     */
     currentConditionDisplay.update(temp, humidity, pressure);
     statisticsDisplay.update(temp, humidity, pressure);
     forecastDisplay.update(temp, humidity, pressure);
    }
} 