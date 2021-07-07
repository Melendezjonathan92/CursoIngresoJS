/*Jonathan melendez Division H
E/S ejercicio 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
let Dividendo;
let Divisor;
let division;
var resto
Dividendo=txtIdNumeroDividendo.value;
Divisor= txtIdNumeroDivisor.value;

Dividendo=parseInt(Dividendo);
Divisor=parseInt(Divisor);
resto = (Dividendo % Divisor);


	alert("El resto es "+resto);
}
