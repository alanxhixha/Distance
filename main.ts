enum RadioMessage {
    message1 = 49434,
    RecievedNumber = 35633
}
radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -60) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
})
