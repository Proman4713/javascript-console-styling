/**
 * Adds a Bright decoration to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The decorated string
 */
function bright(text, terminate) {
	return `\x1b[1m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Dim decoration to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The decorated string
 */
function dim(text, terminate) {
	return `\x1b[2m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds an Italic decoration to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @deprecated Not widely supported
 * @returns {string} The decorated string
 */
function italic(text, terminate) {
	return `\x1b[3m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds an Underline decoration to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The decorated string
 */
function underline(text, terminate) {
	return `\x1b[4m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Slow Blinking effect to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The decorated string
 */
function slowBlink(text, terminate) {
	return `\x1b[5m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Rapid Blinking effect to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @deprecated Not widely supported
 * @returns {string} The decorated string
 */
function rapidBlink(text, terminate) {
	return `\x1b[6m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Colour Reverse decoration to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @deprecated Not widely supported
 * @returns {string} The decorated string
 */
function reverse(text, terminate) {
	return `\x1b[7m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Hidden effect to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @deprecated Not widely supported
 * @returns {string} The decorated string
 */
function hidden(text, terminate) {
	return `\x1b[8m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds an Italic decoration to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @deprecated Not supported by all terminals (specifically the "Terminal App" according to Wikipedia)
 * @returns {string} The decorated string
 */
function strikethrough(text, terminate) {
	return `\x1b[9m${text}` + (terminate ? `\x1b[0m` : "");
}

module.exports = {
	bright,
	dim,
	italic,
	underline,
	slowBlink,
	rapidBlink,
	reverse,
	hidden,
	strikethrough
}
