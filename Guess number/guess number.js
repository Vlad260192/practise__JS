
let greeting = "Hi what's your name?";
let userName = prompt(greeting);

while (userName == '' || userName == null ) {
	alert('You need to enter your name before start the game');
	userName = prompt(greeting);
} 

alert( userName + ', you need to guese a number. After each try you will get a message: "perfect match", "hot", "cold".');

let guessNumber = Math.ceil(Math.random() * 100);
let guess = prompt('Guess number');
let numberOfGuesses = 1;

while ( guess != guessNumber ) {
	numberOfGuesses += 1;
	
	if ( guess < guessNumber ) {
		guess = prompt('You was wrong, to cold');
	} else {
		guess = prompt('You was wrong, to hot');
	}
}

if ( numberOfGuesses <= 1 ) {
	alert( 'Perfect match, it was ' + guessNumber + '. It took you ' + numberOfGuesses + ' attempt.' );
} else {
	alert( 'Perfect match, it was ' + guessNumber + '. It took you ' + numberOfGuesses + ' attempts.' );
}

