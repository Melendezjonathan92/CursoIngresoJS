//*Jonathan Melendez Division H Ejercicio 3 del primer parcial


function mostrar()
{	var precio
	var porcentaje
	var precioDesc
	var Total

	Total=parseInt(Total);
	precio=prompt("ingrese el precio");
	precio=parseInt(precio);

	porcentaje=prompt("ingrese su descuento");
	porcentaje=parseInt(porcentaje);

	precioDesc=(precio*porcentaje/100);

	Total=precio-precioDesc;

	elPrecioFinal.value=Total;




}
