import { Actor, Color, Font, Label, ScreenElement, Vector } from "excalibur";

export class UI extends ScreenElement {
    label;

    onInitialize(engine) {
        this.label = new Label({

            pos: new Vector(47, 30),
            font: new Font({
                size: 20,
                family: 'Open Sans',
                color: Color.White

            })

        })
        this.z = 90;
        this.addChild(this.label);
    }

    updateScore(score) {
        this.label.text = `Score: ${score}`;
    }
}