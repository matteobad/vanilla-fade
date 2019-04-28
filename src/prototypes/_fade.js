import prefersReduceMotion from '../utils/prefersReduceMotion'
import animate from '../utils/animate'
import ease from '../utils/ease'

/**
 * Fade in the current Element setting it's display property and then
 * animating its opacity.
 *
 * @param {number} [duration=250] animation duration in milliseconds
 * @param {string} [easing='linear'] animation easing type
 * @param {function} animation callback to animate the element
 * @param {function} complete callback on completed animation
 * @returns {void}
 */
function fade(duration, opacity, easing, animation, complete) {
	let caller, value

	// validate duration
	if (duration) {
		caller = animation.name.replace('_', '')
		value = parseInt(duration)

		if (isNaN(value))
			throw new TypeError(`Failed to execute '${caller}' on 'Element': parameter 1 ('duration') is not an number.')`)

		if (value < 0)
			throw new TypeError(`Failed to execute '${caller}' on 'Element': parameter 1 ('duration') is not a valid number.')`)
	}

	// validate opacity
	if (opacity) {
		caller = animation.name.replace('_', '')
		value =  parseFloat(opacity)

		if (isNaN(value))
			throw new TypeError(`Failed to execute '${caller}' on 'Element': parameter 2 ('opacity') is not an number.')`)

		if (value < 0 || value > 1)
			throw new TypeError(`Failed to execute '${caller}' on 'Element': parameter 2 ('opacity') is not a valid number.')`)
	}

	// validate easing
	if (easing) {
		caller = animation.name.replace('_', '')
		value = easing

		if (typeof easing !== 'string')
			throw new TypeError(`Failed to execute '${caller}' on 'Element': parameter ('easing') is not an string.')`)

		if (!ease.hasOwnProperty(value))
			throw new TypeError(`Failed to execute '${caller}' on 'Element': parameter ('easing') is not a valid easing function.')`)
	}

	// validate callback
	if (complete && typeof complete !== 'function') {
		caller = animation.name.replace('_', '')
		throw new TypeError(`Failed to execute '${caller}' on 'Element': parameter ('complete') is not an function.')`)
	}

	// prefers-reduce-motion
	duration = !prefersReduceMotion() ? parseInt(duration) : 1

	// start drawing
	const draw = animate(duration, ease[easing], animation, complete)
	window.requestAnimationFrame(draw)
}

export default fade
