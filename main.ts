input.onButtonPressed(Button.A, function () {
    basic.showNumber(kopf)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(anzahl - kopf)
})
let kopf = 0
let anzahl = 0
anzahl = 10000
kopf = 0
for (let index = 0; index < anzahl; index++) {
    if (randint(0, 1) == 0) {
        kopf += 1
    }
}
basic.showString("Fertig")
