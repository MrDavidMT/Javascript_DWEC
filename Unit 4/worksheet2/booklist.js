class Booklist{
    constructor(){
        this.bookRead=0;
        this.bookUnread=0;
        this.nextBook;
        this.currentBook;
        this.lastBook;
        this.books=[];
    }
    getBookRead(){return this.bookRead;}
    getBookUnread(){return this.bookUnread;}
    getLastBook(){return this.lastBook;}
    getBookList(){return this.books;}
    
    add(book){this.Books.push(book);}
    getcurrentBook(){return this.books.find(book=>!book.getRead())}
    getPosCurrentBook(){return this.books.findIndex(book=>!book.getRead())}    
    getNextBookUnread(){return (this.getPosCurrentBook()<this.books.length-1)?this.nextBook=this.books[this.getPosCurrentBook()+1]:null;}

    finishCurrentBook(){
        let pos=this.getPosCurrentBook()
        this.books[pos].read=true;
        this.books[pos].readDate= new Date(Date.now());
        this.lastBook=this.books[pos];
        this.currentBook=this.getcurrentBook();        
        this.getNextBookUnread();        
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
        this.readDate=null;
    }
    getTitle(){return this.title;}
    getGenre(){return this.genre;}
    getAuthor(){return this.author}
    getRead(){return this.read;}
    getReadDate(){return this.readDate;}
}