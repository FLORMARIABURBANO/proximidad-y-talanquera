basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ))
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) < 5) {
        servos.P2.setAngle(90)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        servos.P2.setAngle(0)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
