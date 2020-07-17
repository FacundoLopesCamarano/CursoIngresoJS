/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

///txtIdLargo   txtIdAncho   txtIdRadio

function Rectangulo () 
{
var largo;
var ancho;
var perimetro;
var alambre;  

largo = txtIdLargo.value;
ancho = txtIdAncho.value;

largo = parseInt(largo)
ancho = parseInt(ancho)

perimetro = (largo + ancho) *2;
alambre = perimetro * 3;

alert(" Se necesitan comprar: " + alambre + " Metros de alambre ");



}
function Circulo () 
{
    var numero3;
    var radio;
    var alambre;

    numero3 = txtIdRadio.value;
    numero3 = parseInt(radio);
    radio = 2 * 3.14 * numero3;

    alambre = radio * 3

    alert("Cantidad de alambre: " +alambre)

}
function Materiales () 
{
    
    var largo;
    var ancho;
    var resultado;
    var cemento;
    var cal;

    largo = parseInt(largo)
    ancho = parseInt(ancho)
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    resultado = largo * ancho;

    cemento = resultado * 2;

    cal = resultado * 3;

    alert(" Las bolsas de cemento necesarias son: " +cemento+  "\n Las bolsas de cal necesarias son: " +cal);

    //graciasss
 
}