import { Actor, Animation, Axes, Buttons, CollisionType, Color, Keys, range, Vector } from "excalibur";
import { playerAttackingEast, playerAttackingNorth, playerAttackingSouth, playerAttackingWest, playerIdleEast, playerIdleNorth, playerIdleSouth, playerIdleWest, playerWalkingEast, playerWalkingNorth, playerWalkingSouth, playerWalkingWest } from "./resources";
import { Net } from "./net";


export class Player extends Actor {

    state
    hitpoints
    healthbar
    lastDirection
    attackDirection
    isAttacking = false

    constructor() {
        super({
            width: 20,
            height: 33,
            collisionType: CollisionType.Active,
        })
        this.scale = new Vector(1.5, 1.5);

        // this.net = new Net();
        // this.addChild(this.net)

    }

    onInitialize() {

        //Idle
        const playerIdleN = Animation.fromSpriteSheet(playerIdleNorth, range(0, 10), 70);
        this.graphics.add("playerIdleN", playerIdleN);

        const playerIdleE = Animation.fromSpriteSheet(playerIdleEast, range(0, 10), 70);
        this.graphics.add("playerIdleE", playerIdleE);

        const playerIdleS = Animation.fromSpriteSheet(playerIdleSouth, range(0, 10), 70);
        this.graphics.add("playerIdleS", playerIdleS);
        this.graphics.use("playerIdleS")

        const playerIdleW = Animation.fromSpriteSheet(playerIdleWest, range(0, 10), 70);
        this.graphics.add("playerIdleW", playerIdleW);

        //Walking
        const playerWalkingN = Animation.fromSpriteSheet(playerWalkingNorth, range(0, 7), 70);
        this.graphics.add("playerWalkingN", playerWalkingN);

        const playerWalkingE = Animation.fromSpriteSheet(playerWalkingEast, range(0, 7), 70);
        this.graphics.add("playerWalkingE", playerWalkingE);

        const playerWalkingS = Animation.fromSpriteSheet(playerWalkingSouth, range(0, 7), 70);
        this.graphics.add("playerWalkingS", playerWalkingS);

        const playerWalkingW = Animation.fromSpriteSheet(playerWalkingWest, range(0, 7), 70);
        this.graphics.add("playerWalkingW", playerWalkingW);

        //Attacking
        const playerAttackingN = Animation.fromSpriteSheet(playerAttackingNorth, range(0, 6), 70);
        this.graphics.add("playerAttackingN", playerAttackingN);

        const playerAttackingE = Animation.fromSpriteSheet(playerAttackingEast, range(0, 6), 70);
        this.graphics.add("playerAttackingE", playerAttackingE);

        const playerAttackingS = Animation.fromSpriteSheet(playerAttackingSouth, range(0, 6), 70);
        this.graphics.add("playerAttackingS", playerAttackingS);

        const playerAttackingW = Animation.fromSpriteSheet(playerAttackingWest, range(0, 6), 70);
        this.graphics.add("playerAttackingW", playerAttackingW);

        // Zet a higher z value for the player to appear on top
        this.z = 3;

        //healthbar
        this.hitpoints = 10
        this.healthbar = new Actor({
            pos: new Vector(0, -25), // 25 pixels boven zijn hoofd
            color: Color.Green,
            width: 20,
            height: 4,
            anchor: new Vector(0.5, 0.5),
        });

        this.addChild(this.healthbar);

        // Background layers: 0-9
        // Game objects: 10-99
        // UI elements: 100+
    }

