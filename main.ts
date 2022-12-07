namespace SpriteKind {
    export const Block = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Timez == 0) {
        Timez = 500
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (Shop_Open == false) {
        grid.move(mySprite, 0, -1)
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    if (Shop_Open == false) {
        grid.move(mySprite, 1, 0)
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    if (Shop_Open == false) {
        grid.move(mySprite, 0, 1)
    }
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (Shop_Open == false) {
        grid.move(mySprite, -1, 0)
    }
})
let mySprite: Sprite = null
let Timez = 0
let Shop_Open = false
Shop_Open = false
Timez = 0
let mONEY = 10
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level2`))
mySprite = sprites.create(assets.image`Arrow`, SpriteKind.Player)
mySprite.z = 1000000
grid.snap(mySprite)
let Center = sprites.create(img`
    b b b b b b b b 
    b d d d d d d b 
    b d d d d d d b 
    b f f f f f f b 
    b d d d d d d b 
    b f f f f f f b 
    b d d d d d d b 
    b b b b b b b b 
    `, SpriteKind.Block)
controller.configureRepeatEventDefaults(20, 125)
grid.snap(Center)
grid.place(Center, tiles.getTileLocation(5, 6))
let textSprite = textsprite.create(convertToText(mONEY), 0, 1)
textSprite.setIcon(assets.image`Coin`)
textSprite.left = 1
textSprite.top = 105
forever(function () {
    textSprite.setText(convertToText(mONEY))
    textSprite.left = 1
})
game.onUpdateInterval(100, function () {
    if (Timez != 0) {
        mONEY += 1
    }
})
