import { Actor, Animation, Engine, range, Vector } from "excalibur";
import { waterAttacke, waterEnemyIdle } from "./resources";
import { Player } from "./player";

export class Enemy extends Actor {

    state


    constructor() {
        super({ width: 20, height: 33 })

        const waterEnemy = Animation.fromSpriteSheet(waterEnemyIdle, range(0, 3), 100)
        this.graphics.add("idle", waterEnemy)
        this.graphics.use(waterEnemy)

    }

    onInitialize(engine) {

        this.on("collisionstart", (event) => this.handleCollision(event));

        this.pos = new Vector(500, 600)
        // this.pos = this.moveInSquare()
        this.state = "idle"

        // milan zegt doe dit
        this.z = 10;
    }


    onPreUpdate(engine) {


        // different states different actions
        // switch (this.state) {
        //     case ("idle"): {
        //         console.log("pom pi dom")
        //     }
        //     case ("angry"): {
        //         console.log("yarrrr!")
        //     }
        // }

        // calculate the distance between player & enemy
        const distance = Vector.distance(engine.player.pos, this.pos)

        if (distance < 200) {



            // follow the player
            let direction = engine.player.pos.sub(this.pos).normalize();
            this.vel = direction.scale(80)

            // change spritesheet to attack mode
            const waterAttack = Animation.fromSpriteSheet(waterAttacke, range(0, 4), 100)
            this.graphics.add("attack", waterAttack)
            this.graphics.use(waterAttack)

            this.state = "angry"

        }

    }

    // moveInSquare() {
    //     new Vector(0, -1),  // omhoog
    //         new Vector(1, 0),   // rechts
    //         new Vector(0, 1),   // omlaag
    //         new Vector(-1, 0),  // links

    // }


    // onPreUpdate(engine) {

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





}