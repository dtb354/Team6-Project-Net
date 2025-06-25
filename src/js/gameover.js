import { Actor, Buttons, Color, Font, Keys, Label, Scene, Vector } from "excalibur";
import { Resources } from "./resources";

export class GameOver extends Scene {

    gameOverLabel;
    restartLabel;

    onInitialize(engine) {

        this.input.gamepads.enabled = true
        this.input.gamepads.on('connect', (connectevent) => {
            console.log("gamepad detected")
            engine.mygamepad = connectevent.gamepad
        })

        const banner = new Actor({
            pos: new Vector(610, 360),

        })
        banner.graphics.use(Resources.gameOverBanner.toSprite())
        this.add(banner);

        // this.backgroundColor = Color.Black;
        // this.gameOverLabel = new Label({
        //     text: `GAME OVER`,
        //     pos: new Vector(300, 250),
        //     font: new Font({
        //         size: 100,
        //         color: Color.Red
        //     })

        // })

        // this.restartLabel = new Label({
        //     text: `PRESS ENTER TO RESTART GAME`,
        //     pos: new Vector(350, 400),
        //     font: new Font({
        //         size: 50,
        //         color: Color.White
        //     })
        // })

        // this.add(this.restartLabel);
        // this.add(this.gameOverLabel);


    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            window.location.reload();
        }

        if (engine.mygamepad && engine.mygamepad.wasButtonPressed(Buttons.Face1)) {
            window.location.reload();
        }
    }

    onActivate(ctx) {
        // this.resetGame()
    }

    // onActivate() {
    //     // Optional: clear any old actors if needed
    //     this.clear();
    // }

}