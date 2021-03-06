/**
 * Tim
 */
input.onButtonPressed(Button.A, function () {
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Bitte Warten", 0, 0)
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(20000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Bitte ausfahren", 0, 0)
})
input.onButtonPressed(Button.B, function () {
    I2C_LCD1602.BacklightOn()
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Bitte einfahren", 0, 0)
    pins.servoWritePin(AnalogPin.P1, 95)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
})
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.on()
I2C_LCD1602.clear()
I2C_LCD1602.BacklightOff()
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) >= 400) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("Bitte Warten", 0, 0)
        pins.servoWritePin(AnalogPin.P1, 180)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(20000)
        pins.digitalWritePin(DigitalPin.P8, 0)
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("Bitte ausfahren", 0, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(10000)
        I2C_LCD1602.clear()
        I2C_LCD1602.BacklightOff()
    }
})
