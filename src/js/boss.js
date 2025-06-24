import { Actor, Animation, CollisionType, range, Vector } from "excalibur";
import { bossIdleMovement } from "./resources";
import { Player } from "./player";
import { Fireball } from "./fireball";

export class Boss extends Actor {
    pillarCount = 4;

    shootingTimer = 0;
    constructor() {
        super({
            width: 20,
            height: 33,
            collisionType: CollisionType.Fixed,
        })

        this.shootCooldown = 0;
        const bossIdle = Animation.fromSpriteSheet(bossIdleMovement, range(0, 3), 100)
        this.graphics.add("idle", bossIdle)
        this.graphics.use(bossIdle)

        this.scale = new Vector(0.7, 0.7);
    }

    onInitialize() {
        this.z = 3;
        this.shootCooldown = 0;
    }

    onPreUpdate(engine) {
        if (this.shootCooldown <= 0) {
            this.shootCooldown = 0;
            this.shoot(engine);
            this.shootCooldown = 40;
        }

        if (this.shootCooldown > 0) {
            this.shootCooldown--;
        }
    }

    losePillar() {
        this.pillarCount--;
        console.log(this.pillarCount);

        if (this.pillarCount <= 0) {
            this.victoryHandler();
        }
    }

    victoryHandler() { //When pillarcount hits 0, something happens to show victory
        console.log("All pillars are gone")
    }

    shoot(engine) {
        const player = engine.currentScene.actors.find(actor => actor instanceof Player)
        if (!player) return

        const fireWeapon = new Fireball(this.pos.x, this.pos.y, player)
        engine.currentScene.add(fireWeapon)
    }

}