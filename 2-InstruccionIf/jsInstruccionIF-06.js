//*Jonathan Melendez Division H ejercicio 6 IF
function mostrar()
{	
	var edadIngresada
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("Es mayor de edad.");
	}
	else
	{
		if(edadIngresada>12 )
		{
			alert("Es adolecente.");
	
		}
		else
		{
			alert("Es un niño.");	
		}
	}

}

