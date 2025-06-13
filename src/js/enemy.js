import { Actor, Animation, range, Vector } from "excalibur";
import { waterAttacke, waterEnemyIdle } from "./resources";
import { Player } from "./player";

export class Enemy extends Actor {

    state

    constructor() {
        super({ width: 20, height: 33 })

    }

    onInitialize() {

        this.on("collisionstart", (event) => this.handleCollision(event));

        const waterEnemy = Animation.fromSpriteSheet(waterEnemyIdle, range(0, 3), 100)
        this.graphics.add("idle", waterEnemy)
        this.graphics.use(waterEnemy)


        this.pos = new Vector(500, 600)

        this.state = "idle"
    }


    // moveInSquare() {
    //     this.vel = new Vector(0, 0)

    // }


    attack() {
        const waterAttack = Animation.fromSpriteSheet(waterAttacke, range(0, 4), 100)
        this.graphics.add("attack", waterAttack)
        this.graphics.use(waterAttack)
    }

    handleCollision(event) {

        if (event.other.owner instanceof Player) {

            this.attack()
            // console.log('collission')

        }
    }



    // onPreUpdate(engine) {
    //     const distance = Vector.distance(engine.player.pos, this.pos)
    //     if (distance < 200) {
    //         this.state = "angry"
    //     }
    // }


}