// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array.shift()
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for (let i = 0; i < array.length; i++){
    array[i] = array[i] + 1
  }
return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  //palabras.join(" ") ...ésta es la forma fácil :)

  var string = '';
  for (let i= 0; i< palabras.length; i++){
    if(i === palabras.length - 1){
      string = string + palabras[i]
    } else string = string + palabras[i] + " "
  }
  return string;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i= 0; i< array.length; i++){
        if(array[i] === elemento) return true
  }
  return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0
  for (let i= 0; i< numeros.length; i++){
    suma += numeros[i]
  }
  return suma

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0
  for (let i= 0; i< resultadosTest.length; i++){
    suma += resultadosTest[i]
  }
  return suma/resultadosTest.length

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  //Math.max ...es la forma más facil :)

  let bigger = numeros[0];
  for (let i = 0; i < numeros.length; i++){
          if(numeros [i] > bigger) bigger = numeros [i]
  }
  return bigger;
}


function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí  
  var table = []

  for (i = 0; i < 11; i++){
    table.push(6 * i)
  }
  return table
    
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  let multiplicacion = 1;
  if (arguments.length === 0) return 0;
  else {
      for (let i = 0 ; i < arguments.length; i++) {
        multiplicacion = multiplicacion * arguments [i]
    }
    return multiplicacion
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
let cuenta = 0
for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i] > 18) cuenta++
}
return cuenta

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana" si el 
  //día corresponde a Sábado o Domingo y "Es dia Laboral" en caso contrario. 
  //Escribe tu código aquí
  if(numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana"
  else return "Es dia Laboral"

} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  //var numero = n.toString ()
  //if(numero[0] === 9 ) return true
  //else false

  var entero = 10
  while (entero > 9){
    entero = Math.trunc(n / 10) //math.trunc devuelve la parte entera y retira los decimales
                        //siempre divido entre 10 para tomar solamente parte entera
  }
  if(entero === 9 || n === 9) return true
  else return false
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let elemento = arreglo[0]
  for (let i = 0; i < arreglo.length; i++) {
        if(arreglo [i] != elemento) return false 
  }
  return true
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = []
  for (let i = 0; i < array.length; i++) {
      if(array[i] === "Enero" || array [i] === "Marzo" || array[i] === "Noviembre") nuevoArray.push(array[i])
    }
    if(nuevoArray.length < 3) return "No se encontraron los meses pedidos"
    else return nuevoArray

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray = []
  for (let i = 0; i < array.length; i++) {
      if(array[i] > 100) nuevoArray.push(array[i]) 
                        //AL NUEVO ARRAY LE PUSHEO EL ARRAY EN ESA POSICION :)
  }
  return nuevoArray

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let nuevoArray = []
  for (let i = 0; i < 10; i++) {
            numero = numero + 2
            if(numero === i){
              return "Se interrumpió la ejecución"
            }
            nuevoArray.push(numero)
    
  }
  return nuevoArray


}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let nuevoArray = []
  for (let i = 0; i < 10; i++) {
            if(i === 5){
              continue
            } else
            numero = numero + 2 
            nuevoArray.push(numero)
    
  }
  return nuevoArray


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  tablaDelSeis,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
