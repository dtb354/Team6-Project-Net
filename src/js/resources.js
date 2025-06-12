import { ImageSource, Sound, Resource, Loader, SpriteSheet } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    // Fish: new ImageSource('images/fish.png'),
    WalkingNorthWest: new ImageSource('images/walk_NW_prototype_sprite.png'),

}

const PlayerWalkingNorthWest = SpriteSheet.fromImageSource({
    image: Resources.WalkingNorthWest,
    grid: {
        rows: 1,
        columns: 8,
        spriteHeight: 64,
        spriteWidth: 64
    }
})


for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader, PlayerWalkingNorthWest }