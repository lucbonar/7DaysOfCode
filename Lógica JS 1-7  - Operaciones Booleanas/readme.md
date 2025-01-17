# Desafíos con la Comparación de Tipos en JavaScript

## Introducción

Este primer día es muy importante. Al final de él, tendrás un nuevo conocimiento que es esencial para los próximos desafíos.

Existe una situación muy común para quienes usan **JavaScript**: problemas con los tipos de variables al comparar los valores de dos variables entre sí. ¡A mí me ha pasado mucho!

En lenguajes de programación compilados, como **Java** y **C#**, este problema se detecta en tiempo de compilación, y tienes un aviso claro del error mientras desarrollas el código.

Sin embargo, en **JavaScript**, estos errores pasan desapercibidos, ya que el código no pasa por un compilador. Es decir, los errores solo aparecen en **tiempo de ejecución**.

## El Problema de la Comparación en JavaScript

La parte más confusa para quienes están comenzando a aprender lógica con **JavaScript** es la operación de **igualdad** entre valores. Dependiendo de cómo escribas tu código, **JavaScript** realizará una conversión implícita de tipo a un tipo booleano de manera automática, y esto afectará a variables que eran de tipo **String**, **Number**, **Object**, etc.

Esto causa algunos comportamientos extraños, como los siguientes, que retornan `true`:

```javascript
console.log( false == '0' );           // true
console.log( null == undefined );      // true
console.log( " \t\r\n" == 0 );         // true
console.log( ' ' == 0 );               // true


##Tarea del Día
Tu tarea de hoy es reescribir el código a continuación para que imprima la información de manera correcta, que tenga sentido y sin errores:


```javascript
let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

if (/* COMPARAR numeroUn y stringUn */) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}

if (/* COMPARAR numeroTreinta y stringTreinta */) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}

if (/* COMPARAR numeroDiez y stringDiez */) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}


##Requisitos
Usa el operador de comparación adecuado para que las condiciones se validen correctamente.
Asegúrate de que el código refleje las comparaciones correctas entre los tipos de datos.
