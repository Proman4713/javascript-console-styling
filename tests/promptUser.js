const readline = require('readline');

class Prompt {
	constructor() {
		// Create an interface for reading data from stdin
		this.rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});
	}

	/**
	 * Prompts the user with a given query and returns a promise that resolves to the user's answer.
	 *
	 * @param {string} query - The query to prompt the user with.
	 * @return {Promise<string>} A promise that resolves to the user's answer.
	 */
	askQuestion(query) {
		return new Promise((resolve) => {
			this.rl.question(query, (answer) => {
				resolve(answer);
				this.rl.close();
			});
		});
	}
}

module.exports = Prompt;
