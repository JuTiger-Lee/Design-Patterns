/**
 * 커맨드 패턴
 */

// 리시버 객체
class Light {
    on() {
     console.log("Light is On");
    };

    off() {
     console.log("Light is Off");
    };
}

class Stereo {
    on() {
        console.log("Stereo is On");
    }

    off() {
        console.log("Stereo is Off");
    }

    setCd() {
        console.log("Stereo set CD");
    }

    setDvd() {
        console.log("Stereo set DVD");
    }

    setRadio() {
        console.log("Stereo set Radio");
    }

    setVolume(volume: number) {
        console.log(`Stereo set Volume is ${volume}`);
    }
}

class CeilingFan {
    static HIGHT = 3;
    static MEDIUM = 2;
    static LOW = 1;
    static OFF = 0;
    location: string;
    speed: number;

    constructor(location: string) {
        this.location = location;
        this.speed = CeilingFan.OFF;
    }

    high() {
        console.log("ceilingFan speed is HIGH");
        this.speed = CeilingFan.HIGHT;
    }

    medium() {
        console.log("ceilingFan speed is medium");
        this.speed = CeilingFan.MEDIUM;
    }

    low() {
        console.log("ceilingFan speed is low");
        this.speed = CeilingFan.LOW;
    }

    off() {
        console.log("ceilingFan off");
        this.speed = CeilingFan.OFF;
    }

    getSpeed(): number {
        return this.speed;
    }
}

/**
 * 커맨드 객체는 해당 인터페이스를 통해 구현해야 한다.
 */
interface Command {
    execute(): void;
    undo(): void;
}

// 전등켜기 커맨드 객체
class LightOnCommand implements Command {
    light: Light;

    // 리시버 객체 받기
    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();
    }
}

// 전등끄기 커맨드 객체
class LightOffCommand implements Command {
    light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.off();
    }

    undo(): void {
        this.light.on();
    }
}

// 오디오 커맨드 객체
class StereoOnWithCDCommand implements Command {
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): void {
        /**
         * 전원을 켜야(on())하고 그 다음 CD 재생(setCd())
         * 마지막으로 볼륨을 11로 맞춰야한다.(setVolume(11))
         */
        this.stereo.on();
        this.stereo.setCd();
        this.stereo.setVolume(11);
    }

    undo(): void {
        this.stereo.off();
        this.stereo.setVolume(0);  
    }
}

class StereoOffWithCDCommand implements Command {
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.off();
        this.stereo.setVolume(0);
    }

    undo(): void {
        this.stereo.on();
        this.stereo.setCd();
        this.stereo.setVolume(11);
    }
}

class CeilingFanHighCommand implements Command {
    ceilingFan: CeilingFan;
    prevSpeed: number;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute(): void {
        this.prevSpeed = this.ceilingFan.getSpeed();
        this.ceilingFan.high();
    }

    undo(): void {
        if(this.prevSpeed === CeilingFan.HIGHT) this.ceilingFan.high();
        else if(this.prevSpeed === CeilingFan.MEDIUM) this.ceilingFan.medium();
        else if(this.prevSpeed === CeilingFan.LOW) this.ceilingFan.low();
        else if(this.prevSpeed === CeilingFan.OFF) this.ceilingFan.off();
    }
}

class CeilingFanMediumCommand implements Command {
    ceilingFan: CeilingFan;
    prevSpeed: number;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute(): void {
        this.prevSpeed = this.ceilingFan.getSpeed();
        this.ceilingFan.medium();
    }

    
    undo(): void {
        if(this.prevSpeed === CeilingFan.HIGHT) this.ceilingFan.high();
        else if(this.prevSpeed === CeilingFan.MEDIUM) this.ceilingFan.medium();
        else if(this.prevSpeed === CeilingFan.LOW) this.ceilingFan.low();
        else if(this.prevSpeed === CeilingFan.OFF) this.ceilingFan.off();
    }
}

class CeilingFanLowCommand implements Command {
    ceilingFan: CeilingFan;
    prevSpeed: number;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute(): void {
        this.prevSpeed = this.ceilingFan.getSpeed();
        this.ceilingFan.low();
    }

    
    undo(): void {
        if(this.prevSpeed === CeilingFan.HIGHT) this.ceilingFan.high();
        else if(this.prevSpeed === CeilingFan.MEDIUM) this.ceilingFan.medium();
        else if(this.prevSpeed === CeilingFan.LOW) this.ceilingFan.low();
        else if(this.prevSpeed === CeilingFan.OFF) this.ceilingFan.off();
    }
}

class CeilingFanOff implements Command {
    ceilingFan: CeilingFan;
    prevSpeed: number;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute(): void {
        this.prevSpeed = this.ceilingFan.getSpeed();
        this.ceilingFan.off();
    }

    undo(): void {
        if(this.prevSpeed === CeilingFan.HIGHT) this.ceilingFan.high();
        else if(this.prevSpeed === CeilingFan.MEDIUM) this.ceilingFan.medium();
        else if(this.prevSpeed === CeilingFan.LOW) this.ceilingFan.low();
        else if(this.prevSpeed === CeilingFan.OFF) this.ceilingFan.off();
    }
}

// 기본 상태 커맨드
class NoCommand implements Command {
    execute(): void {}
    undo(): void {}
}

/**
 * 매크로 커맨드
 * 여러 커맨드를 실행시키는 커맨드
 */
class MacroCommand implements Command {
    commands: Command[];

