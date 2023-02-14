basic.forever(function () {
    if (input.soundLevel() < 90) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, randint(0, 50))
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, randint(0, 50))
        basic.pause(500)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(2000)
    }
})
