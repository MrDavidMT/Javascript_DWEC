class Booklist{
    constructor(){
        this.bookRead=0;
        this.bookUnread=0;
        this.nextBook=false;
        this.currentBook=false;
        this.lastBook=false;
        this.books=[];
    }
    getBookRead(){return this.bookRead;}
    getBookUnread(){return this.bookUnread;}
    getLastBook(){return this.lastBook;}
    getBookList(){return this.books;}
    
    
    add(book){
        this.books.push(book);
        this.bookUnread++;
        this.currentBook=this.getcurrentBook();
        this.nextBook=this.getNextBookUnread();
    }
    getcurrentBook(){return this.books.find(book=>!book.getRead())}
    getPosCurrentBook(){return this.books.findIndex(book=>{return !book.getRead()})}    
    getNextBookUnread(){
        let a=this.books.filter((boo)=>{return !boo.getRead()});
        return ((a.length)>1 && (this.getPosCurrentBook()>=0))?a[1]:false;
    }
    //originalmente
    /* finishCurrentBook(){
        let pos=this.getPosCurrentBook();
        this.books[pos].read=true;
        this.books[pos].readDate= new Date(Date.now());
        this.lastBook=this.books[pos];w
        this.currentBook=this.getcurrentBook();        
        this.getNextBookUnread();        
        this.bookUnread--;
        this.bookRead++;
    } */
    //modificado para poder quitar cualquier libro en la interfaz
    finishCurrentBook(){
        let pos=this.getPosCurrentBook();
        this.read(pos);
    }
    read(pos){
        this.lastBook=this.books[pos];
        this.books[pos].read=true;
        this.books[pos].readDate= new Date(Date.now());
        this.currentBook=this.getcurrentBook();
        this.nextBook=this.getNextBookUnread();        
        this.bookUnread--;
        this.bookRead++;
    }
}
class Book{
    constructor(title,genre,author){
        this.title=title;
        this.genre=genre;
        this.author=author;
        this.read=false;
        this.readDate=false;
    }
    getTitle(){return this.title;}
    getGenre(){return this.genre;}
    getAuthor(){return this.author}
    getRead(){return this.read;}
    getReadDate(){return this.readDate;}
}
export{Book,Booklist};