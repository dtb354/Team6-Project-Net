import { ImageSource, Sound, Resource, Loader, SpriteSheet } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {

    //Sprites
    waterEnemyidle: new ImageSource('images/water_enemy/corrupt_water_idle.png'),
    waterEnemyAttack: new ImageSource('images/water_enemy/corrupt_water_attack_front.png'),

    idleSouth: new ImageSource('images/idle_full_sprite_South.png'),
    walkingNorth: new ImageSource('images/walk_complete_sprite_North.png'),
    walkingNorthEast: new ImageSource('images/walk_complete_sprite_North-East.png'),
    walkingEast: new ImageSource('images/walk_complete_sprite_East.png'),
    walkingSouthEast: new ImageSource('images/walk_complete_sprite_South-East.png'),
    walkingSouth: new ImageSource('images/walk_complete_sprite_South.png'),
    walkingSouthWest: new ImageSource('images/walk_complete_sprite_South-West.png'),
    walkingWest: new ImageSource('images/walk_complete_sprite_West.png'),
    walkingNorthWest: new ImageSource('images/walk_complete_sprite_North-West.png'),


    //Sound
    //PlayerWalkSound: new Sound('sounds/player-sound.mp3'),
}

const waterEnemyIdle = SpriteSheet.fromImageSource({
    image: Resources.waterEnemyidle,
    grid: { rows: 1, columns: 8, spriteHeight: 96, spriteWidth: 96 }
})

const waterAttacke = SpriteSheet.fromImageSource({
    image: Resources.waterEnemyAttack,
    grid: { rows: 1, columns: 5, spriteHeight: 96, spriteWidth: 96 }
})

const playerIdleSouth = SpriteSheet.fromImageSource({
    image: Resources.idleSouth,
    grid: {
        rows: 1,
        columns: 8,
        spriteHeight: 64,
        spriteWidth: 64
    }
})

const playerWalkingNorth = SpriteSheet.fromImageSource({
    image: Resources.walkingNorth,
    grid: {
        rows: 1,
        columns: 8,
        spriteHeight: 64,
        spriteWidth: 64
    }
})

const playerWalkingNorthEast = SpriteSheet.fromImageSource({
    image: Resources.walkingNorthEast,
    grid: {
        rows: 1,
        columns: 8,
        spriteHeight: 64,
        spriteWidth: 64
    }
})

const playerWalkingEast = SpriteSheet.fromImageSource({
    image: Resources.walkingEast,
    grid: {
        rows: 1,
        columns: 8,
        spriteHeight: 64,
        spriteWidth: 64
    }
})

const playerWalkingSouthEast = SpriteSheet.fromImageSource({
    image: Resources.walkingSouthEast,
    grid: {
        rows: 1,
        columns: 8,
        spriteHeight: 64,
        spriteWidth: 64
    }
})

const playerWalkingSouth = SpriteSheet.fromImageSource({
    image: Resources.walkingSouth,
    grid: {
        rows: 1,
        columns: 8,
        spriteHeight: 64,
        spriteWidth: 64
    }
})

const playerWalkingSouthWest = SpriteSheet.fromImageSource({
    image: Resources.walkingSouthWest,
    grid: {
        rows: 1,
        columns: 8,
        spriteHeight: 64,
        spriteWidth: 64
    }
})

const playerWalkingWest = SpriteSheet.fromImageSource({
    image: Resources.walkingWest,
    grid: {
        rows: 1,
        columns: 8,
        spriteHeight: 64,
        spriteWidth: 64
    }
})

const playerWalkingNorthWest = SpriteSheet.fromImageSource({
    image: Resources.walkingNorthWest,
    grid: {
        rows: 1,
        rows: 1,
        columns: 8,
        spriteHeight: 64,
        spriteWidth: 64
    }
})

const resourceLoader = new Loader()
// Add all resources to the loader
for (let res of Object.values(Resources)) {
    resourceLoader.addResource(res)
}

export { Resources, resourceLoader as ResourceLoader, waterAttacke, waterEnemyIdle, playerIdleSouth, playerWalkingNorth, playerWalkingEast, playerWalkingSouth, playerWalkingWest, playerWalkingNorthEast, playerWalkingSouthEast, playerWalkingSouthWest, playerWalkingNorthWest }
