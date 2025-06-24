import { Actor, Color, Font, Label, ScreenElement, Vector } from "excalibur";
import { Resources } from "./resources";

export class UI extends ScreenElement {
    label;
    player;
    AIcon
    bIcon;
    netIcon;
    dodgeIcon;




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

        //a button icon
        this.AIcon = new Actor({
            pos: new Vector(1180, 600),
            anchor: new Vector(0.5, 0.48)

        })

        this.AIcon.graphics.use(Resources.aButton.toSprite());
        this.addChild(this.AIcon)

        //b button icon
        this.BIcon = new Actor({
            pos: new Vector(1250, 600),

        })

        this.BIcon.graphics.use(Resources.bButton.toSprite());
        this.addChild(this.BIcon)

        //net icon
        this.netIcon = new Actor({
            pos: new Vector(1180, 550),
            scale: new Vector(2, 2),
            rotation: Math.PI / 4,

        })

        this.netIcon.graphics.use(Resources.uiNet.toSprite());
        this.addChild(this.netIcon)

        //dodge icon
        this.dodgeIcon = new Actor({
            pos: new Vector(1250, 545),
            scale: new Vector(0.1, 0.1),
            rotation: Math.PI / 4,

        })
        this.dodgeIcon.graphics.use(Resources.uiDodge.toSprite());

        this.addChild(this.dodgeIcon)

    }

    updateScore() {
        console.log(this.player);
        this.label.text = `Score: ${this.scene.engine.playerProgress.score}`;


        // if (!this.label) return; // prevent crash
        // this.label.text = `Score: ${this.player.score}`;
    }
}