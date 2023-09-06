//Funciones
//Programa para hacer limonada
function exprimirLimones(cantidad){
    console.log ("Exprimiendo + cantidad + limones");
    let jugoExtraido = cantidad *10 //considerado obtener 10 ml de jugo por cada limon
    console.log ("Se obtuvo jugo "+ jugoExtraido + "ml de jugo de limon");
    return jugoExtraido; //return
}

//Funcion para mezclar el jugo con agua y azucar
function mezclarJugoDeLimon (cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar){
    console.log ("Mezclando" + cantidadDeJugo + "ml de jugo de limon con" + cantidadDeAgua + "ml de agua y " + cantidadDeAzucar + " gramos de azucar" );
}
//Funcion para servir la limonada
function servirLimonada (){
    console.log ("Sirviendo la limonada en un vaso");
    vasoDeLimonada = true;
}

//Funcion principal preparar mi limonada
function prepararLimonada(cantidadDeLimon){
    let jugoDeLimon = exprimirLimones(cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10); //Cantidades ficticias de jugo de limon, de agua y de azucar
    servirLimonada();
}

// Llamamos  la funcion principal para preparar la limonada
var vasoDeLimonada = false;
prepararLimonada (5);//llamando al programa