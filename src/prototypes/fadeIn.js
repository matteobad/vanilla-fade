import fade from './_fade'

/**
 * Fade in the current Element animating its opacity.
 *
 * @param {number} [duration=250] animation duration in milliseconds
 * @param {string} [easing='linear'] animation easing type
 * @param {function} [complete=null] callback on completed animation
 * @returns {void}
 */
function fadeIn (duration = 250, easing = 'linear', complete = null) {
	const startOpacity = parseFloat(window.getComputedStyle(this).opacity)
	const finalOpacity = 1

	const _fadeIn = (progress) => {
		this.style.opacity = startOpacity + (finalOpacity - startOpacity) * progress
	}

	if (startOpacity !== 1) {
		fade(duration, finalOpacity, easing, _fadeIn, complete)
	}
}

export default fadeIn
