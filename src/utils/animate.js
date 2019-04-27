/**
 * Animate the fadeIn fadeOut given the duration, easing and then
 * call the complete callback on finish.
 *
 * @param {number} duration animation duration in milliseconds
 * @param {function} easing animation easing function
 * @param {function} animate animating function callback
 * @param {function} complete callback on completed animation
 * @returns {function} _animate callback
 */
function animate(duration, easing, animation, complete) {
	let timeStart

	function _animate(time) {
		if (!timeStart) timeStart = time
		let timeElapsed = time - timeStart
		let progress = Math.min(timeElapsed / duration, 1)

		animation(easing(progress))

		if (timeElapsed >= duration) complete && complete()
		else window.requestAnimationFrame(_animate)
	}

	return _animate
}

export default animate
