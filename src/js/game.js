
import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Loader, ImageSource, Axis } from "excalibur"
import { TiledResource } from '@excaliburjs/plugin-tiled'
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player.js'
import { Enemy } from './enemy.js'
import { UI } from './ui.js'

export class Game extends Engine {

    mygamepad;
    player;
    waterEnemy;
    ui;

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })

        // Create the tilemap resource
        this.tileMap = new TiledResource("/maps/tutorial_area_v1.tmx")
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

        this.player = new Player({ x: 200, y: 100 });
        this.add(this.player);


        this.currentScene.camera.strategy.lockToActorAxis(this.player, Axis.X);
        this.currentScene.camera.strategy.lockToActorAxis(this.player, Axis.Y);
        this.currentScene.camera.zoom = 1.5;

        this.ui = new UI();
        this.add(this.ui);

        const waterEnemy = new Enemy();
        this.add(waterEnemy);


    }



}

const game = new Game();

// new Game()
