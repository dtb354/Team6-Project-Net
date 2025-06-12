import { TilesetResource } from '@excaliburjs/plugin-tiled'
import { ImageSource, Sound, Resource, Loader, TileMap } from 'excalibur'
import { TiledResource } from '@excaliburjs/plugin-tiled';



// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    tileset: new ImageSource('wasteland-bg.png'),
    Map: new TiledResource('maps/bg.tmx')
}

const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.tileset,
    Resources.Map // optioneel
]);



for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }