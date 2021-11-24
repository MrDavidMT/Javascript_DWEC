/*
 The Geometrizer

Calculate properties of a circle, searching the internet for definitions if not remember.

    Store a radius into a variable.
    Calculate the circumference based on the radius, and output "The circumference is NN".
    Calculate the area based on the radius, and output "The area is NN"
*/
var radio=3;
document.writeln("The radius is = "+radio+"</br>");
document.writeln("The circumference is= "+(2*Math.PI*radio+"</br>"));
document.writeln("The area is= "+(Math.PI*Math.pow(radio,2))+"</br>");