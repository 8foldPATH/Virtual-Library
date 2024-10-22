// create your Media class:

class Media {

    static totalMediaCount = 0; // Static property to track media count
    
    constructor(title, year, genre){
        this.title = title;
        this.year = year;
        this.genre = genre;
        Media.totalMediaCount++;
    }

    summary() {
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`;
    }
}


module.exports = Media;
