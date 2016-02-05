//Title.
console.log();
console.log("----------------------------------");
console.log("JavaScript Coinflip");
console.log("----------------------------------");
console.log();

//Starting variables for heads and tails.
var heads = 0;
var tails = 0;

//This is where the user sets the number of flips.
var flip = 100000;

//Displays the number of flips in the script.
console.log("----------------------------------");
console.log("Number of flips to simulate: "+flip);
console.log("----------------------------------");
console.log();

//Loop that calculates the flips. 
for(outcome = 1; outcome < flip + 1; outcome++) {
	var coin = Math.random();
	console.log("Flip #"+outcome+":");
	
	//Heads or tails.
	if(coin < 0.5) {
		console.log("Heads.");
		heads == heads++;
	} else {
		console.log("Tails.");
		tails == tails++;
	}
}

//Displays the final result.
console.log();
console.log("----------------------------------");
console.log("Number of heads: "+heads);
console.log("Number of tails: "+tails);
console.log("----------------------------------");
