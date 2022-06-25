// 집 영화관 만들기

class Tuner {
    amplifier: Amplifier;

    on() {
        console.log("tuner on");
    };

    off() {
        console.log("tuner off");
    };
}

class Amplifier {
    tuner: Tuner;
    dvdPlayer: DvdPlayer;
    cdPlayer: CdPlayer;

    on() {
        console.log("Amplifier On");
    }

    off() {
        console.log("Amplifier Off");
    }

    setCd() {
        console.log("Amplifier setCd");
    }

    setDvd(dvd: DvdPlayer) {
        console.log("Amplifier setDvd");
    }

    setStereoSound() {
        console.log("Amplifier setStereoSound");
    }

    setSurroundSound() {
        console.log("Amplifier setSurroundSound");
    }

    setTunner() {
        console.log("Amplifier setTunner");
    }

    setVolume(volume: number) {
        console.log(`Amplifier setVolume ${volume}`);
    }
}

class DvdPlayer {
    amplifier: Amplifier;

    on() {
        console.log("DvdPlayer on");
    }

    off() {
        console.log("DvdPlayer off");
    }

    eject() {
        console.log("DvdPlayer eject");
    }

    pause() {
        console.log("DvdPlayer pause");
    }

    play(movie: String) {
        console.log(`DvdPlayer play ${movie}`);
    }

    setSurroundAudio() {
        console.log("DvdPlayer setSurroundAudio");
    }

    setTwoChannelAudio() {
        console.log("DvdPlayer setTwoChannelAudio");
    }

    stop() {
        console.log("DvdPlayer stop");
    }
}

class CdPlayer {
    amplifier: Amplifier;

    on() {
        console.log("Cdplay on");
    }

    off() {
        console.log("Cdplay off");
    }

    eject() {
        console.log("Cdplay eject");
    }

    pause() {
        console.log("Cdplay pause");
    }

    play() {
        console.log("Cdplay play");
    }

    stop() {
        console.log("Cdplay stop");
    }
}

class Screend {
    up() {
        console.log("Screend on");
    }

    down() {
        console.log("Screen down");
    }
}

class PopcornPopper {
    on() {
        console.log("PopcornPopper on");
    }

    off() {
        console.log("PopcornPopper off");
    }

    pop() {
        console.log("PopcornPopper pop");
    }
}

class TheaterLights {
    on() {
        console.log("TheaterLights on");
    }

    off() {
        console.log("TheaterLights off");
    }

    dim(light: number) {
        console.log(`TheaterLights dim ${light}`);
    }
}

class Projector {
    dvdPlayer: DvdPlayer;

    on() {
        console.log("Projector on");
    }

    off() {
        console.log("Projector off");
    }
    
    tvMode() {
        console.log("Projector tvMode");
    }

    wideScreenMode() {
        console.log("Projector wideScreenMode");
    }
}

/**
 * 위 클래스를 이용해서 영화를 보려면 아래와 같은 리스트를 해야한다.
 * 1. 팝콘 기계를 켠다
 * 2. 팝콘 튀기기 시작
 * 3. 전등을 어둡게 조절
 * 4. 스크린을 내린다.
 * 5. 프로젝터를 켠다.
 * 6. 프로젝터로 DVD 신호가 입력되도록 한다.
 * 7. 프로젝터를 와이드 스크린 모드로 전환한다.
 * 8. 앱프를 켠다.
 * 9. 앱프 입력을 DVD로 전환한다.
 * 10. 앱프를 서라운드 음향 모드로 전환한다.
 * 11. 앰프 볼륨을 중간(5)으로 설정한다.
 * 12. DVD 플레이어를 켠다
 * 13. DVD를 재생한다.
 */

/**
 * 위와같은 행동을 하기 위해서는 필요한 클래스는 6개이며 실행하는 메서드들은 13개이다.
 * 위와같이 클래스도 많고 메서드도 많기 때문에 사용법이 너무나도 복잡하다.
 */
