/**
 * Crea una p gina con una serie de enlaces que realicen lo que se pide ená
los siguientes apartados:
a) escribe en el documento la fecha de la ltima actualizaci n.ú ó
b) muestra la URL desde la cual se ha activado el enlace que ha llevado al
usuario hasta el documento actual.
c) muestra el t tulo del documento actualí
d) muestra la direcci nó URL completa.
e) Un documento se abre autom ticamente cuando empieza a cargarse y seá
cierra cuando termina de hacerlo. As  pues, si deseamos escribir en uní
documento sin sobreescribir su contenido, deberemos hacerlo antes de que
ste termine de cargar. Si lo hacemos despu s, sobreescribiremos sué é
contenido. Implementa dos ejemplos que lo demuestren
 */
console.log(document.lastModified);
console.log(document.referrer);
console.log(document.title);
console.log(document.URL);
document.write("<h1> hola </h1>");
//Se cambia el script en el html antes o después