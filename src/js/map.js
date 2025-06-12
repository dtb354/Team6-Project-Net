// import { TiledResource } from "@excaliburjs/plugin-tiled";
// import { Actor, DisplayMode, Engine, Loader } from "excalibur";

// export class TileMap extends Actor {
//     constructor() {
//         super()

//         const game = new Engine({
//             width: 1280,
//             height: 720,
//             maxFps: 60,
//             displayMode: DisplayMode.FitScreen
//         })
//         const tileMap = new TiledResource('maps/background.tmx')
//         const loader = new Loader([tileMap])

//         game.start(loader).then(() => {
//             tileMap.addToScene(game.currentScene);
//         });
//     }

// }