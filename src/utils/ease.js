const ease = {
	/**
	 * Linear easing function
	 * @param {number} progress
	 * @returns {number}
	 */
	linear: function(progress) {
		return progress
	},
	/**
	 * Quadratic easing function
	 * @param {number} progress
	 * @returns {number}
	 */
	quadratic: function(progress) {
		return Math.pow(progress, 2)
	},

	/**
	 * Swing easing function
	 * @param {number} progress
	 * @returns {number}
	 */
	swing: function(progress) {
		return 0.5 - Math.cos(progress * Math.PI) / 2
	},

	/**
	 * Circle easing function
	 * @param {number} progress
	 * @returns {number}
	 */
	circ: function(progress) {
		return 1 - Math.sin(Math.acos(progress))
	},

	/**
	 * Bounce easing function
	 * @param {number} progress
	 * @returns {number}
	 */
	bounce: function(progress) {
		for (var a = 0, b = 1; ; a += b, b /= 2) {
			if (progress >= (7 - 4 * a) / 11) {
				return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2)
			}
		}
	},
}

export default ease
