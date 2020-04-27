import fade from './_fade'

/**
 * Fade out the current Element animating its opacity.
 *
 * @param {number} [duration=250] animation duration in milliseconds
 * @param {string} [easing='linear'] animation easing type
 * @param {function} [complete=null] callback on completed animation
 * @returns {void}
 */
function fadeOut (duration = 250, easing = 'linear', complete = null) {
	const startOpacity = parseFloat(window.getComputedStyle(this).opacity)
	const finalOpacity = 0

	const _fadeOut = (progress) => {
		this.style.opacity = startOpacity - startOpacity * progress
	}

	if (startOpacity !== 0) {
		fade(duration, finalOpacity, easing, _fadeOut, complete)
	}
}

window.Element.prototype.fadeOut = fadeOut
