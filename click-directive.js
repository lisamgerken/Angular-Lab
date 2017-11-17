(function () {
	function hoverDirective() {
		return {
			restrict: "A",
			link: function($scope, $element, $attrs) {
				$element.on("mouseenter", function() {
					$element.css("opacity", "0.35");
				});
				$element.on("mouseleave", function() {
					$element.css("opacity", "1");
				});
			}
			
		}
	}
	angular
		.module("app")
		.directive("hoverDirective", hoverDirective);

})();