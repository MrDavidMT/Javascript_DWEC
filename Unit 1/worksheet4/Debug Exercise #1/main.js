// Exercise 1 - The Age Calculator
var year = new Date().getFullYear();
var annoNacimiento = '1985';
var annos = year - annoNacimiento;
var annos2 = year - annoNacimiento - 1;
document.write('They are either ' + annos + ' or ' + annos2 + ',substituting the values');

// Exercise 2 - The LifeTime Supply Calculator
var currentAge = 29;
var maxAge = 99;
var eatEstimatedPerDay = 1.5; // Kg

var comidaTotalRestoVida = (maxAge - currentAge) * eatEstimatedPerDay;
document.write('<br/>You will need ' + comidaTotalRestoVida + ' to last you until the ripe old age of ' + maxAge);

// Exercise 3 - The Geometrizer
// No estaba comentado la linea anterior
var radio = 5;
var area = Math.PI * radio * radio;
var circunferencia = Math.PI * 2 * radio;

document.write('<br>The circumfrence is ' + circunferencia + ' m.');
//Faltaba una comilla al final en la linea anterior
document.write('<br>The area is ' + area+ ' m2.');
//Faltaba un + para concatenar


// Exercise 4 - The temperature Converter
var celsius = 20;
var celsiusToFarenheit = celsius * 9 / 5 + 32;

var farenheit = 68;
var farenheiToCelsius = (farenheit - 32) * 5 / 9;

document.write('<br/>' + celsius + 'º Celsius a Farenheit: ' + celsiusToFarenheit);
//Faltaba una comilla al principio
document.write('<br/>' + farenheit + 'º Farenheit a Celsius: '+ farenheiToCelsius);
// Faltaba un + para concatenar y la variable es farenheiToCelsius no farenheitToCelsius 

/*Exercise 1 - What number's bigger?
......
*/
//faltaba un * para terminar el comentario anterior
function greaterNum(num1, num2) {
	var mayor = num1;
	if (num2 > num1)
		mayor = num2;
	
	return mayor;
	//La variable es mayor no mayor1
}

document.write('El mayor es: ' + greaterNum(2, 5));
//El nombre de la funcion es incorrecto, es greaterNum no greaterrNum

// Exercise 2 - The World Translator
function helloWorld(language) {
	var saludo = '';
	switch (language) {
		//ES laguage no langage
		case 'es':
			saludo = 'Hola mundo';
			break;
		case 'fr':
			saludo = 'Bonjour le monde';
			break;
		case 'de':
			saludo = 'Hallo Welt';
			break;
		default:
			saludo = 'Debe especificar algún lenguaje para ' + saludo + ' (es, fr, de)';
	}
	
	return saludo;
	//Es saludo no salido
}

document.write('<br/>' + helloWorld('es'));