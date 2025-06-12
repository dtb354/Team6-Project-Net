import { Actor, Animation, Keys, range, Vector } from "excalibur";
import { PlayerWalkingNorthWest, Resources } from "./resources";


export class Player extends Actor {
    runSpeed = 500;
    constructor() {
        super({
        })

        const northWest = Animation.fromSpriteSheet(PlayerWalkingNorthWest, range(0, 7), 100);


        this.graphics.add("northWest", northWest);
        this.graphics.use("northWest")

    }

    onInitialize() {

        this.pos = new Vector(600, 300);

    }

    onPreUpdate(engine, delta) {
        this.#northWest(engine)
    }

    #northWest(engine) {
        let xspeed = 0

        // Left movement
        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -this.runSpeed
            this.graphics.use("northWest")
            this.graphics.flipHorizontal = true
        }
    }
}