//this function is called at the global level of the DOM
(function(global) {
	
	window.myRandomScalingFactor = function(min, max) {
		return Math.round(Samples.utils.rand(min, max));
	};

}(this));