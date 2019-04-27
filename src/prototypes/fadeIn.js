import animateElement from '../utils/animateElement'
import easingAlgorithms from '../utils/easing'
import validateParams from '../utils/validateParams'

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
	validateParams({ duration, easing, complete })
	var startOpacity = parseFloat(window.getComputedStyle(this).opacity)

	if (startOpacity !== 1) {
		var _easeFn = easingAlgorithms[easing]
		var _fadeIn = (progress) => {
			if (progress === 0) this.style.display = ''
			this.style.opacity = startOpacity + (1 - startOpacity) * progress
		}

		var animate = animateElement(duration, _easeFn, _fadeIn, complete)
		requestAnimationFrame(animate)
	}
}

export default fadeIn
