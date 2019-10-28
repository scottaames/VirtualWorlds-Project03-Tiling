import { Texture } from '@pixi/core'
import { Sprite } from '@pixi/sprite'
import anime from 'animejs'

export default class Enemy extends Sprite {
    constructor() {
        super(Texture.EMPTY)

        this.sprite = Sprite.from('enemy')
        this.sprite.anchor.set(0.5)
        this.sprite.scale.set(.85)
        this.addChild(this.sprite) 
        console.log("Enemy width: " + this.width)
        console.log("Enemy height: " + this.height)
        this.animate()
    }

    animate() {
        anime({
            targets: this.sprite,
            x: {
                value: 25,
                duration: 2000,
                easing: 'easeInOutCubic'
            },
            loop: true,
            direction: 'alternate'
        })

        anime({
            targets: this.sprite,
            duration: 750,
            y: {
                value: 10,
                easing: 'easeInOutQuad'
            },
            loop: true,
            direction: 'alternate'
        })

        const angle = 0.02
        this.sprite.rotation = angle
        anime({
            targets: this.sprite,
            duration: 1000,
            rotation: {
                value: -angle,
                easing: 'easeInOutQuad'
            },
            loop: true,
            direction: 'alternate'
        })
    }

    onUpdate(delta) {
        this.x <= (-100 - this.width) ? this.setSize(800, 800) : this.x -= delta * 3
    }

    setSize(width, height) {
        this.x = width + 200
        this.y = this.randomInt(75, 650)
    }

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}