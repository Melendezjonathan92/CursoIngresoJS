/*Jonathan Melendez Division h
E/s Ejercicio 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
let n1 ;
let n2 ;
let suma;
n1 = txtIdNumeroUno.value  ;
n2 = txtIdNumeroDos.value ;

n1=parseInt(n1);
n2=parseInt(n2);
suma =n1+n2

	alert("la suma es " + suma );	
}

function restar()
{
let n1 ;
let n2 ;
let resta;
n1 = txtIdNumeroUno.value  ;
n2 = txtIdNumeroDos.value ;

n1=parseInt(n1);
n2=parseInt(n2);
resta = (n1 - n2);




alert ("la resta es " + resta)

}

function multiplicar()
{ 
let n1 ;
let n2 ;
let multi;
n1 = txtIdNumeroUno.value  ;
n2 = txtIdNumeroDos.value ;

n1=parseInt(n1);
n2=parseInt(n2);

multi =  n1 * n2

	alert("La multiplicacion es " + multi)
}

function dividir()
{
	
let n1 ;
let n2 ;
let divi;
n1 = txtIdNumeroUno.value  ;
n2 = txtIdNumeroDos.value ;

n1=parseInt(n1);
n2=parseInt(n2);

divi= n1 / n2

alert("la division es " + divi)

}

