import { Actor, Color, Font, Label, ScreenElement, Vector } from "excalibur";

export class UI extends ScreenElement {
    label;
    player;

    constructor(player) {
        super()

        this.player = player
    }
    onInitialize(engine) {
        this.label = new Label({

            text: `Score: ${this.scene.engine.playerProgress.score}`,
            pos: new Vector(47, 30),
            font: new Font({
                size: 50,
                family: 'Open Sans',
                color: Color.White

            })

        })
        this.z = 20;
        this.addChild(this.label);
    }

    updateScore() {
        console.log(this.player);
        this.label.text = `Score: ${this.scene.engine.playerProgress.score}`;


        // if (!this.label) return; // prevent crash
        // this.label.text = `Score: ${this.player.score}`;
    }
}