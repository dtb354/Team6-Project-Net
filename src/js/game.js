
import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Loader, ImageSource } from "excalibur"
import { TiledResource } from '@excaliburjs/plugin-tiled'
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })

        // Create the tilemap resource
        this.tileMap = new TiledResource("/maps/bg.tmx")
        // Add it to the resource loader
        ResourceLoader.addResource(this.tileMap)

        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        // Add the tilemap to the scene
        this.tileMap.addToScene(this.currentScene);

        const player = new Player();
        this.add(player);
    }
}

const game = new Game();


