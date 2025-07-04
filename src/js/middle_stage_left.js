import { Scene, Vector, Axis, Actor, Color, CollisionType } from "excalibur";
import { Player } from "./player";
import { UI } from "./ui";
import { Enemy } from "./enemy";
import { windEnemy } from "./wind_enemy";
import { Portal } from "./portal";
import { ShinyWaterEnemy } from "./shinywater";
import { ShinyWindEnemy } from "./shinywind";
import { Resources } from "./resources.js";

export class Next extends Scene {
    game;
    player;
    ui;

    onInitialize(engine) {
        this.input.gamepads.enabled = true
        this.input.gamepads.on('connect', (connectevent) => {
            console.log("gamepad detected")
            engine.mygamepad = connectevent.gamepad
        })


        console.log('Score bij start Next scene:', this.engine.playerProgress.score);
        console.log('Health bij start Next scene:', this.engine.playerProgress.health)


        this.camera.zoom = 1.5;
    }

    onActivate(ctx) {
        this.clear()
        this.addActorsToScene()
    }

    onDeactivate() {
        Resources.tutorialBackgroundMusic.stop();
    }

    addActorsToScene() {
        // Create player only once
        const player = new Player();
        player.pos = new Vector(13, 440);
        this.add(player);

        // Create Enemies

        const enemy1 = Math.random() < 1 / 20
            ? new ShinyWaterEnemy()
            : new Enemy();
        enemy1.pos = new Vector(-320, 325);
        this.add(enemy1);

        const enemy2 = Math.random() < 1 / 20
            ? new ShinyWindEnemy()
            : new windEnemy();
        enemy2.pos = new Vector(-145, 190);
        this.add(enemy2);

        const enemy3 = Math.random() < 1 / 20
            ? new ShinyWaterEnemy()
            : new Enemy();
        enemy3.pos = new Vector(225, 255);
        this.add(enemy3);

        const enemy4 = Math.random() < 1 / 20
            ? new ShinyWaterEnemy()
            : new Enemy();
        enemy4.pos = new Vector(441, 128);
        this.add(enemy4);

        const enemy5 = Math.random() < 1 / 20
            ? new ShinyWindEnemy()
            : new windEnemy();
        enemy5.pos = new Vector(81, -42);
        this.add(enemy5);

        // Create portal rectangle
        const portal = new Portal("final", new Vector(0, -538));
        this.add(portal);

        // Add tilemap
        this.engine.middleLevelMap.addToScene(this);

        this.ui = new UI()
        this.add(this.ui)

        // const ui = this.scene.actors.find(actor => actor instanceof UI)
        // if (ui) {
        //     ui.updateScore();
        // }




        // Setup camera
        this.camera.strategy.lockToActorAxis(player, Axis.X);
        this.camera.strategy.lockToActorAxis(player, Axis.Y);

    }
}