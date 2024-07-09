const Decorations = require("../Decorations");
const { red, redBg, brightRed, brightRedBg } = require("../Colors")

function main() {
	for (const colorFunction in Decorations) {
		let withRedFg = Decorations[colorFunction](
			red(
				colorFunction[0].toUpperCase() +
				colorFunction.slice(1) +
				" with Red Foreground"
			)
		);
		console.log(withRedFg);

		let withRedBg = Decorations[colorFunction](
			redBg(
				colorFunction[0].toUpperCase() +
				colorFunction.slice(1) +
				" with Red Background"
			)
		);
		console.log(withRedBg);

		let withBrightRedFg = Decorations[colorFunction](
			brightRed(
				colorFunction[0].toUpperCase() +
				colorFunction.slice(1) +
				" with Bright Red Foreground"
			)
		);
		console.log(withBrightRedFg);

		let withBrightRedBg = Decorations[colorFunction](
			brightRedBg(
				colorFunction[0].toUpperCase() +
				colorFunction.slice(1) +
				" with Bright Red Background"
			)
		);
		console.log(withBrightRedBg + "\n");
	}
}

module.exports = main;
