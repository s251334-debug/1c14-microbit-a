enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        lap += 1
        datalogger.log(datalogger.createCV("LAP", lap))
        basic.showIcon(IconNames.Yes)
    }
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.A, function () {
    lap += 1
    pksdriver.servo(pksdriver.Servos.S1, 0)
    datalogger.log(datalogger.createCV("LAP", lap))
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(2000)
    pksdriver.servo(pksdriver.Servos.S1, 90)
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
let lap = 0
radio.setGroup(4)
datalogger.setColumnTitles(
"x",
"LAP"
)
lap = 0
pksdriver.servo(pksdriver.Servos.S1, 0)
basic.showIcon(IconNames.Heart)
