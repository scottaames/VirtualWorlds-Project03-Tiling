import { Application } from '@pixi/app'
import { Text } from '@pixi/text'
import Background from './components/Background'
import Ground from './components/Ground'
import Clouds from './components/Clouds'
import Player from './components/Player'
import Enemy from './components/Enemy'
import Button from './components/Button'
import Collision from './components/Collision'

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
        this.loader.add('button', './assets/button.png')
        this.loader.load(this.renderGame.bind(this))
    }

    renderGame() {
        this.restartBtn = new Button({
            label: 'Restart',
            width: 200,
            height: 80,
            onTap: () => location.reload()
        })
        this.loseText = new Text('Sorry, you lost', {fill: '#FFFFFF', fontSize: 28})
        this.loseText.anchor.set(0.5)
        this.loseText.position.set(400, 200)
        this.winText = new Text('You survived for 30 seconds, you won!', {fill: 'yellow', fontSize: 28})
        this.winText.anchor.set(0.5)
        this.winText.position.set(400, 200)
        this.background = new Background()
        this.ground = new Ground()
        this.clouds = new Clouds()
        this.player = new Player()
        this.enemy = new Enemy()
        this.timeLeft = 30
        this.timer = new Text(String(this.timeLeft), {
            fontFamily: "Futura",
            fontSize: 64,
            fill: "yellow"
        })
        this.timer.visible = true
        this.timer.position.set(0, 10)
        this.timerId = setInterval(this.countdownTimer.bind(this), 1000)
        this.restartBtn.visible = false
        this.loseText.visible = false
        this.winText.visible = false
        this.stage.addChild(this.restartBtn, this.timer, this.loseText, this.winText, this.background, this.ground, this.clouds, this.player, this.enemy)
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
        // console.log("Enemy width: " + this.enemy.width)
        // console.log("Enemy height: " + this.enemy.height)

        if(Collision.checkRectangleCollision(this.player, this.enemy))
        {
            this.goToEndScreen()
        }
    }

    goToEndScreen(){
        this.background.visible = false
        this.player.visible = false
        this.clouds.visible = false
        this.enemy.visible = false
        this.ground.visible = false
        this.timer.visible = false
        this.restartBtn.visible = true
        this.loseText.visible = true
    }

    countdownTimer() {
        if (this.timeLeft == 0)
        {
            clearTimeout(this.timerId)
            this.background.visible = false
            this.player.visible = false
            this.clouds.visible = false
            this.enemy.visible = false
            this.ground.visible = false
            this.timer.visible = false
            this.restartBtn.visible = true
            this.winText.visible = true
        }
        else
        {
            this.timer.text = String(this.timeLeft)
            this.timeLeft--
        }
    }

    /*
        Sets the size for all objects centered around the renderer size
     */
    setSize() {
        this.renderer.resize(800, 800)
        const width = this.renderer.width, height = this.renderer.height
        this.restartBtn.x = width * 0.5
        this.restartBtn.y = height * 0.5 - this.restartBtn.height * 0.5
        this.background.setSize(width, height)
        this.ground.setSize(width, height)
        this.clouds.setSize(width, height)
        this.player.setSize(width, height)
        this.enemy.setSize(width, height)
    }
}