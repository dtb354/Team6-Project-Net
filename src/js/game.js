
import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Loader, ImageSource } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { TiledResource } from '@excaliburjs/plugin-tiled'

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        });
    }

    async startGame() {
        console.log("start de game!")

        const fish = new Actor();
        fish.graphics.use(Resources.Fish.toSprite());
        fish.pos = new Vector(500, 300);
        fish.vel = new Vector(-10, 0);
        fish.on("exitviewport", (e) => this.fishLeft(e));
        this.add(fish);

        const tileset = new ex.ImageSource(tileset)
        // Laad tilemap
        const tiledMap = new TiledResource('bg.tmx');

        await tiledMap.load();
        tiledMap.addToScene(this.currentScene);
    }


    fishLeft(e) {
        e.target.pos = new Vector(1350, 300);
    }
}

const game = new Game();
game.start(ResourceLoader).then(() => {
    game.startGame();
});


