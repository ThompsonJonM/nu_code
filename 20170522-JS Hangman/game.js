window.onload = function() {

	//array of topics
	var categories;

	//selected category
	var chosenCategory;

	//word getHint
	var getHint ;

	//selected word
	var word ;

	//guess
	var guess ;

	//stored guesses
	var guesses = [ ];

	//number of lives
	var lives ;

	//counter for correct guesses
	var counter ;

	//number of spaces within word '-'
	var space;

	var showLives = document.getElementById("myLives");
	var showCategory = document.getElementById("scategory");
	var getHint = document.getElementById("hint");
	var showClue = document.getElementById("clue");

	//category select between four different titles
	//chosen at random for each game
	var selectCat = function () {
		if (chosenCategory === categories[0]) {
			categoryName.innerHTML = "The Chosen Category is: Halo";
		} else if (chosenCategory === categories[1]) {
			categoryName.innerHTML = "The Chosen Category is: Banjo-Kazooie";
		} else if (chosenCategory === categories[2]) {
			categoryName.innerHTML = "The Chosen Category is: World of Warcraft";
		} else if (chosenCategory === categories[3]) {
			categoryName.innerHTML = "The Chosen Category is: Golden Sun";
		}
	}

	//canvas functionality
	var canvas = document.getElementById("myCanvas");

	var ctx = canvas.getContext("2d");
	
	function canvasMan() {
		ctx.beginPath();
		
		if (lives === 5) {
			ctx.arc(95,50,40,0,2*Math.PI);
			ctx.stroke();
		} 
		
		if (lives === 4) {
			ctx.moveTo(90, 90);
			ctx.lineTo(30, 100);
			ctx.stroke();
		}

		if (lives === 3) {
			ctx.moveTo(90, 90);
			ctx.lineTo(100, 30);
			ctx.stroke();
		}

		if (lives === 2) {
			ctx.moveTo(90, 90);
			ctx.lineTo(100, 350);
			ctx.stroke();
		}

		if (lives === 1) {
			ctx.moveTo(350, 350);
			ctx.lineTo(30, 100);
			ctx.stroke();
		}
	}

	//Guesses
	result = function () {
		wordHolder = document.getElementById('hold');
		correct = document.createElement('ul');

		//for loop
		for (var i = 0; i < word.length; i++) {
			correct.setAttribute('id', 'my-word');
			guess = document.createElement('li');
			guess.setAttribute('class', 'guess');

			if (word[i] === "-") {
				guess.innerHTML = "-";
				space = 1;
			} else {
				guess.innerHTML = "_";
			}

			guesses.push(guess);
			wordHolder.appendChild(correct);
			correct.appendChild(guess);
		}
	};

	//key up functionality
	document.onkeyup = function(input) {
		var guess = (input.key).toLowerCase();

			for (var i = 0; i < word.length; i++) {
				if (word[i] === guess) {
					guesses[i].innerHTML = word[i];
					counter = 1;
				}
			}

			var j = (word.indexOf(guess));
			if (j === -1) {
				lives -= 1;
				comments();
				canvasMan();
			} else {
				comments();
			}

			displayGuess.innerHTML = "Guesses: " + guess;
		}

	//lives display
	comments = function () {
		showLives.innerHTML = "You have " + lives + " lives";
		
		if (lives < 1) {
			showLives.innerHTML - "GAME OVER";
		}

		//for loop
		for (var i = 0; i < guesses.length; i++) {

			if (counter + space === guesses.length) {
				showLives.innerHTML = "YOU WIN!";
			}
		}
	};

	//key up functionality


	//play and categories object
	play = function () {
		categories = [
			["masterchief", "covenant", "reach", "theflood"],
			["jinjos", "mumbojumbo", "madmonstermansion", "grunty"],
			["thunderfury", "burningcrusade", "arthas", "legion"],
			["djinn", "adept", "doom-dragon", "lighthouse"]
		];

		chosenCategory = categories[Math.floor(Math.random() * categories.length)];
		word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
		word = word.replace(/\s+/g, "-");
		console.log(word);
		// buttons();

		guesses = [ ];
		lives = 6;
		counter = 0;
		space = 0;
		result();
		comments();
		selectCat();
		// canvas();
	};

	play();

	//hints object
	hint.onclick = function() {

		hints = [
			["Main protagonist", "Aliens collective", "Planet glassed by aliens", "Invasive species contained by Halo"],
			["Collectible creatures", "Witch Doctor", "It's always Halloween here", "Main antagonist"],
			["The Windseeker", "Second expansion", "Antagonist of Wrath of the Lich King", "Demon antagonists"],
			["Collectible 'genies'", "Attuned to an element", "Main antagonist", "Ivan and Felix must light these"]
		];

		var categoryIndex = categories.indexOf(chosenCategory);
		var hintIndex = chosenCategory.indexOf(word);
		showClue.innerHTML = "Clue: - " + hints [categoryIndex][hintIndex];
	};

	//reset
	document.getElementById('reset').onclick = function() {
		correct.parentNode.removeChild(correct);
		letters.parentNode.removeChild(letters);
		showClue.innerHTML = "";
		context.clearRect(0, 0, 400, 400);
		play();
	}
}

