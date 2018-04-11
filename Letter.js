

var letterGuess = process.argv[2];





function Letter(letterValue) {

	this.letterValue = letterValue;

	//i think i might want to set this one initially to false since all of
	//my letters start of as unguessed...
	this.guessed = false;



}

Letter.prototype.checker = function () {
	if (letterGuess === this.letterValue) {
		this.guessed = true;
	}

}


Letter.prototype.reveal = function () {
	if (this.guessed === false) {
		console.log("_");
	} else {
		console.log(this.letterValue);
	}

};




var a = new Letter("a", true);
// var b = new Letter("b", false);
// var c = new Letter("c", false);


// console.log(a.toString());


module.exports = Letter;

