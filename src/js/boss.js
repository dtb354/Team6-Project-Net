import { Actor, Animation, CollisionType, range, Vector } from "excalibur";
import { bossIdleMovement } from "./resources";

export class Boss extends Actor {

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
}