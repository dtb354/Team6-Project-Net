import { ImageSource, Sound, Resource, Loader, SpriteSheet } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {

    bossIdle: new ImageSource('images/boss/Boss_idle.png'),
    bossBullet: new ImageSource('images/boss/Boss_Bullet.png'),

    //Sprites
    waterEnemyidle: new ImageSource('images/water_enemy/corrupt_water_idle.png'),
    waterEnemyAttack: new ImageSource('images/water_enemy/corrupt_water_attack_front.png'),
    waterEnemyPurification: new ImageSource('images/water_enemy/corrupt_water_purification.png'),
    waterEnemyProjectile: new ImageSource('images/water_enemy/corrupt_water_projectile.png'),
    purifiedwater: new ImageSource('images/water_enemy/purified_water.png'),
    waterEnemyidleBack: new ImageSource('images/water_enemy/corrupt_water_idle_back.png'),
    waterEnemyAttackBack: new ImageSource('images/water_enemy/corrupt_water_attack_back.png'),

    windEnemyAttackBack: new ImageSource('images/wind_enemy/wind_enemy_attack_back.png'),
    windEnemyAttack: new ImageSource('images/wind_enemy/wind_enemy_attack.png'),
    windEnemyIdle: new ImageSource('images/wind_enemy/wind_enemy_idle.png'),
    windEnemyIdleBack: new ImageSource('images/wind_enemy/wind_enemy_idle_back.png'),
    windEnemyPurification: new ImageSource('images/wind_enemy/wind_enemy_purification.png'),
    purifiedWind: new ImageSource('images/wind_enemy/wind_enemy_purified_idle.png'),

    //Shiny Sprites
    waterShinyAttackBack: new ImageSource('images/water_shiny/ShinyAttackBack.png'),
    waterShinyAttackFront: new ImageSource('images/water_shiny/ShinyAttackFront.png'),
    waterShinyIdleBack: new ImageSource('images/water_shiny/ShinyAttackFront.png'),
    waterShinyIdleFront: new ImageSource('images/water_shiny/ShinyAttackFront.png'),

    windShinyAttackBack: new ImageSource('images/wind_shiny/WindShinyAttackBack.png'),
    windShinyAttackFront: new ImageSource('images/wind_shiny/WindShinyAttackFront.png'),
    windShinyIdleBack: new ImageSource('images/wind_shiny/WindShinyIdleBack.png'),
    windShinyIdleFront: new ImageSource('images/wind_shiny/WindShinyIdleFront.png'),

    //Player Sprites
    idleNorth: new ImageSource('images/player_idle/idle_full_sprite_North.png'),
    idleEast: new ImageSource('images/player_idle/idle_full_sprite_East.png'),
    idleSouth: new ImageSource('images/player_idle/netna_idle_South.png'),
    idleWest: new ImageSource('images/player_idle/netna_idle_West.png'),

    //player walking
    walkingNorth: new ImageSource('images/player_walking/netna_walking_North.png'),
    walkingEast: new ImageSource('images/player_walking/walk_complete_sprite_East.png'),
    walkingSouth: new ImageSource('images/player_walking/netna_walking_South.png'),
    walkingWest: new ImageSource('images/player_walking/netna_walking_West.png'),

    //player attacking
    attackingNorth: new ImageSource('images/player_attack/netna_attack_North.png'),
    attackingEast: new ImageSource('images/player_attack/attack_full_sprite_East.png'),
    attackingSouth: new ImageSource('images/player_attack/netna_attack_South.png'),
    attackingWest: new ImageSource('images/player_attack/netna_attack_West.png'),

    // Pillar Resources
    pillarWater: new ImageSource('images/boss/Pillar_water.png'),
    pillarWind: new ImageSource('images/boss/Pillar_wind.png'),

    net: new ImageSource('images/net.png'),

    waterBottle: new ImageSource('images/water_bottle_spritesheet.png'),

    //Sound
    DodgeSound: new Sound('sounds/dbz-teleport-sound-thing-made-with-Voicemod.mp3'),
    PlayerWalkSound: new Sound('sounds/Minecraft-Walking-Sound-Effect-ProSounds.mp3'),
    tutorialBackgroundMusic: new Sound('sounds/tutorial_level.mp3'),
    bossFightMusic: new Sound('/sounds/bossmusic.mp3'),
    netSlash: new Sound('sounds/swing-whoosh-5-198498.mp3'),

    //images
    aButton: new ImageSource('images/A.png'),
    bButton: new ImageSource('images/B.png'),
    uiNet: new ImageSource('images/ui_net.png'),
    uiDodge: new ImageSource('images/dodge.webp'),
    victoryBadge: new ImageSource('image/hxnor_victory.png'),
    mainMenuBanner: new ImageSource('images/main_menu_banner.png')

}

