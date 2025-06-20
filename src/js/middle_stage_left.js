import { Scene, Vector, Axis, Actor, Color, CollisionType } from "excalibur";
import { Player } from "./player";
import { UI } from "./ui";
import { Enemy } from "./enemy";
import { windEnemy } from "./wind_enemy";

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

        // Create player only once
        const player = new Player();
        player.pos = new Vector(13, 440);
        this.add(player);

        // Create Enemies

        const enemy1 = new Enemy();
        enemy1.pos = new Vector(-320, 325);
        this.add(enemy1);

        const enemy2 = new windEnemy();
        enemy2.pos = new Vector(-145, 190);
        this.add(enemy2);

        const enemy3 = new Enemy();
        enemy3.pos = new Vector(225, 255);
        this.add(enemy3);

        const enemy4 = new Enemy();
        enemy4.pos = new Vector(441, 128);
        this.add(enemy4)

        const enemy5 = new windEnemy();
        enemy5.pos = new Vector(81, -42);
        this.add(enemy5);

        // Add tilemap
        engine.middleLevelMap.addToScene(this);

        this.ui = new UI()
        this.add(this.ui)




        // Setup camera
        this.camera.strategy.lockToActorAxis(player, Axis.X);
        this.camera.strategy.lockToActorAxis(player, Axis.Y);
        this.camera.zoom = 1.5;
    }
}