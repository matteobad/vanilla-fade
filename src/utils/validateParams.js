import easingAlgorithms from './easing'

function validateParams(params) {
	if (params.duration && typeof params.duration !== 'number') {
		throw new TypeError('fade(): first param is not a number.')
	}

	if (params.easing) {
		if (!easingAlgorithms.hasOwnProperty(params.easing)) {
			throw new TypeError('fade(): second param is not a string.')
		}

		if (typeof params.easing !== 'string') {
			throw new TypeError('fade(): second param is not a valid easing.')
		}
	}

	if (params.complete && typeof params.complete !== 'function') {
		throw new TypeError('fade(): third param is not a function.')
	}
}

export default validateParams
