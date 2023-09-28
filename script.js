alert ("Hola lunes de semana cinco :O");

var frasco = "pastillas";
var frasco = "pasitas con chocolate";
var frasco = "shampoo";

console.log(frasco);



/*tipos de datos primitivos y no primitivos 

string
number
boolean
undefined
null
symbol
object (no es primitivo)
*/

//string es una cadena de texto, que siempre debe ir entre comillas simples o dobles 
/*var vaso = "leche";

//number no lleva comillas y se refiere aun numero con el cual podemos hacer operaciones
var edad = 31;

//Boolean solamente tiene dos salidas que es true o false

var cuentasPremium = false;

//undefined es un tipo de dato que existe pero no está definido o inicializado

var proximaCita;

//null es un valor que no tenemos pero que declaramos

var asistenciaInvitado = null; */ 

var edad = "26"
var peso = 66;

console.log(edad);

console.log(typeof(edad));

//typeof es una palabra reservada que nos ayuda a saber que tipo de dato tenemos

//var es una variable con alcance global (tiene mayor alcance)

//let es una variable con alcance local(solo se utiliza dentro de un bloque de codigo)

//const es una constante, es decir que se mantiene y puede ser local o global

var pesoCadena = peso.toString();
console.log (pesoCadena);
console.log(typeof(pesoCadena)); 

var edadNumero = parseInt(edad)
console.log (edadNumero);
console.log (typeof(edadNumero)); 

//--------------------------------------------------------------------------------------------------------------

//inicia practica con Mariana de funciones


//Funciones


/* 
*Una funcion es un bloque de codigo que realiza una tarea especifica, cuando se le llma.
*Cada funcion de JavaScript es un objeto funcion
*/

function saludar () {
    console.log("Hola soy una funcion");
}
saludar();

/** * Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y funciones que generan otras funciones. 
 
*/

//Declarar funciones
/*
* La palabra reservada function, que nos indica que estamos definiendo una funcion.
* El nombre de la funcion, dependiendo de la accion a realizar.
* Un par de parentesis () despues del nombre. Puede contener
parametros. En este caso no tenemos ninguno.
*Seguido de un juego de llaves para cerrar el bloque de codigo.
* Dependiendo de las instrucciones dentro del cuerpo de la funcion y del proposito de la misma, se determina si la funcion retorna un valor 

*/


// Lammamos una funcion y le vamos a almacenar un resultado 
function suma (a,b) {
         return a + b;
}

var resultado = suma (5,3); // Almacenar funcion en una variable
console.log(resultado); //funcion

/*La función suma toma dos argumentos (a y b) y devuelve la suma de estos dos valores. Luego, llamamos a la función y almacenamos el resultado en la variable resultado. */

//Funcion qu muestra un mensaje en la consola
function saludar (nombre) {
  console.log ("Hola, " + nombre + "!");
}

//Lamamos a la funcion saludar a alguien
saludar("Mar"); // imprime el saludo

/* 
 * La funcion saludar toma un argumento (nombre) y muestra un mensaje en la consola. Aunque la función no devuelve un valor explícitamente con return, realiza una acción (mostrar un mensaje) cuando se llama. 
 */


//Hoisting
/* Es fundamental en el entendimiento de la forma en que se jeecuta nuestro código JS, esto aplica tanto para variables como para funciones. Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del código.
*Yo puedo invocar una funcion antes de siquiera declararla

Es importante declarar nuestras variables para evitar conflictos futuros
*/


console.log(miVariable); // no da error, pero imprime "undefined"
var miVariable = 10;

//Scope = alcance, hace referencia al alcance de una variable en nuestro codigo JS.
/*
* Global : quiere decir que se puede utilizar o trabajar con una variable dentro de cualquier parte del codigo.
* var : no es recomendado, por comportamiento de la variable y la poca adaptabilidad.
* let: es preferible e incluso mas segura de utilizar porque ademas de funcionar de manera global, tambien puede ser utilizada de manera local.
* const: se fefiere, por su nombre  tan intuitivo, a la palabra constante, esto quiere decir que su valor no puede ser reasignado.
*/
//variable local
function funcionConvariableLocal(){
    var mensaje = "Esta es una variable local";
    console.log (mensaje);
}
//funcionConVariablelocal ();
//var mensaje = "holis";
//console.log(mensaje);
/* * En este ejemplo, la variable mensaje se declara dentro de la función funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ámbito de esa función. Si intentamos acceder a ella fuera de la función, obtendremos un error. */

//Variable global
var mensajeGlobal = "esta es una variable global"

function funcionConVariableGlobal(){
    console.log(mensajeGlobal);
}
funcionConVariableGlobal(); //la estamos llamando 

/**En este ejemplo, la variable mensajeGlobal se declara fuera de cualquier función, lo que la convierte en una variable global. Esto significa que es accesible desde cualquier parte del código, tanto dentro como fuera de la función funcionConVariableGlobal. */


//----------------------------------------------------------------------------------------------------------------

//Funciones anónimas

/*
* estas funciones pueden ser declaradas sin un nombre y luego asigandas a variables o pasarse como un parametro en otras funciones.
La diferencia principal de esta funciones es que se declaran sin nombre.
*/

//function (){
    console.log("oye, tranquilo viejo"); //funcion anonima
//}
const saludo = function (){
    console.log  ("oye, tranquilo viejo");
}
saludo();

//---------------------------------------------
//Funciones flecha//
//---------------------------------------

/*
* Una  forma mas consisa de definir funciones anonimas. Se le llama flecha debido a su sintaxis que utiliza (=>)
* Basicamente, se trata de reemplazar la palabra funtion y aniadir => antes de abrir nuestras llaves.
*/
const resta = (a,b) => a - b;
/*
* esta funcion flecha es una forma mas corta de : 
*const resta = function (a,b){
* return a - b;
}


*/
console.log(resta(5,3));






























