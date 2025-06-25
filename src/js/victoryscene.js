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