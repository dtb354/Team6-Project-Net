import { Scene, Vector, Axis, Actor, Color, CollisionType } from "excalibur";
import { Player } from "./player.js";
import { Enemy } from "./enemy";
import { waterball } from "./waterball";
import { windEnemy } from "./wind_enemy";

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

        // Add tilemap
        engine.tutorialMap.addToScene(this);

        // Create portal rectangle
        const portal = new Actor({
            pos: new Vector(270, -33), // set portal position
            width: 80,
            height: 40,
            color: Color.Magenta,
            collisionType: CollisionType.Passive
        })
        portal.z = 20;
        this.add(portal)

        // Switch to NextScene on collision with player
        portal.on("collisionstart", (evt) => {
            if (evt.other instanceof Player) {
                console.log("portal entered to middle level")
                engine.goToScene("next")
            }
        })



        // Setup camera
        this.camera.strategy.lockToActorAxis(player, Axis.X);
        this.camera.strategy.lockToActorAxis(player, Axis.Y);
        this.camera.zoom = 1.5;
    }
}