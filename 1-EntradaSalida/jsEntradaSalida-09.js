/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{


//txtIdSueldo    txtIdResultado

	var sueldo;
	var resultado;
	var porcentaje;

	sueldo = txtIdSueldo.value;
 
	sueldo = parseInt(sueldo);

	//porcentaje = sueldo * 10 / 100;

	//resultado = sueldo + porcentaje;

	resultado = sueldo * 1.1;

	txtIdResultado.value = resultado;
 
	
	
}
 