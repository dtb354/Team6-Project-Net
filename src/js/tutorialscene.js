import { Scene, Vector } from "excalibur";
import { Player } from "./player";

export class TutorialScene extends Scene {
    game;
    player;

    onInitialize(engine) {
        this.player = new Player();
        this.player.pos = new Vector(226, 450); // coordinates from tmx file
        this.add(this.player);
    }
}