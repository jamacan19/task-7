basic.forever(function () {
    if (input.soundLevel() < 100) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, randint(0, 50))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, randint(0, 50))
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
