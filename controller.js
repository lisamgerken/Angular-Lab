(function() {
	function FormController() {
		var fc = this;
		fc.list = [];
		fc.addList = function(addItem) {
			fc.list.push(addItem);
			fc.addItem = "";
		};
		fc.removeItem = function(index) {
			fc.list.splice(index, 1);
		};
	}

	angular
		.module("app")
		.controller("FormController", FormController)
})();

