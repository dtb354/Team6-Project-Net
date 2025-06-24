import { Actor, Animation, CollisionType, range } from "excalibur";
import { bossIdleMovement } from "./resources";

export class Boss extends Actor {
    pillarCount = 4;

    constructor() {
        super({
            width: 20,
            height: 33,
            collisionType: CollisionType.Active,
        })


        const bossIdle = Animation.fromSpriteSheet(bossIdleMovement, range(0, 3), 100)
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