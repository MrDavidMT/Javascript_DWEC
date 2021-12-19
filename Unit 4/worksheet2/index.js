import { Book, Booklist} from "./booklist.js";
var bookList=new Booklist();
var btnAddBook,btnReadNext,pMensaje,titulo,autor,genero,lista,pRead;
var listaJson;
window.onload=main;
//obtenemos los elementos del html que nos interesa, los guardamos en variables y le asignamos los eventos correspondientes
function main(){
    btnAddBook=document.querySelector('form button');
    btnAddBook.addEventListener('click',compruebaLibro);
    pMensaje=document.getElementById('mensaje');
    titulo=document.getElementById('title');
    titulo.addEventListener('focusout',valida);
    autor=document.getElementById('author');
    autor.addEventListener('focusout',valida);
    genero=document.getElementById('genre');
    genero.addEventListener('focusout',valida);
    lista=document.querySelector('div ul');
    pRead=document.getElementById('read'); 
    btnReadNext=document.querySelector('#d button');
    btnReadNext.addEventListener('click',leerSiguienteLibro); 

//Modificado para probar JSON (pintar() tb)
    /* listaJson={
        bookRead:0,
        bookUnread:0,
        nextBook:false,
        currentBook:false,
        lastBook:false,
        books:[
            {
                title:'title',
                genre:'genre',
                author:'author',
                read:false,
                readDate:false
            },
            {
                title:'title2',
                genre:'genre2',
                author:'author2',
                read:true,
                readDate:false
            }
        ]
    }
    pintar(listaJson.books[0]);
    pintar(listaJson.books[1]); */

    //Para recuperar la bookList con sus métodos al igual que con cada libro
    if(localStorage.bookList){
        
        let listamem=JSON.parse(localStorage.getItem('bookList'));
        let k=Object.keys(bookList);
        let vL=Object.values(listamem);
        for (let i=0;i<vL.length;i++){
            Object.defineProperty(bookList,k[i],{value:vL[i]});
        }
        
        for(let j=0;j<bookList.books.length;j++){
            k=Object.keys(listamem.books[j]);
            vL=Object.values(listamem.books[j]);
            let book=new Book();          
            for (let i=0;i<vL.length;i++){
                Object.defineProperty(book,k[i],{value:vL[i]});
            }
            bookList.books[j]=book;
            if(!book.getRead())
                pintar(book);
        }
    }

}
//Funcion para validar un input (utilizo el mismo para todos en este caso).En caso de no ser válido se muestra un mensaje de error
function valida(e){
    if(e instanceof Event){
        e=e.target;
    }
    return (/[0-9!@#$%^&]/.test(e.value)|| (!/[a-zñA-ZÑ]/.test(e.value)))?(pMensaje.textContent=`${e.value} incorrect format, only letters`, false):(pMensaje.textContent='',true);
}
//comprueba que todos los campos sean válidos antes de añadir un nuevo libro
function compruebaLibro(e){
    e.preventDefault();
    if(!valida(titulo)||!valida(autor)||!valida(genero)){
        pMensaje.textContent='Libro inválido';
    }else{
        pMensaje.textContent='Libro añadido';
        addLibro();
        limpiaInput();
    }    
}
//limpia el texto de los input
function limpiaInput(){
    titulo.value='';
    autor.value='';
    genero.value='';
}
//Se crea y añade un nuevo libro al booklist y se muestra en la lista
function addLibro(){
    let book=new Book(titulo.value.trim(),genero.value.trim(),autor.value.trim());
    bookList.add(book);
    pintar(book);
//Serializmos el objeto para guardarlo como cadena
    localStorage.setItem(`bookList`,JSON.stringify(bookList));
}
function pintar(book){
    let li=document.createElement('li');
    li.textContent=book.getTitle();
    //li.textContent=book.title;
    let p=document.createElement('p');
    p.textContent=`Author: ${book.getAuthor()}`;
    //p.textContent=`Author: ${book.author}`;
    li.pos=bookList.getBookList().length-1;
    //li.pos=listaJson.books.length-1;
    li.appendChild(p);
    li.addEventListener('dblclick',leerLibro);
    lista.appendChild(li);
}
//Se lee el siguiente libro sin leer en el booklist(el primero de la lista en pantalla)
function leerSiguienteLibro(){
    if(bookList.getBookUnread()>0){
        bookList.finishCurrentBook();
        pRead.textContent=`Books read: ${bookList.getBookRead()}`;
        lista.removeChild(lista.firstElementChild);
        localStorage.setItem(`bookList`,JSON.stringify(bookList));
    }    
}
//funcion para leer cualquier libro de la lista
function leerLibro(e){
    if(e.currentTarget===lista.firstElementChild){
        leerSiguienteLibro();
    }else{
        bookList.read(e.currentTarget.pos);
        lista.removeChild(e.currentTarget);
        pRead.textContent=`Books read: ${bookList.getBookRead()}`;
        localStorage.setItem(`bookList`,JSON.stringify(bookList));
    }
        
}

