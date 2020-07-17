/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/



// txtIdTemperatura

function FahrenheitCentigrados () 
{
    var temperatura;
    var resta
    var centígrados;
    

    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);
    resta = temperatura - 32;
    centígrados = resta / 1.8;

    alert(+ temperatura + " Fahrenheit son: " + centígrados + " centigrados ");


}

function CentigradosFahrenheit () 
{
    
    var temperatura;
    var multiplicacion;
    var fahrenheit;
    
    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);

    multiplicacion = temperatura * 1.8;
    fahrenheit = multiplicacion +32;
    
    alert(+ temperatura + " centigrados son: " + fahrenheit + " fahrenheit ");

    //

    


}
