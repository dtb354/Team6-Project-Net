import { Actor, Animation, range, Vector } from "excalibur";
import { WaterBottleHealthPack } from "./resources";
import { Player } from "./player";

export class Waterbottle extends Actor {
    constructor() {
        super({
            width: 32,
            height: 32,
        })
    }

    onInitialize() {
        console.log("SPAWN")
        const waterB = Animation.fromSpriteSheet(WaterBottleHealthPack, range(0, 2), 70)
        this.graphics.add("waterB", waterB);
        this.graphics.use("waterB");
        this.z = 3;

        this.on("collisionstart", (event) => this.handleCollisionForHealth(event));
    }

    handleCollisionForHealth(event) {
        if (event.other.owner instanceof Player) {
            event.other.owner.increaseHealthOfPlayer()
            this.kill()
        }
    }
}