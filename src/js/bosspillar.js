import { Actor, Animation, AnimationStrategy, CollisionType, Color, Engine, range, Shape, TextureLoader, Timer, Vector } from "excalibur";
import { Boss } from "./boss";
import { pillarWater } from "./resources";
import { Net } from "./net";

export class BossPillar extends Actor {
    hitpoints; 
    healthbar;

    constructor() {
        super({
            width: 32, // set width of collision box
            height: 96, // set height of collision box
            collisionType: CollisionType.Fixed,  
        })

        const waterPillar = Animation.fromSpriteSheet(pillarWater, range(0, 4), 100);
        this.graphics.add("standing", waterPillar);
        this.graphics.use("standing");

    }

    onInitialize() {
        this.hitpoints = 20;

        this.healthbar = new Actor({
                    pos: new Vector(0, -45), // 25 pixels boven zijn hoofd
                    color: Color.Green,
                    width: 20,
                    height: 4,
                    anchor: new Vector(0.5, 0.5),
                    collisionType: CollisionType.PreventCollision,
                });

        this.addChild(this.healthbar);

        // Listen for collisions
        this.on('collisionstart', (event) => this.handleCollision(event))
    }

    handleCollision(event) {
        // Only react if hit by Net
        if (event.other instanceof Net) {
            this.reduceHealth()
            console.log("BossPillar hit by Net!")
        }
    }

    reduceHealth() {
        console.log("pillar health reduced");
        this.hitpoints--;
        const percent = Math.max(this.hitpoints / 10, 0);
        this.healthbar.scale = new Vector(percent, 1)

        if (this.hitpoints <= 0) {
            const boss = this.scene.actors.find(actor => actor instanceof Boss);
            if (boss) {
                boss.losePillar();
            }
            this.kill()
        }
    }
}