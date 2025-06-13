import { ImageSource, Sound, Resource, Loader, SpriteSheet } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
<<<<<<< HEAD
    // Fish: new ImageSource('images/fish.png'),
    WalkingNorthWest: new ImageSource('images/walk_NW_prototype_sprite.png'),
    waterEnemyIdle: new ImageSource('images/water_enemy/corrupt_water_idle.png')
=======
    idleSouth: new ImageSource('images/idle_full_sprite_South.png'),
>>>>>>> 08c0a9b452664e9d74b0a93e4386ce54dc445607

    walkingNorth: new ImageSource('images/walk_complete_sprite_North.png'),
    walkingNorthEast: new ImageSource('images/walk_complete_sprite_North-East.png'),
    walkingEast: new ImageSource('images/walk_complete_sprite_East.png'),
    walkingSouthEast: new ImageSource('images/walk_complete_sprite_South-East.png'),
    walkingSouth: new ImageSource('images/walk_complete_sprite_South.png'),
    walkingSouthWest: new ImageSource('images/walk_complete_sprite_South-West.png'),
    walkingWest: new ImageSource('images/walk_complete_sprite_West.png'),
    walkingNorthWest: new ImageSource('images/walk_complete_sprite_North-West.png'),
}

const playerIdleSouth = SpriteSheet.fromImageSource({
    image: Resources.idleSouth,
    grid: {
        rows: 1,
        columns: 8,
        spriteHeight: 64,
        spriteWidth: 64
    }
})

const waterEnemyIdle = SpriteSheet.fromImageSource({
    image: Resources.waterEnemyIdle,
    grid: { rows: 1, columns: 4, spriteHeight: 96, spriteWidth: 96 }
})


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    resourceLoader.addResource(res)
}

export { Resources, resourceLoader as ResourceLoader, waterEnemyIdle, playerIdleSouth, playerWalkingNorth, playerWalkingEast, playerWalkingSouth, playerWalkingWest, playerWalkingNorthEast, playerWalkingSouthEast, playerWalkingSouthWest, playerWalkingNorthWest }
