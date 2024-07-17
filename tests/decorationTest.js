const Decorations = require("../Decorations");

function main() {
	for (const colorFunction in Decorations) {
		let output = Decorations[colorFunction](
			colorFunction[0].toUpperCase() +
			colorFunction.slice(1)
		);
		console.log(output);
	}
}

module.exports = main;
