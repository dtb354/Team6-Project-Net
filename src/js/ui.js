import { Actor, Color, Vector } from "excalibur";

export class UI extends Actor {
    healthbar;

    onInitialize(engine) {
        this.healthbar = new Actor({ x: 10, y: 40, color: Color.Green, width: 200, height: 20, anchor: new Vector(0, 0) })
        this.addChild(this.healthbar)
    }

    showHealth(percent) {
        this.healthbar.scale = new Vector(percent, 1)
    }
}