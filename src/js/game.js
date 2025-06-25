import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Loader, ImageSource, Axis, SolverStrategy } from "excalibur"
import { TiledResource } from '@excaliburjs/plugin-tiled'
import { Resources, ResourceLoader, } from './resources.js'
import { Player } from './player.js'
import { Enemy } from './enemy.js'
import { TutorialScene } from './tutorialscene.js'
import { Next } from './middle_stage_left.js'
import { UI } from './ui.js'
import { GameOver } from './gameover.js'
import { FinalStage } from './finalstage.js'
import { Mainmenu } from './mainmenu.js'
import { VictoryScreen } from './victoryscene.js'


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
            maxFps: 30,
            pixelRatio: 1,
            displayMode: DisplayMode.FitScreen,
        })
        // todo deze code hoort in resources.js
        this.tutorialMap = new TiledResource("/maps/tutorial_area_v1.tmx");
        ResourceLoader.addResource(this.tutorialMap);

        this.middleLevelMap = new TiledResource("/maps/level_1-1.tmx");
        ResourceLoader.addResource(this.middleLevelMap);

        this.finalLevelMap = new TiledResource("/maps/finalstage_fixed.tmx");
        ResourceLoader.addResource(this.finalLevelMap);

        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {

        // this.playerProgress = {
        //     score: 0,
        //     health: 10
        // }

        this.playerProgress = {
            score: 0,
            health: 10
        }



        this.addScene('tutorial', new TutorialScene());
        this.addScene("next", new Next());
        this.addScene("final", new FinalStage());
        this.addScene('game-over', new GameOver());
        this.addScene('victoryScreen', new VictoryScreen());
        this.addScene('start-game', new Mainmenu());

        this.goToScene('start-game');


    }

    // initializeGame() {
    // this.input.gamepads.enabled = true
    // this.input.gamepads.on('connect', (connectevent) => {
    //     console.log("gamepad detected")
    //     this.mygamepad = connectevent.gamepad
    // })

    // const player = new Player()


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
    // }
}

const game = new Game()
