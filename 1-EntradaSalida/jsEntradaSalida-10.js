/*Jonathan Melendez Division H
E/s Ejercicio 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
let Importe;
let Descuento;
let Total
Importe=txtIdImporte.value;
Importe=parseInt(Importe);

Descuento=(Importe *0.25);
Total=(Importe-Descuento);



txtIdResultado.value=Total;


	
}
