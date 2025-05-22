const Colours = require("../Colours");

function main() {
	for (const colourFunction in Colours) {
		let output = Colours[colourFunction](
			colourFunction[0].toUpperCase() +
			colourFunction.slice(1).replace("Bg", " Background").replace("right", "right ")
		);
		if (colourFunction == "black") {
			output = Colours.whiteBg(output);
		} else if (["whiteBg", "brightWhiteBg"].includes(colourFunction)) {
			output = Colours.black(output);
		}
		console.log(output);
	}
}

module.exports = main;
