/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/
function mostrar()
{
	var estadoCivilIngresado;
	var edad;

	estadoCivilIngresado = estadoCivil.value;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad<18 && estadoCivilIngresado != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}
	
	


}//FIN DE LA FUNCIÓN