function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(!(edad>12 && edad<18))
	{
		alert("no es adolescente")
	}




}//FIN DE LA FUNCIÓN

/*
//el 5
function mostrar()
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad<18 && edad>12)
	{
		
	}else
	{
		alert("no es adolescente");
	}

	if(!(edad<18 && edad>12))
	{
		alert("no es adolescente");
	}

	if(edad>17 || edad<13))
	{
		alert("no es adolescente");
	}

	if(edad>17) 
	{
		alert("no es adolescente");
	}
	if(edad<13) 
	{
		alert("no es adolescente");
	}

	//error forzado
	if(edad>17  && edad<13))// ninguno , no entra nunca
	{
		alert("no es adolescente");
	}

}//FIN DE LA FUNCIÓN */