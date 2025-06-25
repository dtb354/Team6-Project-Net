import { Color, Scene, Actor, Vector, Font, Label, Keys, Buttons } from "excalibur";
import { Resources, ResourceLoader, } from './resources.js'

export class VictoryScreen extends Scene {

    onActivate(ctx) {
        // Get the player's score from the previous scene
        const player = ctx.engine.player
        if (player && typeof player.score === "number") {
            const prevHighScore = Number(localStorage.getItem('highScore')) || 0
            if (player.score > prevHighScore) {
                localStorage.setItem('highScore', player.score)
            }
        }
    }


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