/*Jonathan MElendez Division H Ejercicio 10 IF*/
function mostrar()
{
	var notaRandom
	notaRandom= Math.floor(Math.random()*10)+1;

	if(notaRandom>8)
		
	{
		alert("Su nota es "+notaRandom+" excelente");
	}
	else
	{
		if(notaRandom>3)
		{
			alert("Su nota es "+notaRandom+" Aprobó");
		}	
			
		else
		{
			alert("Su nota es "+notaRandom+" Vamos, la proxima se puede");

		}


	}


}

	

//FIN DE LA FUNCIÓN