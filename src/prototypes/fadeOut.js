import animateElement from '../utils/animateElement'

/**
 * Fade out the current Element throgh opacity and then it remove
 * the Element via dispay property.
 *
 * @param {number} [duration=250] animation duration in milliseconds
 * @param {string} [easing='linear'] animation easing type
 * @param {function} [complete=null] callback on completed animation
 */
function fadeOut(duration = 250, easing = 'linear', complete = null) {
	var startOpacity = window.getComputedStyle(this).opacity
	if (startOpacity === 0) return

	/**
	 * Do animate
	 * @param {number} progress
	 */
	var _fadeOut = (progress) => {
		this.style.opacity = startOpacity - startOpacity * progress
		if (progress === 1) this.style.display = 'none'
	}

	var animate = animateElement(duration, easing, _fadeOut, complete)
	requestAnimationFrame(animate)
}

export default fadeOut
