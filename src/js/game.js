import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Loader, ImageSource, Axis, SolverStrategy } from "excalibur"
import { TiledResource } from '@excaliburjs/plugin-tiled'
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player.js'
import { Enemy } from './enemy.js'
import { TutorialScene } from './tutorialscene.js'
import { Next } from './middle_stage_left.js'
import { UI } from './ui.js'
import { GameOver } from './gameover.js'


export class Game extends Engine {
    mygamepad;
    player;
    waterEnemy;
    ui;
    lowtaperfade;

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
        })
        this.tutorialMap = new TiledResource("/maps/tutorial_area_v1.tmx");
        ResourceLoader.addResource(this.tutorialMap);

        this.middleLevelMap = new TiledResource("/maps/level_1-1.tmx");
        ResourceLoader.addResource(this.middleLevelMap);
    }

    async start() {
        await super.start(ResourceLoader);
        const tutorialScene = new TutorialScene();
        this.addScene('tutorial', tutorialScene);
        const next = new Next();
        this.addScene("next", next);
        this.goToScene('tutorial');

        const gameOver = new GameOver();
        this.add('game-over', gameOver);

    }

    initializeGame() {
        this.input.gamepads.enabled = true
        this.input.gamepads.on('connect', (connectevent) => {
            console.log("gamepad detected")
            this.mygamepad = connectevent.gamepad
        })

        const player = new Player()


        // add score
        // const ui = new UI(player);
        // this.add(ui)


        //     // Create player and enemy
        //     this.player = new Player()
        //this.waterEnemy = new Enemy()

        //     // Add actors to the scene
        //     const currentScene = this.scenes['tutorial']
        //     currentScene.add(this.player)
        //currentScene.add(this.waterEnemy)

        //     // Add tilemap to the scene
        //     this.tileMap.addToScene(currentScene)

        //     // Setup camera
        //     currentScene.camera.strategy.lockToActorAxis(this.player, Axis.X)
        //     currentScene.camera.strategy.lockToActorAxis(this.player, Axis.Y)
        //     currentScene.camera.zoom = 1.5
    }
}

const game = new Game()
game.start()
