import animateElement from '../utils/animateElement'

/**
 * Fade in the current Element setting it's display property and then
 * animating its opacity.
 *
 * @param {number} [duration=250] animation duration in milliseconds
 * @param {string} [easing='linear'] animation easing type
 * @param {function} [complete=null] callback on completed animation
 */
function fadeIn(duration = 250, easing = 'linear', complete = null) {
	var display = this.originalDisplay || window.getComputedStyle(this).display
	this.style.display = (display !== 'none') ? display : 'block'

	this.style.display = (this.originalDisplay !== 'none')
		? this.originalDisplay
		: 'block'

	/**
	 * Do animate
	 * @param {number} progress
	 */
	var _fadeIn = (progress) => {
		this.style.opacity = progress
	}

	var animate = animateElement(duration, easing, _fadeIn, complete)
	requestAnimationFrame(animate)
}

export default fadeIn
