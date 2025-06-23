import { Scene, Vector, Axis, Actor, Color, CollisionType } from "excalibur";
import { Player } from "./player";
import { UI } from "./ui";
import { Enemy } from "./enemy";
import { windEnemy } from "./wind_enemy";
import { Portal } from "./portal";

export class FinalStage extends Scene {
    game;
    player;
    ui;

    onInitialize(engine) {
        // this.input.gamepads.enabled = true
        // this.input.gamepads.on('connect', (connectevent) => {
        //     console.log("gamepad detected")
        //     engine.mygamepad = connectevent.gamepad
        // })

        // Add tilemap
        engine.middleLevelMap.addToScene(this);
    }
}