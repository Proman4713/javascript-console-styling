/**
 * Adds a Black color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function black(text) {
	return `\x1b[30m${text}\x1b[0m`;
}

/**
 * Adds a Black Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function blackBg(text) {
	return `\x1b[40m${text}\x1b[0m`;
}

/**
 * Adds a Red color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function red(text) {
	return `\x1b[31m${text}\x1b[0m`;
}

/**
 * Adds a Red Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function redBg(text) {
	return `\x1b[41m${text}\x1b[0m`;
}

/**
 * Adds a Green color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function green(text) {
	return `\x1b[32m${text}\x1b[0m`;
}

/**
 * Adds a Green Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function greenBg(text) {
	return `\x1b[42m${text}\x1b[0m`;
}

/**
 * Adds a Yellow color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function yellow(text) {
	return `\x1b[33m${text}\x1b[0m`;
}

/**
 * Adds a Yellow Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function yellowBg(text) {
	return `\x1b[43m${text}\x1b[0m`;
}

/**
 * Adds a Blue color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function blue(text) {
	return `\x1b[34m${text}\x1b[0m`;
}

/**
 * Adds a Blue Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function blueBg(text) {
	return `\x1b[44m${text}\x1b[0m`;
}

/**
 * Adds a Magenta color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function magenta(text) {
	return `\x1b[35m${text}\x1b[0m`;
}

/**
 * Adds a Magenta Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function magentaBg(text) {
	return `\x1b[45m${text}\x1b[0m`;
}

/**
 * Adds a Cyan color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function cyan(text) {
	return `\x1b[36m${text}\x1b[0m`;
}

/**
 * Adds a Cyan Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function cyanBg(text) {
	return `\x1b[46m${text}\x1b[0m`;
}

/**
 * Adds a White color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function white(text) {
	return `\x1b[37m${text}\x1b[0m`;
}

/**
 * Adds a White Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function whiteBg(text) {
	return `\x1b[47m${text}\x1b[0m`;
}

/**
 * Adds a Gray color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function gray(text) {
	return `\x1b[90m${text}\x1b[0m`;
}

/**
 * Adds a Gray Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function grayBg(text) {
	return `\x1b[100m${text}\x1b[0m`;
}

/**
 * Adds a Bright Red color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function brightRed(text) {
	return `\x1b[91m${text}\x1b[0m`;
}

/**
 * Adds a Bright Red Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function brightRedBg(text) {
	return `\x1b[101m${text}\x1b[0m`;
}

/**
 * Adds a Bright Green color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function brightGreen(text) {
	return `\x1b[92m${text}\x1b[0m`;
}

/**
 * Adds a Bright Green Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function brightGreenBg(text) {
	return `\x1b[102m${text}\x1b[0m`;
}

/**
 * Adds a Bright Yellow color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function brightYellow(text) {
	return `\x1b[93m${text}\x1b[0m`;
}

/**
 * Adds a Bright Yellow Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function brightYellowBg(text) {
	return `\x1b[103m${text}\x1b[0m`;
}

/**
 * Adds a Bright Blue color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function brightBlue(text) {
	return `\x1b[94m${text}\x1b[0m`;
}

/**
 * Adds a Bright Blue Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function brightBlueBg(text) {
	return `\x1b[104m${text}\x1b[0m`;
}

/**
 * Adds a Bright Magenta color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function brightMagenta(text) {
	return `\x1b[95m${text}\x1b[0m`;
}

/**
 * Adds a Bright Magenta Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function brightMagentaBg(text) {
	return `\x1b[105m${text}\x1b[0m`;
}

/**
 * Adds a Bright Cyan color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function brightCyan(text) {
	return `\x1b[96m${text}\x1b[0m`;
}

/**
 * Adds a Bright Cyan Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function brightCyanBg(text) {
	return `\x1b[106m${text}\x1b[0m`;
}

/**
 * Adds a Bright White color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function brightWhite(text) {
	return `\x1b[97m${text}\x1b[0m`;
}

/**
 * Adds a Bright White Background color styling to the provided text.
 * @param {string} text The text to apply the coloring on...
 * @returns {string} The colored string
 */
function brightWhiteBg(text) {
	return `\x1b[107m${text}\x1b[0m`;
}

module.exports = {
	black,
	blackBg,
	red,
	redBg,
	green,
	greenBg,
	yellow,
	yellowBg,
	blue,
	blueBg,
	magenta,
	magentaBg,
	cyan,
	cyanBg,
	white,
	whiteBg,
	gray,
	grayBg,
	brightRed,
	brightRedBg,
	brightGreen,
	brightGreenBg,
	brightYellow,
	brightYellowBg,
	brightBlue,
	brightBlueBg,
	brightMagenta,
	brightMagentaBg,
	brightCyan,
	brightCyanBg,
	brightWhite,
	brightWhiteBg
}