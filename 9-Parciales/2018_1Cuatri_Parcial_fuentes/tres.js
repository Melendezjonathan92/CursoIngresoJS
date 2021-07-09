//Jonathan Melendez Division H ejercicio 3 Parcial 2018

function mostrar()
{	
	var precioInicial;
	var porcentajeDescuento;
	var precioDescuento;
	var precioTotal
	precioInicial=parseInt(precioInicial);
	porcentajeDescuento=parseInt(porcentajeDescuento);
	precioDescuento=parseInt(precioDescuento);
	precioInicial=prompt("Ingrese el valor de su producto ");
	porcentajeDescuento=prompt("Ingrese su descuento ");
	precioDescuento=(precioInicial*porcentajeDescuento/100);
	precioTotal=precioInicial-precioDescuento;
	elPrecioFinal.value=precioTotal;
}
