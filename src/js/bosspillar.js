import { Actor, CollisionType } from "excalibur";

export class BossPillar extends Actor {
    hitpoints; 
    healthbar;

    constructor() {
        super({
            collisionType: CollisionType.Active,
            
        })
    }

    onInitialize() {
        
    }
}