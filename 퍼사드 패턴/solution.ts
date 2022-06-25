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

class HomeTheaterFacade {
    amp: Amplifier;
    tuner: Tuner;
    dvd: DvdPlayer;
    cd: CdPlayer;
    projector: Projector;
    lights: TheaterLights;
    screen: Screend;
    popper: PopcornPopper;

    constructor(amp: Amplifier,
        tuner: Tuner,
        dvd: DvdPlayer,
        cd: CdPlayer,
        projector: Projector,
        screen: Screend,
        lights: TheaterLights,
        popper: PopcornPopper) {
            this.amp = amp;
            this.tuner = tuner;
            this.dvd = dvd;
            this.cd = cd;
            this.projector = projector;
            this.screen = screen;
            this.lights = lights;
            this.popper = popper
        }

    watchMovie(movie: String) {
        console.log("Get ready to watch a move...");
        this.popper.on();
        this.popper.pop();
        this.lights.dim(10);
        this.screen.down();
        this.projector.on();
        this.projector.wideScreenMode();
        this.amp.on();
        this.amp.setDvd(this.dvd);
        this.amp.setSurroundSound();
        this.amp.setVolume(5);
        this.dvd.on();
        this.dvd.play(movie);
    }

    endMovie() {
        console.log("Shutting movie Theater down....");
        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amp.off();
        this.dvd.stop();
        this.dvd.eject();
        this.dvd.off();
    }

    listenToCd() {
        // ...
    }

    endCd() {
        // ...
    }

    listenToRadio() {
        // ...
    }

    endRadio() {
        // ...
    }
} 

class Main {
    constructor() {
        const amp = new Amplifier();
        const tunner = new Tuner();
        const dvd = new DvdPlayer();
        const cd = new CdPlayer();
        const projector = new Projector();
        const screen = new Screend();
        const lights = new TheaterLights();
        const popper = new PopcornPopper();

        const homeTheater: HomeTheaterFacade = new HomeTheaterFacade(amp, tunner, dvd, cd, projector, screen, lights, popper);

        homeTheater.watchMovie("Iron Man3");
        homeTheater.endMovie();
    }
}

new Main();

/**
 * 퍼사드 패턴을 이용하면 여러가지 클래스와 메서드를 이용해서 하나의 큰 메서드를 만들어서 사용이 가능하다.
 * 큰 메서드도 사용이 가능하며 필요하다면 각각 클래스의 있는 메서드를 호출해서 사용해도 무방하다.
 * 즉 큰 기능 메서드, 작은 기능 메서드를 각각 필요할 때 번갈어가면서 사용이 가능하다는 것이다.
 * 정리를하자면 단순화된 인터페이스를 통해서 서브시스템을 더 쉽게 사용할 수 있다는것이다.
 */