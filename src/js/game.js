
import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Loader, ImageSource, Axis } from "excalibur"
import { TiledResource } from '@excaliburjs/plugin-tiled'
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player.js'
import { Enemy } from './enemy.js'

export class Game extends Engine {

    mygamepad


    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })

        // Create the tilemap resource
        this.tileMap = new TiledResource("/maps/starting_area.tmx")
        // Add it to the resource loader
        ResourceLoader.addResource(this.tileMap)

        this.start(ResourceLoader).then(() => this.startGame())
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

        this.currentScene.camera.strategy.lockToActorAxis(player, Axis.X);
        this.currentScene.camera.strategy.lockToActorAxis(player, Axis.Y);
        this.currentScene.camera.zoom = 1.5;

        const waterEnemy = new Enemy();
        this.add(waterEnemy)
    }
}

const game = new Game();

// new Game()
