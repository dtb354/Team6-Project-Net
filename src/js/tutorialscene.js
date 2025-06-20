import { Scene, Vector, Axis, Actor, Color, CollisionType } from "excalibur";
import { Player } from "./player.js";
import { Enemy } from "./enemy";
import { waterball } from "./waterball";
import { windEnemy } from "./wind_enemy";
import { Portal } from "./portal.js";

export class TutorialScene extends Scene {
    game;
    player;

    onInitialize(engine) {

        this.input.gamepads.enabled = true
        this.input.gamepads.on('connect', (connectevent) => {
            console.log("gamepad detected")
            engine.mygamepad = connectevent.gamepad
        })


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
        wenemy.pos = new Vector(350, 100)
        this.add(wenemy);

        // Create portal rectangle
        const portal = new Portal("next", new Vector(270, -33));
        this.add(portal);
        
        // Add tilemap
        engine.tutorialMap.addToScene(this);

        
        
        



        // Setup camera
        this.camera.strategy.lockToActorAxis(player, Axis.X);
        this.camera.strategy.lockToActorAxis(player, Axis.Y);
        this.camera.zoom = 1.5;
    }
}