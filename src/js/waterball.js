import { Actor, Animation, range, Vector } from "excalibur"
import { waterprojectile } from "./resources"

export class waterball extends Actor {
    constructor(x, y) {
        super({ width: 30, height: 30 })
        const waterWapen = Animation.fromSpriteSheet(waterprojectile, range(0, 1), 100)
        this.graphics.add("weapon", waterWapen)
        this.graphics.use('weapon')
        this.vel = new Vector(100, 0)
        this.pos = new Vector(x, y)
    }
}