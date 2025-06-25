import { Scene, Vector, Axis, Actor, Color, CollisionType } from "excalibur";
import { Player } from "./player.js";
import { Enemy } from "./enemy";
import { waterball } from "./waterball";
import { windEnemy } from "./wind_enemy";
import { Portal } from "./portal.js";
import { UI } from "./ui.js";
import { Resources } from "./resources.js";

export class TutorialScene extends Scene {
    game;
    player;
    ui;

    onInitialize(engine) {

        this.input.gamepads.enabled = true
        this.input.gamepads.on('connect', (connectevent) => {
            console.log("gamepad detected")
            engine.mygamepad = connectevent.gamepad
        })




        Resources.tutorialBackgroundMusic.play();


        this.camera.zoom = 1.5;
    }

    onActivate(ctx) {
        this.clear()
        this.addActorsToScene()
    }


    addActorsToScene() {
        // Add tilemap
        this.engine.tutorialMap.addToScene(this);
        // Create player only once
        const player = new Player();
        player.pos = new Vector(226, 450);
        this.add(player);

        // Create an Enemy only once
        const enemy = new Enemy();
        enemy.pos = new Vector(365, 115);
        this.add(enemy);

        // create wind enemy only once
        const wenemy = new windEnemy();
        wenemy.pos = new Vector(113, 56)
        this.add(wenemy);
        wenemy.pos = new Vector(100, 400);


        // Create portal rectangle
        const portal = new Portal("next", new Vector(270, -33));
        this.add(portal);


        this.ui = new UI(player);
        this.add(this.ui)
        console.log(this.ui)

        // Setup camera
        this.camera.strategy.lockToActorAxis(player, Axis.X);
        this.camera.strategy.lockToActorAxis(player, Axis.Y);

    }

}