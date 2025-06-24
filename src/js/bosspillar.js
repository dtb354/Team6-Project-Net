import { Actor, CollisionType } from "excalibur";
import { Boss } from "./boss";

export class BossPillar extends Actor {
    hitpoints; 
    healthbar;

    constructor() {
        super({
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
                });

        this.addChild(this.healthbar);
    }

    reduceHealth() {
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