/*Al ingresar una edad menor a 18 años y un estado
 civil distinto a "Soltero", mostrar el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.' */
function mostrar()
{
	var edad;
	var estadoCivil1;

	edad = parseInt(edad);
	edad = txtIdEdad.value;
	estadoCivil1=estadoCivil.value ;
	if(!(edad >=18  &&  estadoCivil1 != "Soltero"))
	{  
		alert("Es muy pequeño para NO ser soltero.");
	}               

}//FIN DE LA FUNCIÓN