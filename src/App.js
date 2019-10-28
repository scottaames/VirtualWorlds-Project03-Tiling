import { Application } from '@pixi/app'
import Background from './components/Background'
import Ground from './components/Ground'
import Clouds from './components/Clouds'
import Player from './components/Player'
import Enemy from './components/Enemy'

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
        this.loader.add('enemy', './assets/enemy.png')
        this.loader.load(this.renderGame.bind(this))
    }

    renderGame() {
        this.background = new Background()
        this.ground = new Ground()
        this.clouds = new Clouds()
        this.player = new Player()
        this.enemy = new Enemy()
        //this.endScreen = new EndScreen()
        //this.endScreen.visible = false
        this.stage.addChild(this.background, this.ground, this.clouds, this.player, this.enemy)
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
        this.enemy.onUpdate(delta)

        if(this.player.checkCollision(this.enemy.x, this.enemy.y, this.enemy.width, this.enemy.height))
        {
            this.background.visible = false;
            this.player.visible = false;
            this.clouds.visible = false;
            this.enemy.visible = false;
            this.ground.visible = false;
            //this.endScreen.visible = true;
        }
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
        this.enemy.setSize(width, height)
    }
}