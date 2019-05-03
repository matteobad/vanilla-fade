/**
 * Returns:
 * true if reduce motion is active;
 * false otherwise.
 *
 * @return {boolean}
 */
function prefersReduceMotion () {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default prefersReduceMotion
