import fadeIn from './prototypes/fadeIn'
import fadeOut from './prototypes/fadeOut'

(function() {
	window.Element.prototype.fadeIn = fadeIn
	window.Element.prototype.fadeOut = fadeOut
})()
