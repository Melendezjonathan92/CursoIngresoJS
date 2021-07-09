/*Jonathan Melendez Division H
E/s Ejercicio 10 bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
let Importe;
let Descuento;
let Total
let descuentoCliente= prompt("ingrese su descuento");
Importe=txtIdImporte.value;
Importe=parseInt(Importe);

descuentoCliente=parseInt(descuentoCliente);

Descuento=(Importe * descuentoCliente /100);
Total=(Importe-Descuento);



txtIdResultado.value=Total;


	
}
