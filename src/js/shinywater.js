import { Animation, range } from "excalibur"
import { Enemy } from "./enemy"
import { waterShinyIdleFront, waterShinyIdleBack, waterShinyAttackFront, waterShinyAttackBack } from "./resources"

export class ShinyWaterEnemy extends Enemy {
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
}