input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - index)
    }
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.showString("GO")
})
basic.forever(function () {
	
})
