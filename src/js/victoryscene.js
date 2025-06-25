import { Color, Scene, Actor, Vector, Font, Label, Keys } from "excalibur";
import { Resources, ResourceLoader, } from './resources.js'

export class VictoryScreen extends Scene {


    onInitialize(engine){
        this.backgroundColor = Color.ExcaliburBlue;

        // Show victory image
        const victoryImage = Resources.victoryBadge.toSprite()
        const victoryActor = new Actor({
            pos: new Vector(640, 250), // center of 1280x720 screen
            anchor: new Vector(0.5, 0.5)
        })
        victoryActor.graphics.use(victoryImage)
        this.add(victoryActor)
        
        this.restartLabel = new Label({
            text: `PRESS ENTER TO GO TO MAIN MENU`,
            pos: new Vector(350, 400),
            font: new Font({
               size: 50,
                color: Color.White,
            })
        })
        this.add(this.restartLabel)
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            console.log("terug naar main menu");
            engine.goToScene('start-game');
        }
    }

}