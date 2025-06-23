import { Color, Font, Keys, Label, Scene, Vector } from "excalibur";

export class GameOver extends Scene {

    gameOverLabel;
    restartLabel;

    onInitialize(engine) {
        this.backgroundColor = Color.Black;
        this.gameOverLabel = new Label({
            text: `GAME OVER`,
            pos: new Vector(300, 250),
            font: new Font({
                size: 100,
                color: Color.Red
            })

        })

        this.restartLabel = new Label({
            text: `PRESS ENTER TO RESTART GAME`,
            pos: new Vector(350, 400),
            font: new Font({
                size: 50,
                color: Color.White
            })
        })

        this.add(this.restartLabel);
        this.add(this.gameOverLabel);


    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            console.log("terug naar tutorial")
            engine.goToScene('tutorial');


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