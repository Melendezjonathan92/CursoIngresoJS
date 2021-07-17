/*JULIO Y AGOSTO --> Invierno abrigate que hace frio
Sept - OCT - NOV -->Primavera ya pasamos el frio
Diciembre - Enero - febrero --> VERANO ya pasamos el frio ahora hace calor
marzo- abril .- mayo -junio-->Otoño falta para el invierno*/


function mostrar()
{
	
	var mesDelAño;
	mesDelAño=txtIdMes.value;
	var mensaje;

	switch (mesDelAño)
	{

		
		case "Marzo":
		case "Abril":		
		case "Mayo":	
		case "Junio":
			mensaje = "Falta para el invierno.";
		break;
		case "Julio":		
		case "Agosto":
			mensaje=" Abrigate que hace frio.";
		break;
		default:
			mensaje = "Ya pasamos el frio, ahora hace calor";
		break;

	alert(mensaje);
	}



}//FIN DE LA FUNCIÓN