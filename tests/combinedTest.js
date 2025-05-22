const Decorations = require("../Decorations");
const { red, redBg, brightRed, brightRedBg } = require("../Colours")

function main() {
	for (const colourFunction in Decorations) {
		let withRedFg = Decorations[colourFunction](
			red(
				colourFunction[0].toUpperCase() +
				colourFunction.slice(1) +
				" with Red Foreground"
			)
		);
		console.log(withRedFg);

		let withRedBg = Decorations[colourFunction](
			redBg(
				colourFunction[0].toUpperCase() +
				colourFunction.slice(1) +
				" with Red Background"
			)
		);
		console.log(withRedBg);

		let withBrightRedFg = Decorations[colourFunction](
			brightRed(
				colourFunction[0].toUpperCase() +
				colourFunction.slice(1) +
				" with Bright Red Foreground"
			)
		);
		console.log(withBrightRedFg);

		let withBrightRedBg = Decorations[colourFunction](
			brightRedBg(
				colourFunction[0].toUpperCase() +
				colourFunction.slice(1) +
				" with Bright Red Background"
			)
		);
		console.log(withBrightRedBg + "\n");
	}
}

module.exports = main;
