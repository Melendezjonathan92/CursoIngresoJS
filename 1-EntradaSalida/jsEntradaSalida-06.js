/*Jonathan MElendez division h
ejercicio 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
let  NumeroUno ;
let  NumeroDos ;
let suma;







NumeroUno = txtIdNumeroUno.value  ;
NumeroDos = txtIdNumeroDos.value ;

NumeroUno = parseInt(NumeroUno);
NumeroDos = parseInt(NumeroDos);
suma = NumeroUno + NumeroDos;




	alert("la suma es :" + suma);
}

