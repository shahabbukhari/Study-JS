// Rating system
class Show { 
    constructor(title, numberOfSeasons) {
        this.title = title;
        this.numberOfSeasons = numberOfSeasons;
        this.ratings = [];
        this.averageRating = 0;
    }
    addRating(rating) {
        (this.ratings).push(rating);
        this.sum = 0
        for(this.i in this.ratings) [
            this.sum += this.ratings[this.i]
        ]
        this.averageRating = this.sum / this.ratings.length
        console.log(this.averageRating)
    }
}
let show = new Show('Sherlock',4);
show.addRating(4.1)
show.addRating(4.2)
show.addRating(4.1)

