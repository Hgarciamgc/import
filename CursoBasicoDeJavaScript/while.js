var estudiantes = ['Maria', 'Pedro', 'Juan', 'Alberto']

function Saludarestudiantes (estudiante) {

    console.log(`Hola, ${estudiante}`)
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    Saludarestudiantes (estudiante);
}