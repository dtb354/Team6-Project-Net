import { Actor, Animation, range, Vector } from "excalibur"
import { waterprojectile } from "./resources"
import { Player } from "./player"

export class waterball extends Actor {

    constructor(x, y) {
        super({ width: 30, height: 30 })


        const waterWapen = Animation.fromSpriteSheet(waterprojectile, range(0, 1), 100)
        this.graphics.add("weapon", waterWapen)
        this.graphics.use('weapon')
        // this.vel = new Vector(100, 0)
        this.pos = new Vector(x, y)



        this.on('collisionstart', (event) => this.hitSomething(event));
    }

    onInitialize(engine) {
        this.events.on("exitviewport", () => this.kill());
        console.log('bullet gone')
    }

    onPreUpdate(engine) {
        const player = engine.currentScene.actors.find(actor => actor instanceof Player)
        if (!player) return

        const direction = player.pos.sub(this.pos).normalize()
        this.vel = direction.scale(100)
    }

    hitSomething(event) {
        if (event.other.owner instanceof Player) {
            event.other.owner.reduceHealthOfPlayer()
            this.kill()
            console.log("huh")
        }
        this.z = 3;
    }

}

// import { Actor, Animation, range, Vector } from "excalibur"
// import { waterprojectile } from "./resources"
// import { Player } from "./player"

// export class waterball extends Actor {

//     constructor(x, y, player) {
//         super({
//             width: 30,
//             height: 30
//         })

//         // Voeg animatie toe
//         const waterWapen = Animation.fromSpriteSheet(waterprojectile, range(0, 1), 100)
//         this.graphics.add("weapon", waterWapen)
//         this.graphics.use("weapon")

//         // Zet startpositie
//         this.pos = new Vector(x, y)

//         // Bepaal richting naar speler op het moment van afvuren
//         const richting = player.pos.sub(this.pos).normalize().scale(150) // Pas 150 aan voor snelheid
//         this.vel = richting

//         // Botsingsdetectie
//         this.on('collisionstart', (event) => this.hitSomething(event))
//     }

//     onInitialize(engine) {
//         // Verwijder projectiel als het uit beeld is
//         this.events.on("exitviewport", () => {
//             this.kill()
//             console.log('bullet gone')
//         })
//     }

//     hitSomething(event) {
//         if (event.other.owner instanceof Player) {
//             event.other.owner.reduceHealthOfPlayer()
//             console.log("Speler geraakt")
//             this.kill()
//         }
//         this.z = 3
//     }
// }


