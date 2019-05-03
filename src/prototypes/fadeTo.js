import fade from './_fade'

/**
 * Fade to the current Element animating its opacity.
 *
 * @param {number} [duration=250] animation duration in milliseconds
 * @param {number} [opacity=NaN] opacity value to animate to
 * @param {string} [easing='linear'] animation easing type
 * @param {function} [complete=null] callback on completed animation
 * @returns {void}
 */
function fadeTo (duration = 250, opacity = NaN, easing = 'linear', complete = null) {
	const startOpacity = parseFloat(window.getComputedStyle(this).opacity)
	const finalOpacity = parseFloat(opacity)

	const _fadeTo = (progress) => {
		this.style.opacity = startOpacity + (finalOpacity - startOpacity) * progress
	}

	if (startOpacity !== finalOpacity) {
		fade(duration, finalOpacity, easing, _fadeTo, complete)
	}
}

export default fadeTo
