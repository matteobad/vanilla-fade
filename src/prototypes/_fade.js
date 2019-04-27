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
function fade(duration, easing, animation, complete) {
	if (duration) {
		duration = parseInt(duration)
		if (isNaN(duration)) {
			duration = 250
			console.warn(`Element.prototype.fade():
			param [duration] => ${duration} is not a number.`)
		} else {
			duration = !prefersReduceMotion() ? duration : 1
		}
	}

	if (easing) {
		easing = easing.toString()
		if (!ease.hasOwnProperty(easing)) {
			easing = 'linear'
			console.warn(`Element.prototype.fade():
			param [easing] => ${easing} is not a valid easing.`)
		}
	}

	if (complete && typeof complete !== 'function') {
		complete = null
		console.warn(`Element.prototype.fade():
		param [complete] => ${complete} is not a function.`)
	}

	const draw = animate(duration, ease[easing], animation, complete)
	requestAnimationFrame(draw)
}

export default fade
