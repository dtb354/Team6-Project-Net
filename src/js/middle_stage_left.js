import { Scene } from "excalibur";

export class MiddleStageLeft extends Scene {
    game; 
    player;

    onInitialize(engine) {
        this.input.gamepads.enabled = true
        this.input.gamepads.on('connect', (connectevent) => {
            console.log("gamepad detected")
            engine.mygamepad = connectevent.gamepad
        })
    }
}