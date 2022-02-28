const obs = new OBSWebSocket()
obs.connect({ address: "localhost:4444" })

window.addEventListener("gamepadconnected", function (e) {
    console.log(e)
    let isPressed = false
    setInterval(function () {
        let gp = navigator.getGamepads()[0]
        isPressed = gp.buttons[4].pressed
        console.log(isPressed)
        if (isPressed) {
            console.log("pressed")
            obs.send("SetSceneItemProperties", {
                item: "screen",
                bounds: {
                    x: 700 * Math.abs(0.8),
                    y: 520 * Math.abs(0.8),
                },
            })
        } else {
            obs.send("SetSceneItemProperties", {
                item: "screen",
                bounds: {
                    x: 1920,
                    y: 1080,
                },
            })
        }
    }, 100)
})
