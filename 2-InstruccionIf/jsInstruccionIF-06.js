function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad<12)
	{
alert("es un niño");
	}
	else
	{
		if(edad<18)
		{
			alert("es adolescente");
		}
		else
		{
				alert("es mayo de edad");
		}

	}
	
}

//FIN DE LA FUNCIÓN