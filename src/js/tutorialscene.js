import { Scene, Vector, Axis } from "excalibur";
import { Player } from "./player";
import { Enemy } from "./enemy";

export class TutorialScene extends Scene {
    game;
    player;

    onInitialize(engine) {
        // Create player only once
        const player = new Player();
        this.add(player);

        // Create an Enemy only once
        const enemy = new Enemy();
        this.add(enemy);

        // Add tilemap
        engine.tileMap.addToScene(this);

        // Setup camera
        this.camera.strategy.lockToActorAxis(player, Axis.X);
        this.camera.strategy.lockToActorAxis(player, Axis.Y);
        this.camera.zoom = 1.5;
    }
}