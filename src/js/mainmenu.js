import { Buttons, Color, Font, Keys, Label, Scene, Vector } from "excalibur";

export class Mainmenu extends Scene {


    onInitialize(engine) {
        this.input.gamepads.enabled = true
        this.input.gamepads.on('connect', (connectevent) => {
            console.log("gamepad detected")
            engine.mygamepad = connectevent.gamepad
        })

        this.backgroundColor = Color.Purple
        this.nameOfGame = new Label({
            text: `Purify`,
            pos: new Vector(100, 300),
            font: new Font({
                size: 80,
                color: Color.Green
            })

        })
        this.startGame = new Label({
            text: `Press the A button to continu`,
            pos: new Vector(100, 400),
            font: new Font({
                size: 80,
                color: Color.Pink
            })

        })

        this.add(this.nameOfGame);
        this.add(this.startGame);
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