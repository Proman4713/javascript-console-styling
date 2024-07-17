const Colors = require("../Colors");

function main() {
	for (const colorFunction in Colors) {
		let output = Colors[colorFunction](
			colorFunction[0].toUpperCase() +
			colorFunction.slice(1).replace("Bg", " Background").replace("right", "right ")
		);
		if (colorFunction == "black") {
			output = Colors.whiteBg(output);
		} else if (["whiteBg", "brightWhiteBg"].includes(colorFunction)) {
			output = Colors.black(output);
		}
		console.log(output);
	}
}

module.exports = main;
