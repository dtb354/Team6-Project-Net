import { Actor, Vector, Color, CollisionType } from "excalibur"
import { Player } from "./player"

export class Portal extends Actor {
    constructor(destination, pos) {
        super({
            width: 80,
            height: 40,
            pos: pos,
            color: Color.Magenta,
            collisionType: CollisionType.Passive
        })
        this.destination = destination; // scene key to go to
        this.z = 3; // draw above most layers
    }

    onInitialize(engine) {
        this.engine = engine;
        this.graphics.opacity = 0;
        // Listen for collision events
        this.on("collisionstart", (event) => this.hitSomething(event));
    }

    hitSomething(event) {
        if (event.other.owner instanceof Player) {
            console.log("Portaal geraakt");
            this.engine.goToScene(this.destination);
        }
    }
}