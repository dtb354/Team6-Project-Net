import { BossPillar } from "./bosspillar";
import { Actor, Animation, AnimationStrategy, CollisionType, Color, Engine, range, Shape, TextureLoader, Timer, Vector } from "excalibur";
import { pillarWind } from "./resources";

export class WindPillar extends BossPillar {
    constructor() {
        super({
            collisionType: CollisionType.Fixed,  
        })
        
        const windPillar = Animation.fromSpriteSheet(pillarWind, range(0, 4), 100);
        this.graphics.add("standing", windPillar);
            this.graphics.use("standing");
    }
}