    onPreUpdate(engine) {

        this.lastDirectionHandler()

        //handle attack direction
        switch (this.state) {
            case "attackingNorth": {
                this.graphics.use("playerAttackingN")
                break
            }
            case "attackingEast": {
                this.graphics.use("playerAttackingE")
                break
            }
            case "attackingSouth": {
                this.graphics.use("playerAttackingS")
                break
            }
            case "attackingWest": {
                this.graphics.use("playerAttackingW")
                break
            }
            case "idleNorth": {
                this.graphics.use("playerIdleN")
                break
            }
            case "idleEast": {
                this.graphics.use("playerIdleE")
                break
            }
            case "idleSouth": {
                this.graphics.use("playerIdleS")
                break
            }
            case "idleWest": {
                this.graphics.use("playerIdleW")
                break
            }
        }

        if (this.isAttacking === true) {
            this.vel = new Vector(0, 0)
            return
        }

        // Gamepad movement
        if (engine.mygamepad) {
            const x = engine.mygamepad.getAxes(Axes.LeftStickX);
            const y = engine.mygamepad.getAxes(Axes.LeftStickY);
            this.vel = new Vector(x * 200, y * 200);

            if (Math.abs(x) > Math.abs(y)) {

                if (x > 0) {
                    this.graphics.use("playerWalkingE");
                    this.lastDirection = "East"
                    this.attackDirection = "East"
                }

                if (x < 0) {
                    this.graphics.use("playerWalkingW");
                    this.lastDirection = "West"
                    this.attackDirection = "West"
                }

            } else {
                if (y > 0) {
                    this.graphics.use("playerWalkingS");
                    this.lastDirection = "South"
                    this.attackDirection = "South"
                }

                if (y < 0) {
                    this.graphics.use("playerWalkingN");
                    this.lastDirection = "North"
                    this.attackDirection = "North"
                }
            }

            if (engine.mygamepad.wasButtonPressed(Buttons.Face1)) {
                console.log('YIPPIE!')
                this.attackDirectionHandler()
            }

            // If not moving, show idle animation based on lastDirection
            // if (x === 0 && y === 0) {
            //     this.lastDirectionHandler();
            // }

        } else {
            // Keyboard fallback
            this.playerMovement(engine);
        }

        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.attackDirectionHandler()
            // console.log("it works")
        }
    }

    lastDirectionHandler() {
        if (this.lastDirection === "North") {
            this.graphics.use("playerIdleN")
        }

        if (this.lastDirection === "East") {
            this.graphics.use("playerIdleE")
        }

        if (this.lastDirection === "South") {
            this.graphics.use("playerIdleS")
        }
        if (this.lastDirection === "West") {
            this.graphics.use("playerIdleW")
        }
    }

    createNet() {
        if (this.net && this.net.scene) {
            this.net.kill();
        }
        this.net = new Net(this);

        let offset = new Vector(0, 0);
        if (this.attackDirection === "North") offset = new Vector(0, -10);
        if (this.attackDirection === "East") offset = new Vector(10, 0);
        if (this.attackDirection === "South") offset = new Vector(0, 40);
        if (this.attackDirection === "West") offset = new Vector(-10, 0);

        this.net.pos = offset;
        this.addChild(this.net)
    }

    attackDirectionHandler() {

        this.isAttacking = true

        if (this.attackDirection === "North") {
            this.state = "attackingNorth"
            this.createNet()
            this.net.attack();
            setTimeout(() => {
                // this.returnToIdle();
                this.state = null
                this.net.kill()
                this.isAttacking = false
            }, 500); // 1000 ms = 1 second pause 
        }

        if (this.attackDirection === "East") {
            this.state = "attackingEast"
            this.createNet()
            this.net.attack();
            setTimeout(() => {
                // this.returnToIdle();
                this.state = null
                this.net.kill()
                this.isAttacking = false
            }, 500); // 1000 ms = 1 second pause 

        }

        if (this.attackDirection === "South") {
            this.state = "attackingSouth"
            this.createNet()
            this.net.attack();
            setTimeout(() => {
                // this.returnToIdle();
                this.state = null
                this.net.kill()
                this.isAttacking = false
            }, 500); // 1000 ms = 1 second pause 

        }
        if (this.attackDirection === "West") {
            this.state = "attackingWest"
            this.createNet()
            this.net.attack();
            setTimeout(() => {
                // this.returnToIdle();
                this.state = null
                this.net.kill()
                this.isAttacking = false
            }, 500); // 1000 ms = 1 second pause 
        }
    }

    // returnToIdle() {
    //     this.state = "idleEast"
    // }

    reduceHealthOfPlayer() {
        this.hitpoints--;
        const percent = Math.max(this.hitpoints / 10, 0);
        this.healthbar.scale = new Vector(percent, 1);

        if (this.hitpoints <= 0) {
            // this.idkDie?()
        }
    }

    playerMovement(engine) {
        let xspeed = 0;
        let yspeed = 0;

        if (engine.input.keyboard.isHeld(Keys.W)) {
            yspeed = -200;
            this.graphics.use("playerWalkingN")
            this.lastDirection = "North"
            this.attackDirection = "North"
        }

        if (engine.input.keyboard.isHeld(Keys.S)) {
            yspeed = 200;
            this.graphics.use("playerWalkingS")
            this.lastDirection = "South"
            this.attackDirection = "South"
        }

        if (engine.input.keyboard.isHeld(Keys.A)) {
            xspeed = -200;
            this.graphics.use("playerWalkingW")
            this.lastDirection = "West"
            this.attackDirection = "West"
        }

        if (engine.input.keyboard.isHeld(Keys.D)) {
            xspeed = 200;
            this.graphics.use("playerWalkingE")
            this.lastDirection = "East"
            this.attackDirection = "East"
        }

        this.vel = new Vector(xspeed, yspeed);
        // this.graphics.flipHorizontal = (this.vel.x < 0);
    }
}