import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";
import { Enemy } from "./enemy";

export class Net extends Actor {
    constructor() {
        super({
            width: Resources.Net.width, height: Resources.Net.height,
            anchor: new Vector(0.5, 1),
            pos: new Vector(18, 16.5),
        });
        this.on('collisionstart', (event) => this.hitSomething(event));
        this.graphics.use(Resources.Net.toSprite());
    }

    attack() {
        this.actions.rotateBy(Math.PI / 2, 20).rotateTo(0, 20);
    }

    hitSomething(event) {
        if (event.other.owner instanceof Enemy && this.rotation !== 0) {
            // event.other.kill();
            console.log("huh")
        }
    }

    // checkFlipped() {
    //     const poly = this.collider.get();
    //     if (!poly._isCounterClockwiseWinding(poly.getTransformedPoints())) {
    //         poly.points.reverse();
    //         poly.flagDirty();
    //     }
    // }
}   