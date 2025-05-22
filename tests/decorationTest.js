const Decorations = require("../Decorations");

function main() {
	for (const colourFunction in Decorations) {
		let output = Decorations[colourFunction](
			colourFunction[0].toUpperCase() +
			colourFunction.slice(1)
		);
		console.log(output);
	}
}

module.exports = main;
