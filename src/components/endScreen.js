import { Text } from '@pixi/text'
import { Texture } from '@pixi/core'

export default class EndScreen extends Text {
    constructor() {
        super(Texture.EMPTY)

        this.label = new Text('')
        this.label.anchor.set(0.5)
        this.addChild(this.label)
        this.text = Text("This is the End Screen.")
        this.anchor.set(.5)
        this.position.set(400, 400)
    }
}