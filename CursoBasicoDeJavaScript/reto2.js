var piedra = 'piedra';
var tijera = 'tijera';
var papel  = 'papel';

function juego (user, cpu){

switch (true) {

    case (user === cpu):
        console.log("Empate")
        break;

    case (user== piedra && cpu== tijera):
        console.log("Gana el usuario")
        break;

    case (user == piedra && cpu== papel):
        console.log("Gana el cpu")
        break;

    case (user == tijera && cpu == piedra):
        console.log("Gana el cpu")
        break;
    
    case (user == tijera && cpu == piedra):
        console.log("Gana el usuario")
        break;

    case (user == papel && cpu == piedra):
        console.log("Gana el usuario")
        break;

    case (user == papel && cpu == tijera):
        console.log("Gana el cpu")
        break;
    
        default:
            console.log("No seleccionaste bien... intenta otra vez")

}

}