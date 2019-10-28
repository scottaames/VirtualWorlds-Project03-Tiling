import { Application } from '@pixi/app'
import { Renderer } from '@pixi/core'
import { BatchRenderer } from '@pixi/core'
import { TilingSpriteRenderer } from '@pixi/sprite-tiling'
import { TickerPlugin } from '@pixi/ticker'
import { AppLoaderPlugin } from '@pixi/loaders'
import { InteractionManager } from '@pixi/interaction'
import App from './App'

Renderer.registerPlugin('batch', BatchRenderer)
Renderer.registerPlugin('tilingSprite', TilingSpriteRenderer)
Renderer.registerPlugin('interaction', InteractionManager)
Application.registerPlugin(TickerPlugin)
Application.registerPlugin(AppLoaderPlugin)

new App()
