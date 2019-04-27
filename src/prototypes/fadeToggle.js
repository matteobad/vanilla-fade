import fade from './_fade'

/**
 * Fade toggle the current Element setting it's display property and then
 * animating its opacity.
 *
 * @param {number} [duration=250] animation duration in milliseconds
 * @param {string} [easing='linear'] animation easing type
 * @param {function} [complete=null] callback on completed animation
 * @returns {void}
 */
function fadeToggle(duration = 250, easing = 'linear', complete = null) {
	var startOpacity = parseFloat(window.getComputedStyle(this).opacity)

	var _fadeToggle = (progress) => {
		if (startOpacity < .5) {
			if (progress === 0) this.style.display = ''
			this.style.opacity = startOpacity + (1 - startOpacity) * progress
		} else {
			this.style.opacity = startOpacity - startOpacity * progress
			if (progress === 1) this.style.display = 'none'
		}
	}

	fade(duration, easing, _fadeToggle, complete)
}

export default fadeToggle
