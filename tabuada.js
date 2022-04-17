function tabuada(base, multiplicador) {
    for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
        console.log(base + " X " + multiplicador + " = " + base * multiplicador)
    }
    console.log("----------------------")
    multiplicador = 1
}

for (base = 1; base <= 10; base++) {
    tabuada(base)
}