/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

	var a;

	var b;

	a=txtIdNumeroUno.value;
	b=txtIdNumeroDos.value;



	var resultado;
	resultado= parseInt(a) + parseInt(b);


	alert("La suma es: "+resultado);	
}

function restar()
{

	a=txtIdNumeroUno.value;
	b=txtIdNumeroDos.value;

	var resultado;
	resultado = parseInt(a) - parseInt(b);


	alert("La resta es: "+resultado);
}

function multiplicar()
{ 
	a=txtIdNumeroUno.value;
	b=txtIdNumeroDos.value;
	
	var resultado;
	resultado = parseInt(a) * parseInt(b);


	alert("La multiplicacion es: "+resultado);
}

function dividir()
{

	a=txtIdNumeroUno.value;
	b=txtIdNumeroDos.value;
	
	var resultado;
	resultado = parseInt(a) / parseInt(b);


	alert("La division es: "+resultado);
	
}

