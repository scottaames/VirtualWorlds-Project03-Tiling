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
    }

    init() {

    }

    draw() {

    }

    onUpdate(delta){

    }

    onKeyPress() {

    }
}