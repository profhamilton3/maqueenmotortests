input.onButtonPressed(Button.A, function () {
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
input.onButtonPressed(Button.B, function () {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 150)
})
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 101)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
