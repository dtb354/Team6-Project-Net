import { Actor, Animation, CollisionType, Color, Engine, range, Vector } from "excalibur";
import { waterAttacke, waterEnemyIdle } from "./resources";
import { Player } from "./player";
import { Net } from "./net";

export class Enemy extends Actor {

    state;
    hitpoints;
    healthbar;
    counter;

    constructor() {
        super({ width: 20, height: 33 })

        const waterEnemy = Animation.fromSpriteSheet(waterEnemyIdle, range(0, 3), 100)
        this.graphics.add("idle", waterEnemy)
        this.graphics.use(waterEnemy)

    }

    onInitialize(engine) {
        this.counter = 0;

        this.on("collisionstart", (event) => this.handleCollision(event));

        this.pos = new Vector(500, 600)

        this.state = "idle"

        this.hitpoints = 10
        // milan zegt doe dit
        this.z = 10;


        this.healthbar = new Actor({
            pos: new Vector(0, -45), // 25 pixels boven zijn hoofd
            color: Color.Green,
            width: 20,
            height: 4,
            anchor: new Vector(0.5, 0.5),
        });

        this.addChild(this.healthbar);
    }


    onPreUpdate(engine) {


        // different states different actions
        switch (this.state) {
            case ("idle"): {
                // console.log("pom pi dom")
                this.moveInSquare()
                // console.log('im moving ina squarw')
            }
            case ("angry"): {
                // console.log("im attacking the bitchass")
            }
        }

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
        else if (distance < 1) {
            const waterAttack = Animation.fromSpriteSheet(waterAttacke, range(0, 4), 100)
            this.graphics.add("attack", waterAttack)
            this.graphics.use(waterAttack)
        }

        // this.moveInSquare()

    }

    moveInSquare() {
        this.counter++;
        if (this.counter < 10) {
            this.vel = new Vector(0, -1).scale(30);  // omhoog
        }
        else if (this.counter < 30) {
            this.vel = new Vector(1, 0).scale(30);   // rechts
        }
        else if (this.counter < 50) {
            this.vel = new Vector(0, 1).scale(30);   // omlaag
        }
        else if (this.counter < 70) {
            this.vel = new Vector(-1, 0).scale(30);  // links
        }
        else {
            this.counter = 0; // reset counter na rondje
        }

        // console.log(this.counter)

    }


    // onPreUpdate(engine) {

    // }

    reduceHealth() {
        this.hitpoints--;
        const percent = Math.max(this.hitpoints / 10, 0);
        this.healthbar.scale = new Vector(percent, 1);

        if (this.hitpoints <= 0) {
            this.death()
            console.log("enemy is dead")
        }

        else if (percent < 0.5) {
            this.healthbar.color = Color.Red;
        }

    }

    death() {
        this.kill()
    }

    attack() {
        const waterAttack = Animation.fromSpriteSheet(waterAttacke, range(0, 4), 100)
        this.graphics.add("attack", waterAttack)
        this.graphics.use(waterAttack)
    }

    handleCollision(event) {

        if (event.other.owner instanceof Net) {
            this.reduceHealth()
            this.attack()
            // console.log('collission')


        }
    }





}