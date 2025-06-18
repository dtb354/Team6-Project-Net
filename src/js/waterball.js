import { Actor, Animation, range, Vector } from "excalibur"
import { waterprojectile } from "./resources"
import { Player } from "./player"

export class waterball extends Actor {
    constructor(x, y) {
        super({ width: 30, height: 30 })
        const waterWapen = Animation.fromSpriteSheet(waterprojectile, range(0, 1), 100)
        this.graphics.add("weapon", waterWapen)
        this.graphics.use('weapon')
        this.vel = new Vector(100, 0)
        this.pos = new Vector(x, y)

        this.on('collisionstart', (event) => this.hitSomething(event));
    }

    hitSomething(event) {
        if (event.other.owner instanceof Player) {
            event.other.owner.reduceHealthOfPlayer()
            console.log("huh")
        }
        this.z = 3;
    }

}