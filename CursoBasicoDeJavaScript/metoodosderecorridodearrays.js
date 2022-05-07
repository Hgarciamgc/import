var articulos = [{nombre: "Bici", costo: "300"},    
                 {nombre: "Tv", costo: "5000"},
                 {nombre: "Laptop", costo: "6000"},
                 {nombre: "celular", costo: "4000"},
                 {nombre: "Teclado", costo: "500"},
                 {nombre: "Libro", costo: "200"},
                 {nombre: "Audifonos", costo: "1000"},

]

var articulosfiltrados = articulos.filter (function (articulo){

    return articulo.costo <=500;
})

articulosfiltrados