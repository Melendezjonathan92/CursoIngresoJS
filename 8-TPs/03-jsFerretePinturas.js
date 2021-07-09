/*Jonathan Melendez Division H Ejercicio Tp3


3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos 
mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var gradosF;
	var gradosC;
	gradosF=parseFloat(gradosF);
	gradosC=parseFloat(gradosC);
	gradosF=txtIdTemperatura.value;
	gradosC=((gradosF)-32)*5/9;
	alert(gradosF+" grados Fahrenheit son  "+gradosC.toFixed(2)+" grados centigrados");
}

function CentigradosFahrenheit () 
{
	var gradosF2;
	var gradosC2;
	gradosF2=parseInt(gradosF2);
	gradosC2=parseInt(gradosC2);
	gradosC2=txtIdTemperatura.value;
	gradosF2=((gradosC2*9/5)+32);

	alert(gradosC2+" grados centigrados son "+ gradosF2 + "  grados Fahrenheit");

}
