
var Letter = require("./Letter");

// var inquirer = require("inquirer");
var word = new Word("apples");
// var solutionChars = hangmanSolution.split('');


// console.log(solutionChars);

function Word(word) {

	this.solutionLetters = [];


	this.word = word;

	for (var i = 0; i < word.length; i++) {
		this.solutionLetters.push(new Letter(word[i]));

	}

	// console.log(this.solutionLetters);

}

Word.prototype.toString = function () {

	var display = '';

	for (var i = 0; i < this.solutionLetters.length; i++) {

		display += this.solutionLetters[i].reveal() + ' ';

	}

	// console.log(display);
	// console.log('\n' + display + '\n\n');
}


Word.prototype.checkerWord = function () {
	for (var i = 0; i < this.solutionLetters.length; i++) {

		this.solutionLetters[i].checker();
	}
}

word.toString();










module.exports = Word;

