/**
 * Animate the fadeIn fadeOut given the duration, easing and then
 * call the complete callback on finish.
 *
 * @param {number} duration animation duration in milliseconds
 * @param {function} easing animation easing function
 * @param {function} animate animating function callback
 * @param {function} complete callback on completed animation
 */
function animateElement(duration, easing, animate, complete) {
	var timeStart

	/**
	 * rAF callback
	 * @param {number} time
	 */
	function _animateElement(time) {
		if (!timeStart) timeStart = time
		var timeElapsed = time - timeStart
		var progress = Math.min(timeElapsed / duration, 1)

		animate(easing(progress))

		if (timeElapsed < duration) {
			window.requestAnimationFrame(_animateElement)
		} else {
			if (typeof complete === 'function') complete()
		}
	}

	return _animateElement
}

export default animateElement
