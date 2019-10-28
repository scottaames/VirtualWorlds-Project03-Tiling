import { Texture } from '@pixi/core'
import { Sprite } from '@pixi/sprite'
import anime from 'animejs'

export default class Player extends Sprite {
    constructor() {
        super(Texture.EMPTY)

        this.sprite = Sprite.from('enemy')
        this.sprite.anchor.set(0.5)
        this.sprite.scale.set(.8)
        this.addChild(this.sprite)

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
        this.x <= (0 - this.width) ? this.x = 1000 : this.x -= delta * 2
    }

    setSize(width, height) {
        this.x = width - 200
        this.y = height / 2
    }
}