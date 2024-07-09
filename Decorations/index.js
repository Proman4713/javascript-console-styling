/**
 * Adds a Bright decoration to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @returns {string} The decorated string
 */
function bright(text) {
	return `\x1b[1m${text}\x1b[0m`;
}

/**
 * Adds a Dim decoration to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @returns {string} The decorated string
 */
function dim(text) {
	return `\x1b[2m${text}\x1b[0m`;
}

/**
 * Adds an Italic decoration to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @deprecated Not widely supported
 * @returns {string} The decorated string
 */
function italic(text) {
	return `\x1b[3m${text}\x1b[0m`;
}

/**
 * Adds an Underline decoration to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @returns {string} The decorated string
 */
function underline(text) {
	return `\x1b[4m${text}\x1b[0m`;
}

/**
 * Adds a Slow Blinking effect to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @returns {string} The decorated string
 */
function slowBlink(text) {
	return `\x1b[5m${text}\x1b[0m`;
}

/**
 * Adds a Rapid Blinking effect to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @deprecated Not widely supported
 * @returns {string} The decorated string
 */
function rapidBlink(text) {
	return `\x1b[6m${text}\x1b[0m`;
}

/**
 * Adds a Color Reverse decoration to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @deprecated Not widely supported
 * @returns {string} The decorated string
 */
function reverse(text) {
	return `\x1b[7m${text}\x1b[0m`;
}

/**
 * Adds a Hidden effect to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @deprecated Not widely supported
 * @returns {string} The decorated string
 */
function hidden(text) {
	return `\x1b[8m${text}\x1b[0m`;
}

/**
 * Adds an Italic decoration to the provided text.
 * @param {string} text The text to apply the decoration on...
 * @deprecated Not supported by all terminals (specifically the "Terminal App" according to Wikipedia)
 * @returns {string} The decorated string
 */
function strikethrough(text) {
	return `\x1b[9m${text}\x1b[0m`;
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