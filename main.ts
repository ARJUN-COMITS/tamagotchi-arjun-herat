input.onButtonPressed(Button.A, function () {
    voeding += 5
})
input.onButtonPressed(Button.B, function () {
    knuffel += 5
})
let knuffel = 0
let voeding = 0
let dood = 20
dood = 20
dood = 0
loops.everyInterval(500, function () {
    knuffel += -1
    voeding += -1
})
basic.forever(function () {
    if (knuffel > 10 && voeding > 10) {
        basic.showIcon(IconNames.Happy)
    }
    if (knuffel > 10 && voeding < 10 || knuffel < 10 && voeding > 10) {
        basic.showIcon(IconNames.Sad)
    }
    if (knuffel < 0 || voeding < 0) {
        dood = 1
        basic.showIcon(IconNames.Asleep)
    }
})
