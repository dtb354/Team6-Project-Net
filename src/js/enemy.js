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

        this.state = "idle"

        // milan zegt doe dit
        this.z = 10;
    }


    onPreUpdate(engine) {
        // let direction = this.sub(this.enemy.pos).normalize()
        // this.vel = direction.scale(200)

        // let direction = this.sub(engine.player.pos).normalize()
        const distance = Vector.distance(engine.player.pos, this.pos)
        if (distance < 200) {


            let direction = engine.player.pos.sub(this.pos).normalize();
            this.vel = direction.scale(80)

            // this.state = "angry"
        } else {
            // this.pos = new Vector(500, 600)
        }



    }

    // moveInSquare() {
    //     this.vel = new Vector(0, 0)

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