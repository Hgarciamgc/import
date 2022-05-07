var articulo= {

    Limpieza: "Escoba",
    Cocina: "Plato",
    Sala: "Muebles"
};

function imprimirArticulos (articulos) {

    console.log(Object.values(articulos))
}

imprimirArticulos (articulo)


//Tambien se puede hacer de la siguiente manera para imprimir uno por uno

var antonio = {
    name: 'Samuel',
    lastName: 'Parra',
    age: 4,
};

// Distintas formas de pasar un objeto 
// por parámetro a una función.

//El objeto completo
function showDataObject(param_persona) {
    console.log('Nombre:   ' + param_persona.name);
    console.log('Apellido: ' + param_persona.lastName);
    console.log('Edad:     ' + param_persona.age);
    console.log();
}