// boss
const bossIdleMovement = SpriteSheet.fromImageSource({
    image: Resources.bossIdle,
    grid: { rows: 1, columns: 4, spriteHeight: 480, spriteWidth: 480 }
})

const bossweapen = SpriteSheet.fromImageSource({
    image: Resources.bossBullet,
    grid: { rows: 1, columns: 4, spriteHeight: 96, spriteWidth: 96 }
})

// pillar animations
const pillarWater = SpriteSheet.fromImageSource({
    image: Resources.pillarWater,
    grid: { rows: 1, columns: 4, spriteHeight: 96, spriteWidth: 96 }
})

const pillarWind = SpriteSheet.fromImageSource({
    image: Resources.pillarWind,
    grid: { rows: 1, columns: 4, spriteHeight: 96, spriteWidth: 96 }
})

// water spritesheets
const waterEnemyIdle = SpriteSheet.fromImageSource({
    image: Resources.waterEnemyidle,
    grid: { rows: 1, columns: 8, spriteHeight: 96, spriteWidth: 96 }
})

const waterEnemyIdleBack = SpriteSheet.fromImageSource({
    image: Resources.waterEnemyidleBack,
    grid: { rows: 1, columns: 4, spriteHeight: 96, spriteWidth: 96 }
})

const waterAttacke = SpriteSheet.fromImageSource({
    image: Resources.waterEnemyAttack,
    grid: { rows: 1, columns: 5, spriteHeight: 96, spriteWidth: 96 }
})

const waterAttackBack = SpriteSheet.fromImageSource({
    image: Resources.waterEnemyAttackBack,
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
    image: Resources.waterEnemyProjectile, // It used to be waterEnemyPurification, make sure to use the right image :))
    grid: { rows: 1, columns: 2, spriteHeight: 96, spriteWidth: 96 }
})

// wind enemy sprites
const windEnemyBackwardsAttack = SpriteSheet.fromImageSource({
    image: Resources.windEnemyAttackBack,
    grid: { rows: 1, columns: 5, spriteHeight: 96, spriteWidth: 96 }
})

const windAttackEnemy = SpriteSheet.fromImageSource({
    image: Resources.windEnemyAttack,
    grid: { rows: 1, columns: 5, spriteHeight: 96, spriteWidth: 96 }
})

const windIdle = SpriteSheet.fromImageSource({
    image: Resources.windEnemyIdle,
    grid: { rows: 1, columns: 4, spriteHeight: 96, spriteWidth: 96 }
})

const windIdleBack = SpriteSheet.fromImageSource({
    image: Resources.windEnemyIdleBack,
    grid: { rows: 1, columns: 4, spriteHeight: 96, spriteWidth: 96 }
})

const windPurification = SpriteSheet.fromImageSource({
    image: Resources.windEnemyPurification,
    grid: { rows: 1, columns: 5, spriteHeight: 96, spriteWidth: 96 }
})

const windEnemyPurified = SpriteSheet.fromImageSource({
    image: Resources.purifiedWind,
    grid: { rows: 1, columns: 4, spriteHeight: 96, spriteWidth: 96 }
})



//Shiny spritesheets
//Water
const waterShinyIdleFront = SpriteSheet.fromImageSource({
    image: Resources.waterShinyIdleFront, // 4 frames, 1 rij
    grid: { rows: 1, columns: 4, spriteWidth: 96, spriteHeight: 96 }
})

const waterShinyIdleBack = SpriteSheet.fromImageSource({
    image: Resources.waterShinyIdleBack, // 4 frames, 1 rij
    grid: { rows: 1, columns: 4, spriteWidth: 96, spriteHeight: 96 }
})

const waterShinyAttackFront = SpriteSheet.fromImageSource({
    image: Resources.waterShinyAttackFront, // 5 frames, 1 rij
    grid: { rows: 1, columns: 5, spriteWidth: 96, spriteHeight: 96 }
})

