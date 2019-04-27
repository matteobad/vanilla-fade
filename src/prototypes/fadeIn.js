import animateElement from '../utils/animateElement'
import easingAlgorithms from '../utils/easing'

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
	if (duration && typeof duration !== 'number') {
		throw new TypeError('fade(): first param is not a number.')
	}

	if (easing) {
		if (!Object.keys(easingAlgorithms).contains(easing))
			throw new TypeError('fade(): second param is not a string.')

		if (typeof easing !== 'string')
			throw new TypeError('fade(): second param is not a valid easing.')
	}

	if (complete && typeof complete !== 'function') {
		throw new TypeError('fade(): third param is not a function.')
	}

	var startOpacity = window.getComputedStyle(this).opacity
	if (startOpacity === 1) return

	var _easing = easingAlgorithms[easing]

	var _fadeIn = (progress) => {
		if (progress === 0) this.style.display = ''
		this.style.opacity = startOpacity + (1 - startOpacity) * progress
	}

	var animate = animateElement(duration, _easing, _fadeIn, complete)
	requestAnimationFrame(animate)
}

export default fadeIn
