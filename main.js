//alert("JavaScript funcionando correctamente")

// Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”
//alert("JavaScript funcionando correctamente");

// Comenta el código que muestra el cuadro de diálogo
//alert("JavaScript funcionando correctamente");

// Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor;

// Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1 = true;
let booleano2 = false;
console.log(booleano1);

// Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.14;
console.log(PI);

// Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = 3.14 * 2;
console.log(TAU);

// Crear variable tipo const de nombre miNombre declarada con valor tu nombre
const miNombre = "Sif";

// Crear variable tipo const de nombre miNumeroFav declarada con valor numérico
const miNumeroFav = 10;

// Crea una variable de tipo booleano
let guapo = true;
// Muestra por consola la longitud de la variable miNombre
console.log("Mi nombre tiene " + miNombre.length + " letras");

// Muestra por consola el tipo de dato de la variable miNumeroFav
console.log("miNumFav es el tipo de dato: " + typeof miNumeroFav);

// Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.
let nombreEuralio = "Euralio";
let numerofavoritoEuralio = 7;
console.log(
  "Mi nombre es " +
    nombreEuralio +
    " y mi número favorito es " +
    numerofavoritoEuralio
);

// Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.
let sereUnCrack = "Seré un crack en JavaScript al terminar el bootcamp";
console.log(sereUnCrack.toUpperCase());

// Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”
let holaSoyCrack = "Hola soy un crack";
console.log(holaSoyCrack.substring(0, 5));

// Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable
let transformaNumero = toString(miNumeroFav);
console.log(typeof transformaNumero);

// Crea una variable y asignale un valor. Después utilizando template literal haz uso de la variable que habías creado,
// guarda el template literal en otra variable y sacala por consola.

// Muestra por consola la variable PI hasta los 2 primeros decimales

// 2.Arrays
// Crear variable de nombre arrayVacio cuyo valor sea un array vacío
const arrayVacio = [];

// Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)
const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
const arrayNumerosPares = [0, 2, 4, 6, 8];

// Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
const arrayNumerosNEg = [0, -2, -3, -4, -5, -6, -7, -8, -9];

// Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
const holaMundo = ["Hola", "Mundo"];

// Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
const loGuardoTodo = ["Hola", "que", 23, 42.33, "tal"];

// Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
const arrayDeArrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "dirección"],
];

// Muestra por consola la longitud del array “loGuardoTodo”
console.log(loGuardoTodo.length);

// Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola
loGuardoTodo.push(" estás?");
console.log(loGuardoTodo);

// Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo
console.log(loGuardoTodo[1]);

// Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala por consola
loGuardoTodo.unshift("Euralio ");
console.log(loGuardoTodo);

// 3.Objetos
// Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores
const coche = {
  marca: "Bugatti",
  modelo: "W16 Mistral",
  matricula: "F1E099",
};
console.log(coche);

// Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores
const casa = {
  codPostal: "03670",
  calle: "Doctor Carlo Magno",
  portal: "8",
  piso: "N°2",
};
console.log(casa);

// Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’),
// array proyectos(ej. ‘mi página personal’,etc)

const FullStackDeveloper = {
  arrayLenguajes: "PhP, JavaScript, CSS",
  arrayProyectos: "Mi primera pagina personal, WatchFight, Love The Sky",
};
console.log(FullStackDeveloper);

// Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores
const Perro = {
  nombre : "Brook, Neo, Ares",
  raza : "Bulldog, Pitbull",
  color : "Blanco, Negro, Marrón",
  edad : "1,5,10,16",
}
console.log(Perro);

// Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores
const Noticia = {
  titular : "Meloni gana las elecciones italianas",
  cuerpo : "lorem",
}
console.log(Noticia)

// Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores
const Persona = {
  nombre : "Trebol",
  Apellidos : "Lucky",
  Edad : "19"
}

// Muestra por consola el nombre de la variable Persona
console.log(Persona)


// Muestra por consola el lenguaje javascript de la variable FullStackDeveloper
// Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola
const Portatil = {
  marca : ["Mercedes", "BMW", "Ferrari"]
}
console.log(Portatil.marca)

// Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola
console.log(Portatil.marca[2])

// Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola
const Concierto = {
    grupos : ["herramientas", "ideas", "equipo"]
}
 console.log(Concierto.grupos[1])


// Crea un objeto de nombre Led, con las propiedades: rojo, verde y azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola
const Led = {
    RGB : ["rojo", "verde", "azul"]
}
console.log(Led.RGB)

// Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola
const O_Error = {
  valor : ["código"]
}
console.log(O_Error.valor)


// Crea un objeto de nombre Grupo con la propiedad integrantes (array),
//obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes
const Grupo = {
    integrantes: ["Segio", "Sofia", "German"]
}
console.log(Grupo.integrantes[2])


// Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola
const Impresora = {
  nivelesTinta: {
    tinta : ["rojo", "verde", "azul"]
  }
}
console.log(Impresora.nivelesTinta.tinta)
// Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] 
// guardándolo en la variable especificaciones y muestrala por consola
const Movil = {
  especificaciones : "especificaciones"
}
console.log(Movil.especificaciones)

// Dado el objeto de nombre Portatil con la propiedad marca, 
// modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado
const Concierto = {
  GunsNRoses : "Musica"
}
console.log(Concierto.GunsNRoses)
// Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado



// Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy), consolea el resultado


// Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)
