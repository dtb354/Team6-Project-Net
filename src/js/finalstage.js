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

        const enemy1 = new Enemy();
        enemy1.pos = new Vector(-24, -355);
        this.add(enemy1);

        const enemy2 = new windEnemy();
        enemy2.pos = new Vector(387, -430);
        this.add(enemy2);

        const enemy3 = new Enemy();
        enemy3.pos = new Vector(247, -800);
        this.add(enemy3);

        const enemy4 = new Enemy();
        enemy4.pos = new Vector(800, -795);
        this.add(enemy4);

        const enemy5 = new windEnemy();
        enemy5.pos = new Vector(545, -1100);
        this.add(enemy5);

        const enemy6 = new Enemy();
        enemy6.pos = new Vector(-379, -1100);
        this.add(enemy6);

        const enemy7 = new windEnemy();
        enemy7.pos = new Vector(-45, -1280);
        this.add(enemy7);

        const enemy8 = new windEnemy();
        enemy8.pos = new Vector(-685, -564);
        this.add(enemy8);

        const enemy9 = new Enemy();
        enemy9.pos = new Vector(-327, -795);
        this.add(enemy9);


        // Setup camera
        this.camera.strategy.lockToActorAxis(player, Axis.X);
        this.camera.strategy.lockToActorAxis(player, Axis.Y);
    }
}