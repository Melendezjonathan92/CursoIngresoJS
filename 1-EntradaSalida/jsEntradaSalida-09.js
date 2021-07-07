/*Jonathan Melendez Division H
E/s Ejercicio 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
let Sueldo
let Aumento

let Aumento2
Sueldo=txtIdSueldo.value;
Sueldo=parseInt(Sueldo);
Aumento=(Sueldo * 0.10);

Aumento=parseInt(Aumento)
Aumento2 =(Sueldo + Aumento);
	

txtIdResultado.value=Aumento2;



}
