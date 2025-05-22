/**
 * Adds a Black colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function black(text, terminate=true) {
	return `\x1b[30m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Black Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function blackBg(text, terminate=true) {
	return `\x1b[40m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Red colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function red(text, terminate=true) {
	return `\x1b[31m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Red Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function redBg(text, terminate=true) {
	return `\x1b[41m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Green colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function green(text, terminate=true) {
	return `\x1b[32m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Green Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function greenBg(text, terminate=true) {
	return `\x1b[42m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Yellow colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function yellow(text, terminate=true) {
	return `\x1b[33m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Yellow Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function yellowBg(text, terminate=true) {
	return `\x1b[43m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Blue colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function blue(text, terminate=true) {
	return `\x1b[34m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Blue Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function blueBg(text, terminate=true) {
	return `\x1b[44m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Magenta colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function magenta(text, terminate=true) {
	return `\x1b[35m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Magenta Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function magentaBg(text, terminate=true) {
	return `\x1b[45m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Cyan colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function cyan(text, terminate=true) {
	return `\x1b[36m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Cyan Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function cyanBg(text, terminate=true) {
	return `\x1b[46m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a White colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function white(text, terminate=true) {
	return `\x1b[37m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a White Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function whiteBg(text, terminate=true) {
	return `\x1b[47m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Grey colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function gray(text, terminate=true) {
	return `\x1b[90m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Grey Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function grayBg(text, terminate=true) {
	return `\x1b[100m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Bright Red colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function brightRed(text, terminate=true) {
	return `\x1b[91m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Bright Red Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function brightRedBg(text, terminate=true) {
	return `\x1b[101m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Bright Green colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function brightGreen(text, terminate=true) {
	return `\x1b[92m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Bright Green Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function brightGreenBg(text, terminate=true) {
	return `\x1b[102m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Bright Yellow colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function brightYellow(text, terminate=true) {
	return `\x1b[93m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Bright Yellow Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function brightYellowBg(text, terminate=true) {
	return `\x1b[103m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Bright Blue colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function brightBlue(text, terminate=true) {
	return `\x1b[94m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Bright Blue Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function brightBlueBg(text, terminate=true) {
	return `\x1b[104m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Bright Magenta colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function brightMagenta(text, terminate=true) {
	return `\x1b[95m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Bright Magenta Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function brightMagentaBg(text, terminate=true) {
	return `\x1b[105m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Bright Cyan colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function brightCyan(text, terminate=true) {
	return `\x1b[96m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Bright Cyan Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function brightCyanBg(text, terminate=true) {
	return `\x1b[106m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Bright White colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function brightWhite(text, terminate=true) {
	return `\x1b[97m${text}` + (terminate ? `\x1b[0m` : "");
}

/**
 * Adds a Bright White Background colour styling to the provided text.
 * @param {string} text The text to apply the colouring on...
 * @param {boolean} terminate Whether or not to terminate the styling chain (reset)
 * @returns {string} The colored string
 */
function brightWhiteBg(text, terminate=true) {
	return `\x1b[107m${text}` + (terminate ? `\x1b[0m` : "");
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
