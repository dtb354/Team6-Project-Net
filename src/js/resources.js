import { ImageSource, Sound, Resource, Loader, SpriteSheet } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {

    //Sprites
    waterEnemyidle: new ImageSource('images/water_enemy/corrupt_water_idle.png'),
    waterEnemyAttack: new ImageSource('images/water_enemy/corrupt_water_attack_front.png'),
    waterEnemyPurification: new ImageSource('images/water_enemy/corrupt_water_purification.png'),
    waterEnemyProjectile: new ImageSource('images/water_enemy/corrupt_water_projectile.png'),
    purifiedwater: new ImageSource('images/water_enemy/purified_water.png'),

    idleSouth: new ImageSource('images/player_idle/idle_full_sprite_South.png'),

    walkingNorth: new ImageSource('images/player_walking/walk_complete_sprite_North.png'),
    walkingEast: new ImageSource('images/player_walking/walk_complete_sprite_East.png'),
    walkingSouth: new ImageSource('images/player_walking/walk_complete_sprite_South.png'),
    walkingWest: new ImageSource('images/player_walking/walk_complete_sprite_West.png'),

    Net: new ImageSource('images/net.png'),

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

const waterpurification = SpriteSheet.fromImageSource({
    image: Resources.waterEnemyPurification,
    grid: { rows: 1, columns: 6, spriteHeight: 96, spriteWidth: 96 }
})

const purifiedWater = SpriteSheet.fromImageSource({
    image: Resources.purifiedwater,
    grid: { rows: 1, columns: 4, spriteHeight: 96, spriteWidth: 96 }
})

const waterprojectile = SpriteSheet.fromImageSource({
    image: Resources.waterEnemyPurification,
    grid: { rows: 1, columns: 2, spriteHeight: 96, spriteWidth: 96 }
})

const playerIdleSouth = SpriteSheet.fromImageSource({
    image: Resources.idleSouth,
    grid: { rows: 1, columns: 8, spriteHeight: 64, spriteWidth: 64 }
})

const playerWalkingNorth = SpriteSheet.fromImageSource({
    image: Resources.walkingNorth,
    grid: { rows: 1, columns: 8, spriteHeight: 64, spriteWidth: 64 }
})

const playerWalkingEast = SpriteSheet.fromImageSource({
    image: Resources.walkingEast,
    grid: { rows: 1, columns: 8, spriteHeight: 64, spriteWidth: 64 }
})

const playerWalkingSouth = SpriteSheet.fromImageSource({
    image: Resources.walkingSouth,
    grid: { rows: 1, columns: 8, spriteHeight: 64, spriteWidth: 64 }
})

const playerWalkingWest = SpriteSheet.fromImageSource({
    image: Resources.walkingWest,
    grid: { rows: 1, columns: 8, spriteHeight: 64, spriteWidth: 64 }
})

const resourceLoader = new Loader()
// Add all resources to the loader
for (let res of Object.values(Resources)) {
    resourceLoader.addResource(res)
}

export { Resources, resourceLoader as ResourceLoader, purifiedWater, waterprojectile, waterpurification, waterAttacke, waterEnemyIdle, playerIdleSouth, playerWalkingNorth, playerWalkingEast, playerWalkingSouth, playerWalkingWest }
