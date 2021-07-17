//*Jonathan Melendez Division H Ejercicio IF 3
function mostrar()
{	
	var edadIngresada;
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);
	if(edadIngresada >= 18)
	{ 
		alert("La persona es mayor de edad.");

	}else(edadIngresada <= 17)
	{
		alert("La persona es menor de edad.");
	}	
}