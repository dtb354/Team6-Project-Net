import { Animation, range } from "excalibur"
import { Enemy } from "./enemy"
import { waterShinyIdleFront, waterShinyIdleBack, waterShinyAttackFront, waterShinyAttackBack } from "./resources"
import { Player } from "./player";

export class ShinyWaterEnemy extends Enemy {

    value = 1000;

    onInitialize(engine) {
        // Idle animatie vooraanzicht
        const idle = Animation.fromSpriteSheet(waterShinyIdleFront, range(0, 3), 100)
        this.graphics.add("idle", idle)

        // Idle animatie achteraanzicht
        const idleBack = Animation.fromSpriteSheet(waterShinyIdleBack, range(0, 3), 100)
        this.graphics.add("idleBack", idleBack)

        // Aanval animatie vooraanzicht
        const attack = Animation.fromSpriteSheet(waterShinyAttackFront, range(0, 4), 200)
        this.graphics.add("attack", attack)

        // Aanval animatie achteraanzicht
        const backAttack = Animation.fromSpriteSheet(waterShinyAttackBack, range(0, 4), 200)
        this.graphics.add("backAttack", backAttack)

        this.graphics.use("idle")
        super.onInitialize(engine)
    }

    addPoint() {

        const player = this.scene.actors.find(actor => actor instanceof Player)
        if (player) {
            player.getPoints(this.value)
        }
    }

    reduceHealth() {

        this.hitpoints--
        if (this.hitpoints <= 0) {
            this.addPoint()

            this.kill()
        }
    }

}