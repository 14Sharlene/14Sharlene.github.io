function greeting(name) {
reture ("Kia ora " + name + "!")
}

function testGreeting(){
    var expected = "Kia ora Cam!"
    var actual = greeting("Cam")

    if (actual != expected) {
        console.log("It's broken..")
    } else {
        console.log("It works!")
    }
}

