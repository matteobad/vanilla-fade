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
function fadeIn(duration = 250, easing = 'linear', complete = null) {
	var startOpacity = parseFloat(window.getComputedStyle(this).opacity)

	var _fadeIn = (progress) => {
		if (progress === 0) this.style.display = ''
		this.style.opacity = startOpacity + (1 - startOpacity) * progress
	}

	if (startOpacity !== 1) {
		fade(duration, easing, _fadeIn, complete)
	}
}

export default fadeIn
