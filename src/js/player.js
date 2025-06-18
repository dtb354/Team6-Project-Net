import { Actor, Animation, Axes, CollisionType, Keys, range, Vector } from "excalibur";
import { playerIdleSouth, playerWalkingEast, playerWalkingNorth, playerWalkingSouth, playerWalkingWest } from "./resources";
import { Net } from "./net";


export class Player extends Actor {

    constructor() {
        super({
            width: 20,
            height: 33,
            collisionType: CollisionType.Active,
        })
        this.scale = new Vector(1.5, 1.5);

        this.net = new Net();
        this.addChild(this.net)

    }

    onInitialize() {
        this.pos = new Vector(226, 450); // Spawn point for player

        const playerIdleS = Animation.fromSpriteSheet(playerIdleSouth, range(0, 7), 70);
        this.graphics.add("playerIdleS", playerIdleS);
        this.graphics.use(playerIdleS);

        const playerWalkingN = Animation.fromSpriteSheet(playerWalkingNorth, range(0, 7), 70);
        this.graphics.add("playerWalkingN", playerWalkingN);

        const playerWalkingE = Animation.fromSpriteSheet(playerWalkingEast, range(0, 7), 70);
        this.graphics.add("playerWalkingE", playerWalkingE);

        const playerWalkingS = Animation.fromSpriteSheet(playerWalkingSouth, range(0, 7), 70);
        this.graphics.add("playerWalkingS", playerWalkingS);

        const playerWalkingW = Animation.fromSpriteSheet(playerWalkingWest, range(0, 7), 70);
        this.graphics.add("playerWalkingW", playerWalkingW);

        // Zet a higher z value for the player to appear on top
        this.z = 10;

        // Background layers: 0-9
        // Game objects: 10-99
        // UI elements: 100+
    }

    onPreUpdate(engine) {
        // Gamepad movement
        if (engine.mygamepad) {
            const x = engine.mygamepad.getAxes(Axes.LeftStickX);
            const y = engine.mygamepad.getAxes(Axes.LeftStickY);
            this.vel = new Vector(x * 200, y * 200);

            // Deadzone threshold
            const threshold = 0.2;

            // Choose animation based on stick direction
            if (Math.abs(x) < threshold && Math.abs(y) < threshold) {
                this.graphics.use("playerIdleS");
            } else if (Math.abs(x) > Math.abs(y)) {
                if (x > 0) {
                    this.graphics.use("playerWalkingE");
                } else {
                    this.graphics.use("playerWalkingW");
                }
            } else {
                if (y > 0) {
                    this.graphics.use("playerWalkingS");
                } else {
                    this.graphics.use("playerWalkingN");
                }
            }
        } else {
            // Keyboard fallback
            this.playerMovement(engine);
        }
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.net.attack();
            // console.log("it works")
        }
    }

    playerMovement(engine) {
        let xspeed = 0;
        let yspeed = 0;

        this.graphics.use("playerIdleS")


        if (engine.input.keyboard.isHeld(Keys.W)) {
            yspeed = -200;
            this.graphics.use("playerWalkingN")
        }

        if (engine.input.keyboard.isHeld(Keys.S)) {
            yspeed = 200;
            this.graphics.use("playerWalkingS")
        }

        if (engine.input.keyboard.isHeld(Keys.A)) {
            xspeed = -200;
            this.graphics.use("playerWalkingW")
        }

        if (engine.input.keyboard.isHeld(Keys.D)) {
            xspeed = 200;
            this.graphics.use("playerWalkingE")
        }

        this.vel = new Vector(xspeed, yspeed);
        // this.graphics.flipHorizontal = (this.vel.x < 0);

    }
}