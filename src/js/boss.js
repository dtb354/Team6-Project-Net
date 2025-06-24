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
}