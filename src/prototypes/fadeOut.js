import fade from './_fade'

/**
 * Fade in the current Element setting it's display property and then
 * animating its opacity.
 *
 * @param {number} [duration=250] animation duration in milliseconds
 * @param {string} [easing='linear'] animation easing type
 * @param {function} [complete=null] callback on completed animation
 * @returns {void}
 */
function fadeOut(duration = 250, easing = 'linear', complete = null) {
	var startOpacity = parseFloat(window.getComputedStyle(this).opacity)

	var _fadeOut = (progress) => {
		this.style.opacity = startOpacity - startOpacity * progress
		if (progress === 1) this.style.display = 'none'
	}

	if (startOpacity !== 0) {
		fade(duration, easing, _fadeOut, complete)
	}
}

export default fadeOut
