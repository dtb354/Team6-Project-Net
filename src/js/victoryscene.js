import { Color, Scene, Actor, Vector, Font, Label, Keys, Buttons } from "excalibur";
import { Resources, ResourceLoader, } from './resources.js'

export class VictoryScreen extends Scene {


    onInitialize(engine) {

        this.input.gamepads.enabled = true
        this.input.gamepads.on('connect', (connectevent) => {
            console.log("gamepad detected")
            engine.mygamepad = connectevent.gamepad
        })

        const banner = new Actor({
            pos: new Vector(610, 360),

        })
        banner.graphics.use(Resources.victoryBanner.toSprite())
        this.add(banner);

        // this.backgroundColor = Color.ExcaliburBlue;

        // // Show victory image
        // const victoryImage = Resources.victoryBadge.toSprite()
        // const victoryActor = new Actor({
        //     pos: new Vector(640, 250), // center of 1280x720 screen
        //     anchor: new Vector(0.5, 0.5)
        // })
        // victoryActor.graphics.use(victoryImage)
        // this.add(victoryActor)

        // this.restartLabel = new Label({
        //     text: `PRESS ENTER TO GO TO MAIN MENU`,
        //     pos: new Vector(350, 400),
        //     font: new Font({
        //         size: 50,
        //         color: Color.White,
        //     })
        // })
        // this.add(this.restartLabel)

        // this.winLabel = new Label({
        //     text: `YOU HAVE WON`,
        //     pos: new Vector(100, 200),
        //     font: new Font({
        //         size: 50,
        //         color: Color.White,
        //     })
        // })
        // this.add(this.winLabel)
    }

    onPreUpdate(engine) {

        if (engine.mygamepad && engine.mygamepad.wasButtonPressed(Buttons.Face1)) {
            window.location.reload()

        }

        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            window.location.reload()
        }
    }

}