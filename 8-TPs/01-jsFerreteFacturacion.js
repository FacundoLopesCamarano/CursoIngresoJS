/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/



//   txtIdPrecioUno      txtIdPrecioDos    txtIdPrecioTres


function Sumar () 
{
    var precioUno;
	var precioDos;
    var precioTres;
    var suma;


	precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);


	suma = precioUno + precioDos + precioTres;

	alert("valor total: "+suma);	
}
function Promedio () 
{
    
    var precioUno;
	var precioDos;
    var precioTres;
    var promedio;


	precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);


    promedio = (precioUno + precioDos + precioTres) / 3; //ok

    alert("El promedio es: " +promedio);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
    var precioTres;
    var suma;
    var porcentaje;
    var precioFinal;


	precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;
    porcentaje = suma * 21 / 100;
    precioFinal = suma + porcentaje; 
 
    

    alert(" El precio final es: " +precioFinal);

//lo unico que no me quedo clara es en este ahora paso

}