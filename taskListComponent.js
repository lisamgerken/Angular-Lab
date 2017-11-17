(function() {
	var taskList = {
		bindings: { list: "<",
		listFilter: "<"
		},
		template: `
		<ol>
			<li ng-repeat="item in $ctrl.list | filter: $ctrl.listFilter track by $index" task-directive> {{ item }} <i ng-click="$ctrl.removeItem($index)"class="material-icons">clear</i></li>
		</ol>
		`,
		controller: "FormController"
	}

angular
	.module("app")
	.component("taskList", taskList)
})();


				