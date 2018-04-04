function Letter(letterValue, guessed) {

	this.letterValue = letterValue;
	this.guessed = guessed;
	this.letterDisplay = function () {
		if (this.guessed === false) {
			console.log("_");
		} else {
			console.log("this.letterValue");
		}

	};

	this.checker = function () {
		if (process.argv[2] === this.letterValue) {
			this.guessed = true;
		}

	}


}

