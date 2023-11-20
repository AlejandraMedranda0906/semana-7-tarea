//Crear una función que calcule la edad de una persona. 
//La función toma como parámetro el año de nacimiento y 
//devuelve la edad correspondiente

function calculeEdad(añoActual, añoNacimiento){
    let resta = añoActual - añoNacimiento
    let calcularEdad = resta;

    return calcularEdad;
}
    
let añoActual=Number(prompt("ingrese su año de nacimiento"));
let añoNacimiento=Number(prompt("ingrese el año actual"));

let result = calculeEdad(añoActual,añoNacimiento);
alert (result);
