import { Animation, range } from "excalibur"
import { windShinyIdleFront, windShinyIdleBack, windShinyAttackFront, windShinyAttackBack } from "./resources"
import { windEnemy } from "./wind_enemy"
import { Player } from "./player";

export class ShinyWindEnemy extends windEnemy {

    value = 1500;

    constructor() {
        super();
    }

    onInitialize(engine) {

        const idle = Animation.fromSpriteSheet(windShinyIdleFront, range(0, 3), 100)
        this.graphics.add("idle", idle)

        const idleBack = Animation.fromSpriteSheet(windShinyIdleBack, range(0, 3), 100)
        this.graphics.add("idleBack", idleBack)

        const attack = Animation.fromSpriteSheet(windShinyAttackFront, range(0, 4), 200)
        this.graphics.add("attack", attack)

        const backAttack = Animation.fromSpriteSheet(windShinyAttackBack, range(0, 4), 200)
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
