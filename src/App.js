import { Application } from '@pixi/app'
import Background from './components/Background'
import Ground from './components/Ground'
import Clouds from './components/Clouds'
import Player from './components/Player'

export default class App extends Application {
    constructor(){
        super({
            width: 800,
            height: 800
        })
        const gameport = document.getElementById("gameport")
        gameport.appendChild(this.view)

        this.init()
    }

    init() {
        this.loader.add('bg', './assets/background.png')
        this.loader.add('ground', './assets/ground.png')
        this.loader.add('player', './assets/player.png')
        this.loader.add('clouds', './assets/clouds.png')
        this.loader.load(this.draw.bind(this))
    }

    draw() {
        this.background = new Background()
        this.ground = new Ground()
        this.clouds = new Clouds()
        this.player = new Player()
        this.stage.addChild(this.background, this.ground, this.clouds, this.player)
        this.setSize()

        // Create an update loop
        this.ticker.add(this.onUpdate.bind(this))
    }

    /*
        Updates the ground and clouds to simulate motion every frame
     */
    onUpdate(delta){
        this.ground.onUpdate(delta)
        this.clouds.onUpdate(delta)
    }

    /*
        Sets the size for all objects centered around the renderer size
     */
    setSize() {
        this.renderer.resize(800, 800)
        const width = this.renderer.width, height = this.renderer.height
        this.background.setSize(width, height)
        this.ground.setSize(width, height)
        this.clouds.setSize(width, height)
        this.player.setSize(width, height)
    }
}