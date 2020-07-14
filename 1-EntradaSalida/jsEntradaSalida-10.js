/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{


	//txtIdSueldo    txtIdResultado

	var sueldo;
	var resultado;
	var porcentaje;

	sueldo = txtIdImporte.value;
 
	sueldo = parseInt(sueldo);

	porcentaje = sueldo * 25 / 100;

	resultado = sueldo - porcentaje;

	txtIdResultado.value = resultado;

	/*var sueldo;
	var resultado;
	var porcentaje;

	sueldo = txtIdImporte.value;
 
	sueldo = parseInt(sueldo);

	porcentaje = sueldo * 1.25;
	resultado = sueldo - porcentaje;
	
	txtIdResultado.value = resultado;*/

	
}
