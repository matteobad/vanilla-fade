import animateElement from '../utils/animateElement'

/**
 * Fade out the current Element throgh opacity and then it remove
 * the Element via dispay property.
 *
 * @param {Integer} duration animation duration in milliseconds
 * @param {String} easing animation easing type
 * @param {function} complete callback on completed animation
 */
function fadeOut(duration = 250, easing = 'linear', complete) {
	this.computedDisplay =  window.getComputedStyle(this).display

	// create closure
	var _fadeOut = (completion) => {
		this.style.opacity = 1 - completion
		if (completion === 1) this.style.display = 'none'
	}

	var animate = animateElement(duration, easing, _fadeOut, complete)
	requestAnimationFrame(animate)
}

export default fadeOut
