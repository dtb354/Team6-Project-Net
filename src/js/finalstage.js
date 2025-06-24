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

        this.input.gamepads.enabled = true
        this.input.gamepads.on('connect', (connectevent) => {
            console.log("gamepad detected")
            engine.mygamepad = connectevent.gamepad
        })

        this.camera.zoom = 1.5;
    }

    onActivate(ctx) {
        this.clear()
        this.addActorsToScene()
    }

    addActorsToScene(){
        // Add tilemap
        this.engine.finalLevelMap.addToScene(this);

        // Create player only once
        const player = new Player();
        player.pos = new Vector(-11, -124);
        this.add(player);


        // Setup camera
        this.camera.strategy.lockToActorAxis(player, Axis.X);
        this.camera.strategy.lockToActorAxis(player, Axis.Y);
    }
}