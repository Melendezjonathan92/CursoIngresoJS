//*Jonathan Melendez Division H ejercio de parcial 2

function mostrar()
{
	var Nombre1
	var Nombre2
	var Peso1
	var Peso2
	var sumaPesos
	var PromedioPeso
	Nombre1=prompt("Ingrese nombre de la primera persona");
	Nombre2=prompt("Ingrese nombre de la segunda Persona");
	Peso1=prompt("Ingrese peso primera persona");
	Peso2=prompt("Ingrese peso segunda persona");
	Peso1=parseInt(Peso1);
	Peso2=parseInt(Peso2);
	sumaPesos=(Peso1+Peso2);
	sumaPesos=parseInt(sumaPesos);
	PromedioPeso=(sumaPesos/2);
	PromedioPeso=parseInt(PromedioPeso);
	alert("ustedes se llaman "+Nombre1+" y" +Nombre2+",pesan "+Peso1 +"kg y "+ Peso2+ " kg, que sumados dan "+ sumaPesos +"kilos y el promedio de peso es "+ PromedioPeso +" kg ." )
}
