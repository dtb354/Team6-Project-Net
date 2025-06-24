import { Actor, Animation, CollisionType, range, Vector } from "excalibur";
import { bossIdleMovement } from "./resources";

export class Boss extends Actor {
    pillarCount = 4;

    constructor() {
        super({
            width: 20,
            height: 33,
            collisionType: CollisionType.Fixed,
        })


        const bossIdle = Animation.fromSpriteSheet(bossIdleMovement, range(0, 3), 100)
        this.graphics.add("idle", bossIdle)
        this.graphics.use(bossIdle)

        this.scale = new Vector(0.7, 0.7);
    }

    onInitialize() {
        this.z = 3;
    }

    losePillar() {
        this.pillarCount--;
        console.log(this.pillarCount);

        if (this.pillarCount <= 0) {
            this.victoryHandler();
        }
    }

    victoryHandler() { //When pillarcount hits 0, something happens to show victory
        console.log("All pillars are gone")
    }
}