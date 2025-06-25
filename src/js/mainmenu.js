import { Actor, Buttons, Color, Font, Graphic, Keys, Label, Scene, Vector } from "excalibur";
import { Resources } from "./resources";

export class Mainmenu extends Scene {


    onInitialize(engine) {
        this.input.gamepads.enabled = true
        this.input.gamepads.on('connect', (connectevent) => {
            console.log("gamepad detected")
            engine.mygamepad = connectevent.gamepad
        })

        const banner = new Actor({
            pos: new Vector(610, 360),

        })
        banner.graphics.use(Resources.mainMenuBanner.toSprite())
        this.add(banner);

        // this.backgroundColor = Color.Purple
        // this.nameOfGame = new Label({
        //     text: `Purify`,
        //     pos: new Vector(100, 300),
        //     font: new Font({
        //         size: 80,
        //         color: Color.Green
        //     })

        // })
        // this.startGame = new Label({
        //     text: `Press A to continue`,
        //     pos: new Vector(100, 400),
        //     font: new Font({
        //         size: 80,
        //         color: Color.Pink
        //     })

        // })

        // this.add(this.nameOfGame);
        // this.add(this.startGame);
    }

    onPreUpdate(engine) {

        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            console.log("go to tutorial level")
            engine.goToScene('tutorial');
        }

        if (engine.mygamepad && engine.mygamepad.wasButtonPressed(Buttons.Face1)) {
            console.log("go to tutorial level")
            engine.goToScene('tutorial');
        }
    }
}