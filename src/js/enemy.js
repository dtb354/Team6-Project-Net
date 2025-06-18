import { Actor, Animation, AnimationStrategy, CollisionType, Color, Engine, range, TextureLoader, Timer, Vector } from "excalibur";
import { purifiedWater, waterAttacke, waterEnemyIdle, waterpurification } from "./resources";
import { Player } from "./player";
import { Net } from "./net";
import { waterball } from "./waterball";

export class Enemy extends Actor {

    state;
    hitpoints;
    healthbar;
    counter;
    isPurified = false;

    shootingTimer = 0;
    purificationTimer = 0;

    constructor() {
        super({ width: 20, height: 33 })

        const waterEnemy = Animation.fromSpriteSheet(waterEnemyIdle, range(0, 3), 100)
        this.graphics.add("idle", waterEnemy)
        this.graphics.use(waterEnemy)

        const purifiedWaterEnemy = Animation.fromSpriteSheet(purifiedWater, range(0, 3), 100)
        this.graphics.add("purified", purifiedWaterEnemy)

        const waterPurify = Animation.fromSpriteSheet(waterpurification, range(0, 5), 100);
        this.graphics.add("purifying", waterPurify)

        const waterAttack = Animation.fromSpriteSheet(waterAttacke, range(0, 4), 200)
        this.graphics.add("attack", waterAttack)

    }

    onInitialize(engine) {
        this.counter = 0;

        // this.on("collisionstart", (event) => this.handleCollision(event));
        this.shootCooldown = 0;
        this.pos = new Vector(500, 600)
        this.state = "idle"
        this.hitpoints = 10
        // milan zegt doe dit
        this.z = 10;


        this.healthbar = new Actor({
            pos: new Vector(0, -45), // 25 pixels boven zijn hoofd
            color: Color.Green,
            width: 20,
            height: 4,
            anchor: new Vector(0.5, 0.5),
        });

        this.addChild(this.healthbar);
    }


    onPreUpdate(engine) {

        // Get player from current scene
        const player = engine.currentScene.actors.find(actor => actor instanceof Player)
        if (!player) return

        const distance = this.pos.distance(player.pos)

        // Handle movement based on state
        switch (this.state) {

            case "purified": {

                this.moveInSquare()
                this.graphics.use('purified')
                break

            }
            case "idle": {
                this.moveInSquare()
                break
            }
            case "angry": {

                if (distance > 100 || distance < 10) {
                    const direction = player.pos.sub(this.pos).normalize()
                    this.vel = direction.scale(80)

                    this.graphics.use('attack')

                    if (this.shootCooldown <= 0) {
                        this.shoot(engine);
                        this.shootCooldown = 60;
                    }

                    // const timer = new Timer({
                    //     interval: 200,
                    //     action: () => this.shoot(engine)
                    // })

                    // this.timer.add();
                    // timer.start();


                    // timerfinished() {
                    //     // this.engine.goToScene('startscreen ')
                    // }


                }
                break
            }
        }


        if (this.isPurified === false) {

            if (distance < 200) {
                this.state = "angry"
            } else {
                this.state = "idle"
            }

        }

        else if (this.isPurified === true) {

            this.purification()
            this.purificationTimer++;

            if (this.purificationTimer > 10) {

                this.state = "purified"
                this.isPurifying = false
                this.graphics.use('purified')
            }

        }

        if (this.shootCooldown > 0) {
            this.shootCooldown--;
        }

    }

    moveInSquare() {

        this.counter++;

        if (this.counter < 10) {
            this.vel = new Vector(0, -1).scale(30);  // omhoog
        }
        else if (this.counter < 30) {
            this.vel = new Vector(1, 0).scale(30);   // rechts
        }
        else if (this.counter < 50) {
            this.vel = new Vector(0, 1).scale(30);   // omlaag
        }
        else if (this.counter < 70) {
            this.vel = new Vector(-1, 0).scale(30);  // links
        }
        else {
            this.counter = 0; // reset counter na rondje
        }

    }


    reduceHealth() {

        this.hitpoints--;
        const percent = Math.max(this.hitpoints / 10, 0);
        this.healthbar.scale = new Vector(percent, 1);

        if (this.hitpoints <= 0 && !this.isPurified) {
            this.purification()
            this.healthbar.kill()
        }

    }


    purification() {

        // this.healthbar.kill()
        this.state = "purified"
        this.isPurified = true;
        this.graphics.use('purifying')

    }

    shoot(engine) {

        for (let i = 0; i < 1; i++) {
            let waterWeapon = new waterball(this.pos.x, this.pos.y)
            engine.currentScene.add(waterWeapon);
        }

    }


}