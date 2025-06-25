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

    onInitialize(engine) {
        this.engine = engine
        this.z = 3;
        this.shootCooldown = 0;
    }

    onPreUpdate(engine) {
        if (this.shootCooldown <= 0) {
            this.shootCooldown = 0;
            this.shoot(engine);
            this.shootCooldown = 60;
        }

        if (this.shootCooldown > 0) {
            this.shootCooldown--;
        }
    }

    losePillar() {
        this.pillarCount--;
        console.log("A pillar has been destroyed AAAAAAAAAAAAHHHHHHHHHH");
        console.log(this.pillarCount);

        if (this.pillarCount <= 0) {
            this.victoryHandler();
        }
    }

    victoryHandler() { //When pillarcount hits 0, something happens to show victory
        console.log("All pillars are gone")
        //Victory screen like l**gue of l*gends \/
        this.engine.goToScene('victoryScreen');
    }

    shoot(engine) {
        // const player = engine.currentScene.actors.find(actor => actor instanceof Player)
        // if (!player) return

        // const fireWeapon = new Fireball(this.pos.x, this.pos.y, player)
        // engine.currentScene.add(fireWeapon)

        const player = engine.currentScene.actors.find(actor => actor instanceof Player)
        if (!player) return

        const origin = this.pos
        const direction = player.pos.sub(origin).normalize()


        // 3 richtingen: midden, links, rechts
        const angles = [0, Math.PI / 12, -Math.PI / 12] // 0°, 15°, -15°

        for (const angle of angles) {
            const rotatedDirection = direction.rotate(angle).scale(150)
            const fireball = new Fireball(origin.x, origin.y, rotatedDirection)
            engine.currentScene.add(fireball)

        }


    }

}