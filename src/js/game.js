import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Loader, ImageSource } from "excalibur"
import { TiledResource } from '@excaliburjs/plugin-tiled'
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player.js'
// import { Enemy } from './enemy.js'

export class Game extends Engine {

    mygamepad


    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })

        // Create the tilemap resource with the correct path
        this.tileMap = new TiledResource("maps/bg.tmx")
        
        // Create a new loader and add the tilemap
        const loader = new Loader([this.tileMap])

        
        
        // Start the game with the loader
        this.start(loader).then(() => this.startGame())
    }

    startGame() {
        this.input.gamepads.enabled = true
        this.input.gamepads.on('connect', (connectevent) => {
            console.log("gamepad detected")
            this.mygamepad = connectevent.gamepad
        })

        // Add the tilemap to the scene
        this.tileMap.addToScene(this.currentScene);

        const player = new Player();
        this.add(player);

<<<<<<< HEAD
=======


>>>>>>> 34f5616e8b3a9a272338cb8f8d98025467144efb
        // const waterEnemy = new Enemy();
        // this.add(waterEnemy)
    }
}

const game = new Game();


