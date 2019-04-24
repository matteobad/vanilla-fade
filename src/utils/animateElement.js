import easings from './easings'

/**
 * Animate the fadeIn fadeOut given the duration, easing and then
 * call the complete callback on finish.
 *
 * @param {Integer} duration animation duration in milliseconds
 * @param {String} easing animation easing type
 * @param {function} animate animating function callback
 * @param {function} complete callback on completed animation
 */
function animateElement(duration, easing, animate, complete) {
	var timeStart

	// create closure
	function _animateElement(time) {
		if (!timeStart) timeStart = time
		var timeElapsed = time - timeStart
		var progress = Math.min(timeElapsed / duration, 1)
		var completion = easings[easing](progress)

		animate(completion)

		if (timeElapsed < duration) {
			window.requestAnimationFrame(_animateElement)
		} else {
			if (typeof complete === 'function') complete()
		}
	}

	return _animateElement
}

export default animateElement
