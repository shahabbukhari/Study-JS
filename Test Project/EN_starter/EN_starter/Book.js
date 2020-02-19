export class Book {
    constructor (title,author,description,pages,currentPage,read){
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;
    }
    readBook(page) {
        if(page < 1 || page > this.pages) {
            return 0
        }
        else if(page >= 1 && page < this.pages) {
            this.currentPage = page;
            return 1;
        } 
        else if(page === this.pages) {
            this.currentPage = page;
            this.read = true;
            return 1;
        }
    }
}

let book = new Book('math','shahab','math book axhi book', 78,12,false)
let book1 = new Book('science','ali','science book axhi book', 118,22,false)
let book2 = new Book('Arabic','uzair','Arbi book axhi book', 223,42,false)

export const books = [book,book1,book2];
