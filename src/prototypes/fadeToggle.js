import fade from './_fade'

/**
 * Fade toggle the current Element animating its opacity.
 *
 * @param {number} [duration=250] animation duration in milliseconds
 * @param {string} [easing='linear'] animation easing type
 * @param {function} [complete=null] callback on completed animation
 * @returns {void}
 */
function fadeToggle (duration = 250, easing = 'linear', complete = null) {
	const startOpacity = parseFloat(window.getComputedStyle(this).opacity)
	const finalOpacity = (startOpacity < 0.5) ? 1 : 0

	const _fadeToggle = (progress) => {
		this.style.opacity = (startOpacity < 0.5)
			? startOpacity + (finalOpacity - startOpacity) * progress
			: startOpacity - startOpacity * progress
	}

	fade(duration, finalOpacity, easing, _fadeToggle, complete)
}

export default fadeToggle
