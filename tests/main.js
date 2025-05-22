(async () => {
	const { brightGreen, cyan, greenBg } = require("../Colours");
	const Prompt = require("./promptUser");

	console.log(brightGreen("Starting test, please stay focused!") + "\n");

	console.log(cyan("----Starting colour test----") + "\n");
	require("./colourTest")();

	const answer = await new Prompt().askQuestion("\n" + 'Did everything show successfully? (y/n) ');

	if (answer === 'y') {
		console.log("\n" + cyan("----Starting decoration test----") + "\n");
	} else {
		process.exit(1);
	}
	require("./decorationTest")();

	const answer2 = await new Prompt().askQuestion("\n" + 'Did everything show successfully? (y/n) ');
	if (answer2 === 'y') {
		console.log("\n" + cyan("----Starting combined test----") + "\n");
	} else {
		process.exit(1);
	}
	require("./combinedTest")();

	const answer3 = await new Prompt().askQuestion("\n" + 'Did everything show successfully? (y/n) ');
	if (answer3 === 'y') {
		console.log("\n" + greenBg("----All tests passed!----"));
		process.exit(0);
	} else {
		process.exit(1);
	}
})();

