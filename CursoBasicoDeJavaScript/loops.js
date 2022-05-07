var estudiantes = ['Maria', 'Pedro', 'Juan', 'Alberto']

function Saludarestudiantes (estudiantes) {

    console.log(`Hola, ${estudiantes}`)
}

for (var i = 0; i < estudiantes.length; i++){

    Saludarestudiantes(estudiantes[i])
}