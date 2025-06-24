import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "./resources";
import { Enemy } from "./enemy";
import { BossPillar } from "./bosspillar";

export class Net extends Actor {
    constructor(player) {
        super({
            width: Resources.net.width, height: Resources.net.height,
            anchor: new Vector(0.5, 1),
            // pos: new Vector(18, 16.5),
        });
        this.on('collisionstart', (event) => this.hitSomething(event));
        // this.graphics.use(Resources.Net.toSprite());
        this.player = player
        // console.log(this.player.attackDirection)
    }

    onInitialize(engine) {
        this.engine = engine;
        this.graphics.opacity = 0;
    }

    attack() {
        this.graphics.use(Resources.net.toSprite());
        Resources.netSlash.play()

        this.graphics.flipHorizontal = false
        this.graphics.flipVertical = false

        if (this.player.attackDirection === "East" || this.player.attackDirection === "North") {

            this.actions.rotateBy(Math.PI / 2, 20).rotateTo(0, 20);
        }

        if (this.player.attackDirection === "West") {
            this.graphics.flipHorizontal = true;
            this.actions.rotateBy(-Math.PI / 2, 20).rotateTo(0, 20);
        }

        if (this.player.attackDirection === "South") {
            this.graphics.flipHorizontal = true;
            this.actions.rotateBy(-Math.PI / 2, 20).rotateTo(0, 20);
        }
    }

    hitSomething(event) {
        if (event.other.owner instanceof Enemy && this.rotation !== 0) {
            event.other.owner.reduceHealth();
            console.log("huh");
        }

        if (event.other.owner instanceof BossPillar && this.rotation !== 0) {
            event.other.owner.reduceHealth();
            console.log("BossPillar hit by Net!");
        }
    }
}   