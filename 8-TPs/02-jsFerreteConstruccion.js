/*Jonathan Melendez Ej2 de trabajo practico Division H
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular
 y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y 
se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{	var largoTerreno
	var anchoTerreno
	var Perimetro
	largoTerreno=txtIdLargo.value;
	anchoTerreno=txtIdAncho.value;
	largoTerreno=parseInt(largoTerreno);
	anchoTerreno=parseInt(anchoTerreno);
	Perimetro=(largoTerreno*2)+(anchoTerreno*2)
	alert("El alambre que tiene que comprar es"+ Perimetro * 3+" mts");

}
function Circulo () 
{
	var radioTerreno;
	var perimetroCirculo;
	var alambrePerimetro;
	radioTerreno=txtIdRadio.value;
	radioTerreno=parseInt(radioTerreno);
	perimetroCirculo=parseInt(perimetroCirculo);
	perimetroCirculo=2*(radioTerreno *3.1416);
	alambrePerimetro=perimetroCirculo*3;
	alert("El alambre necesario es de "+ alambrePerimetro);
}
function Materiales () 
{	
	var largoTerreno1;
	var anchoTerreno1;
	var areaPiso;
	var bolsaCemento;
	var bolsaCal;
	largoTerreno1=txtIdLargo.value;
	anchoTerreno1=txtIdAncho.value;
	largoTerreno1=parseInt(largoTerreno1);
	anchoTerreno1=parseInt(anchoTerreno1);
	bolsaCemento=parseInt(bolsaCemento);
	bolsaCal=parseInt(bolsaCal);
	areaPiso=parseInt(areaPiso);
	areaPiso=anchoTerreno1*largoTerreno1
	bolsaCemento=areaPiso*2
	bolsaCal=areaPiso*3
	alert("el material necesario son : "+ bolsaCemento+" bolsas de cemento y "+ bolsaCal+" bolsas de cal.");
	
}