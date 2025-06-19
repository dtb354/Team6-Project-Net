
import { Actor, Animation, range, Vector } from "excalibur"
import { waterprojectile } from "./resources"
import { Player } from "./player"

export class waterball extends Actor {

    constructor(x, y, player) {
        super({ width: 30, height: 30 })

        const waterWapen = Animation.fromSpriteSheet(waterprojectile, range(0, 1), 100)
        this.graphics.add("weapon", waterWapen)
        this.graphics.use("weapon")

        this.pos = new Vector(x, y)

        // Bepaal richting naar speler op moment van afvuren
        const richting = player.pos.sub(this.pos).normalize().scale(150)
        this.vel = richting

        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    onInitialize(engine) {
        this.events.on("exitviewport", () => {
            this.kill()
            console.log('bullet gone')
        })
    }

    hitSomething(event) {
        if (event.other.owner instanceof Player) {
            event.other.owner.reduceHealthOfPlayer()
            console.log("Speler geraakt")
            this.kill()
        }
        this.z = 3
    }
}
