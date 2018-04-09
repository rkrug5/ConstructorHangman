

var letterGuess = process.argv[2];





function Letter(letterValue, guessed) {

	this.letterValue = letterValue;

	//i think i might want to set this one initially to false since all of
	//my letters start of as unguessed...
	this.guessed = guessed;



	// this.toString = function () {
	// 	if (this.guessed === false) {
	// 		console.log("_");
	// 	} else {
	// 		console.log("this.letterValue");
	// 	}

	// };

	this.checker = function () {
		if (letterGuess === this.letterValue) {
			this.guessed = true;
		}

	}

}


Letter.prototype.toString = function () {
	if (this.guessed === false) {
		console.log("_");
	} else {
		console.log(this.letterValue);
	}

};




var a = new Letter("a", true);
// var b = new Letter("b", false);
// var c = new Letter("c", false);


console.log(a.toString());


module.exports = Letter;

