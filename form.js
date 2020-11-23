class Form{
    constructor(){

    }

    display(){

    var title = createElement("h2")
    title.html("Online Drivers Test")
    title.position(350, 10)
    
    var input = createInput("Name")
    input.position(40, 100)

    var button = createButton("Play")
    button.position(150, 150)

    var greeting = createElement("h3")
    button.mousePressed(function(){

        input.hide()
        button.hide()

        var name = input.value()
        greeting.html(" Hello " + name)
        greeting.position(100, 100)

        playerCount = playerCount + 1
        player.update(name)

        player.updateCount(playerCount)
    })
    }


}