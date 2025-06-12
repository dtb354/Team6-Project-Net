import { ImageSource, Sound, Resource, Loader, SpriteSheet } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
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

// Create a new loader instance
const resourceLoader = new Loader()

// Add all resources to the loader
for (let res of Object.values(Resources)) {
    resourceLoader.addResource(res)
}

export { Resources, resourceLoader as ResourceLoader, PlayerWalkingNorthWest }