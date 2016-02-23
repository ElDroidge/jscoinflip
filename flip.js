//Title.
console.log();
console.log("----------------------------------");
console.log("JS Coinflip");
console.log("-by Droidge");
console.log("----------------------------------");
console.log();

//Starting variables for heads and tails.
var heads = 0;
var tails = 0;

//This is where the user sets the number of flips.
var totalFlip = 10000;

//This is the result of each flip.
var outcome = 0;

//Displays the number of flips in the script.
console.log("----------------------------------");
console.log("Number of flips to simulate: "+totalFlip);
console.log("----------------------------------");
console.log();

//Loop that calculates the flips. 
for(flipNo = 1; flipNo < totalFlip + 1; flipNo++) {
	var coin = Math.random();
	
	//Heads or tails.
	if(coin < 0.5) {
		heads == heads++;
		outcome = "Heads.";
	} else {
		tails == tails++;
		outcome = "Tails.";
	}
	
	//Print result.
	console.log("Flip #" +flipNo+ ": " +outcome)
}

//Displays the final result.
console.log();
console.log("----------------------------------");
console.log("Number of heads: "+heads);
console.log("Number of tails: "+tails);
console.log("----------------------------------");