const waterShinyAttackBack = SpriteSheet.fromImageSource({
    image: Resources.waterShinyAttackBack, // 5 frames, 1 rij
    grid: { rows: 1, columns: 5, spriteWidth: 96, spriteHeight: 96 }
})

// const waterprojectile = SpriteSheet.fromImageSource({
//     image: Resources.waterEnemyProjectile, // It used to be waterEnemyPurification, make sure to use the right image :))
//     grid: { rows: 1, columns: 2, spriteHeight: 96, spriteWidth: 96 }
// })

//Wind
const windShinyIdleFront = SpriteSheet.fromImageSource({
    image: Resources.windShinyIdleFront,
    grid: { rows: 1, columns: 4, spriteWidth: 96, spriteHeight: 96 }
})

const windShinyIdleBack = SpriteSheet.fromImageSource({
    image: Resources.windShinyIdleBack,
    grid: { rows: 1, columns: 4, spriteWidth: 96, spriteHeight: 96 }
})

const windShinyAttackFront = SpriteSheet.fromImageSource({
    image: Resources.windShinyAttackFront,
    grid: { rows: 1, columns: 5, spriteWidth: 96, spriteHeight: 96 }
})

const windShinyAttackBack = SpriteSheet.fromImageSource({
    image: Resources.windShinyAttackBack,
    grid: { rows: 1, columns: 5, spriteWidth: 96, spriteHeight: 96 }
})



//idle spritesheets
const playerIdleNorth = SpriteSheet.fromImageSource({
    image: Resources.idleNorth,
    grid: { rows: 1, columns: 12, spriteHeight: 64, spriteWidth: 64 }
})

const playerIdleEast = SpriteSheet.fromImageSource({
    image: Resources.idleEast,
    grid: { rows: 1, columns: 12, spriteHeight: 64, spriteWidth: 64 }
})

const playerIdleSouth = SpriteSheet.fromImageSource({
    image: Resources.idleSouth,
    grid: { rows: 1, columns: 11, spriteHeight: 64, spriteWidth: 64 }
})

const playerIdleWest = SpriteSheet.fromImageSource({
    image: Resources.idleWest,
    grid: { rows: 1, columns: 12, spriteHeight: 64, spriteWidth: 64 }
})
//walking spritesheets
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
//attack spritesheets
const playerAttackingNorth = SpriteSheet.fromImageSource({
    image: Resources.attackingNorth,
    grid: { rows: 1, columns: 7, spriteHeight: 64, spriteWidth: 64 }
})

const playerAttackingEast = SpriteSheet.fromImageSource({
    image: Resources.attackingEast,
    grid: { rows: 1, columns: 7, spriteHeight: 64, spriteWidth: 64 }
})

const playerAttackingSouth = SpriteSheet.fromImageSource({
    image: Resources.attackingSouth,
    grid: { rows: 1, columns: 7, spriteHeight: 64, spriteWidth: 64 }
})

const playerAttackingWest = SpriteSheet.fromImageSource({
    image: Resources.attackingWest,
    grid: { rows: 1, columns: 7, spriteHeight: 64, spriteWidth: 64 }
})

//waterBottle spritesheet

const WaterBottleHealthPack = SpriteSheet.fromImageSource({
    image: Resources.waterBottle,
    grid: { rows: 1, columns: 3, spriteHeight: 64, spriteWidth: 64 }
})

const resourceLoader = new Loader()
// Add all resources to the loader
for (let res of Object.values(Resources)) {
    resourceLoader.addResource(res)
}

export { Resources, resourceLoader as ResourceLoader, bossweapen, bossIdleMovement, windEnemyPurified, windPurification, windIdleBack, windIdle, windAttackEnemy, windEnemyBackwardsAttack, waterAttackBack, waterEnemyIdleBack, purifiedWater, waterprojectile, waterpurification, waterAttacke, waterEnemyIdle, waterShinyAttackBack, waterShinyAttackFront, waterShinyIdleBack, waterShinyIdleFront, windShinyAttackBack, windShinyAttackFront, windShinyIdleBack, windShinyIdleFront, playerIdleNorth, playerIdleEast, playerIdleSouth, playerIdleWest, playerWalkingNorth, playerWalkingEast, playerWalkingSouth, playerWalkingWest, playerAttackingNorth, playerAttackingEast, playerAttackingSouth, playerAttackingWest, WaterBottleHealthPack, pillarWater, pillarWind }