    // command 배열을 받는다.
    constructor(commands: Command[]) {
        this.commands = commands;
    }
    
    execute(): void {
        // 받은 command 배열을 차례대로 실행한다.
        for(let i = 0; i < this.commands.length; i+=1) {
            this.commands[i].execute();
        }
    }

    undo(): void {
        for(let i = 0; i < this.commands.length; i+=1) {
            this.commands[i].undo();
        }
    }
}

class RemoteControl {
    onCommands: Command[] = [];
    offCommands: Command[] = [];
    // undo가 실행됐을 때를 대비해서 마지막으로 사용할 커맨드 객체를 집어넣기 위한 변수 
    undoCommand: Command;

    constructor() {
        this.onCommands.length = 7;
        this.offCommands.length = 7;
        
        const noCommand: Command = new NoCommand();

        for(let i = 0; i < 7; i += 1) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }

        // 다른 슬롯하고 마찬가지로 NoCommand 사용
        this.undoCommand = noCommand;
    }

    // 제어할 커맨드를 매개변수로 받기
    setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    onButtonWasPushed(slot: number) {
        this.onCommands[slot].execute();
        this.undoCommand = this.onCommands[slot];
    }

    offButtonWasPushed(slot: number) {
        this.offCommands[slot].execute();
        this.undoCommand = this.offCommands[slot];
    }

    /**
     * 사용자가 undo 버튼을 누르면 undoCommand에 저장된 커맨드 객체의
     * undo 메서드를 호출
     */

    unButtonWasPushed() {
        this.undoCommand.undo();
    }

    getInformation(): string {
        let message = '';

        for(let i = 0; i < this.onCommands.length; i++) {
            message += `[slot: ${i}] ${this.onCommands[i]['constructor']['name']} ${this.offCommands[i]['constructor']['name']} \n`;
        }

        return message;
    }
}

class Main {
    constructor() {
        const remoteControl: RemoteControl = new RemoteControl();

        const livingRoomLight: Light = new Light();
        const stereo: Stereo = new Stereo();
        const ceilingFan: CeilingFan = new CeilingFan("Living Room");

        const livingRoomLightOn: LightOnCommand = new LightOnCommand(livingRoomLight);
        const liviningRommLightOff: LightOffCommand = new LightOffCommand(livingRoomLight);

        const stereoOnWithCD: StereoOnWithCDCommand = new StereoOnWithCDCommand(stereo);
        const stereoOffWithCD: StereoOffWithCDCommand = new StereoOffWithCDCommand(stereo);

        const ceilingFanHigh: CeilingFanHighCommand = new CeilingFanHighCommand(ceilingFan);
        const ceilingFanMedium: CeilingFanMediumCommand = new CeilingFanMediumCommand(ceilingFan);
        const ceilingFanLow: CeilingFanLowCommand = new CeilingFanLowCommand(ceilingFan);
        const ceilingFanOff: CeilingFanOff = new CeilingFanOff(ceilingFan);

        // 매크로 커맨드 세팅
        const commandOn = [livingRoomLightOn, stereoOnWithCD, ceilingFanHigh];
        const commandOff = [liviningRommLightOff, stereoOffWithCD, ceilingFanOff];
                
        const macroOn: MacroCommand = new MacroCommand(commandOn);
        const macroOff: MacroCommand = new MacroCommand(commandOff);

        // 거실 light 0번 버튼에 등록
        remoteControl.setCommand(0, livingRoomLightOn, liviningRommLightOff);
        // 오디오 1번 버튼에 등록
        remoteControl.setCommand(1, stereoOnWithCD, stereoOffWithCD);
        // 선풍기 High 2번 버튼에 등록
        remoteControl.setCommand(2, ceilingFanHigh, ceilingFanOff);
        // 선풍기 Medium 3번 버튼에 등록
        remoteControl.setCommand(3, ceilingFanMedium, ceilingFanOff);
        // 선풍기 Low 4번 버튼에 등록
        remoteControl.setCommand(4, ceilingFanLow, ceilingFanOff);

        remoteControl.setCommand(5, macroOn, macroOff);

        console.log(remoteControl.getInformation());

        remoteControl.onButtonWasPushed(0);
        remoteControl.offButtonWasPushed(0);
        remoteControl.unButtonWasPushed(); // 실행 취소 기능

        console.log('\n');

        remoteControl.onButtonWasPushed(1);
        remoteControl.offButtonWasPushed(1);
        remoteControl.unButtonWasPushed(); // 실행 취소 기능

        console.log('\n');

        remoteControl.onButtonWasPushed(2);
        remoteControl.offButtonWasPushed(2);
        remoteControl.unButtonWasPushed(); // 실행 취소 기능

        console.log('\n');

        remoteControl.onButtonWasPushed(3);
        remoteControl.offButtonWasPushed(3);
        remoteControl.unButtonWasPushed(); // 실행 취소 기능

        console.log('\n');

        remoteControl.onButtonWasPushed(4);
        remoteControl.offButtonWasPushed(4);
        remoteControl.unButtonWasPushed(); // 실행 취소 기능

        console.log('\n');

        console.log("--------------------- Macro On ---------------------");
        remoteControl.onButtonWasPushed(5);

        console.log('\n');

        console.log("--------------------- Macro Off ---------------------");
        remoteControl.offButtonWasPushed(5);

        console.log('\n');

        console.log("--------------------- Macro Undo ---------------------");
        remoteControl.unButtonWasPushed();

     }
}

new Main();