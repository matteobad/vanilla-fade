import animateElement from '../utils/animateElement'

/**
 * Fade in the current Element setting it's display property and then
 * animating its opacity.
 *
 * @param {Integer} duration animation duration in milliseconds
 * @param {String} easing animation easing type
 * @param {function} complete callback on completed animation
 */
function fadeIn(duration = 250, easing = 'linear', complete) {
	var display = this.computedDisplay || window.getComputedStyle(this).display
	this.style.display = (display !== 'none') ? display : 'block'

	// create closure
	var _fadeIn = (completion) => {
		this.style.opacity = completion
	}

	var animate = animateElement(duration, easing, _fadeIn, complete)
	requestAnimationFrame(animate)
}

export default fadeIn
