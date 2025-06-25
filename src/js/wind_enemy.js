import { Actor, Animation, AnimationStrategy, CollisionType, Color, Engine, range, Shape, TextureLoader, Timer, Vector } from "excalibur";
import { windAttackEnemy, windEnemyBackwardsAttack, windEnemyPurified, windIdle, windIdleBack, windPurification } from "./resources";
import { Player } from "./player";
import { Enemy } from "./enemy";

export class windEnemy extends Enemy {

    state;
    hitpoints;
    healthbar;
    counter;
    isPurified = false;

    value = 150;


    constructor() {
        super({
            width: 100, height: 100,
            collisionType: CollisionType.Active,
        })

        const windEnemy = Animation.fromSpriteSheet(windIdle, range(0, 3), 100)
        this.graphics.add("idle", windEnemy)
        this.graphics.use(windIdle)

        const purifiedWindEnemy = Animation.fromSpriteSheet(windEnemyPurified, range(0, 3), 100)
        this.graphics.add("purified", purifiedWindEnemy)

        const windTransformation = Animation.fromSpriteSheet(windPurification, range(0, 4), 100);
        this.graphics.add("purifying", windTransformation)

        const windAttack = Animation.fromSpriteSheet(windAttackEnemy, range(0, 4), 200)
        this.graphics.add("attack", windAttack)

        const windBackAttack = Animation.fromSpriteSheet(windEnemyBackwardsAttack, range(0, 4), 200)
        this.graphics.add('backAttack', windBackAttack)

        const windEnemyBack = Animation.fromSpriteSheet(windIdleBack, range(0, 3), 100)
        this.graphics.add("idleBack", windEnemyBack)

    }

    onInitialize(engine) {
        this.counter = 0;
        this.z = 3;
        this.on("collisionstart", (event) => this.handleCollision(event));
        //this.pos = new Vector(500, 600)
        this.state = "idle"
        this.hitpoints = 10

        const hitbox = Shape.Box(70, 90, Vector.Half, new Vector(0, 8));
        this.collider.set(hitbox)


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
        const player = engine.currentScene.actors.find(actor => actor instanceof Player);
        if (!player) return

        const distance = this.pos.distance(player.pos)

        const isPlayerBehind = player.pos.y < this.pos.y;

        // Handle movement based on state
        switch (this.state) {

            case "purified": {

                this.moveInSquare()
                this.graphics.use('purified')
                break

            }
            case "idle": {

                this.moveInSquare();
                if (isPlayerBehind) {
                    this.graphics.use("idleBack");
                } else {
                    this.graphics.use("idle");
                }
                break;
            }
            case "angry": {

                if (distance > 100 || distance < 10) {
                    const direction = player.pos.sub(this.pos).normalize();
                    this.vel = direction.scale(80);

                    if (isPlayerBehind) {
                        this.graphics.use("backAttack");
                    } else {
                        this.graphics.use("attack");
                    }

                }
                break;
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
            this.addPoint();
            this.createWaterBottle()
            this.healthbar.kill()
        }

    }

    addPoint() {
        const player = this.scene.actors.find(actor => actor instanceof Player);
        if (player) {
            player.getPoints(this.value);
        }
    }


    purification() {

        // this.healthbar.kill()
        this.state = "purified"
        this.isPurified = true;
        this.graphics.use('purifying')
    }

    handleCollision(event) {

        if (!this.isPurified) {
            if (event.other.owner instanceof Player) {
                event.other.owner.reduceHealthOfPlayer()
                console.log("Speler geraakt")
            }
        }


        this.z = 3
    }

}