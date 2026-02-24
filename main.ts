basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showIcon(IconNames.ArrowNorth)
    } else if (input.isGesture(Gesture.LogoDown)) {
        basic.showIcon(IconNames.ArrowSouth)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        basic.showIcon(IconNames.ArrowEast)
    } else if (input.isGesture(Gesture.TiltRight)) {
        basic.showIcon(IconNames.ArrowWest)
    } else if (input.isGesture(Gesture.ScreenDown)) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
