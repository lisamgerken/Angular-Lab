(function() {
	var taskForm = {
		template: `
			<div class="container">
			<div class="formDiv">
			<h1>TODO List</h1>
			<p ng-class="go">Go back</p>
			<p class="description">A place to store the things you have to do!</p>
			<input class="filter" type="text" placeholder="Filter your to-dos" ng-model="$ctrl.listFilter">
			<task-list list-filter="$ctrl.listFilter" list="$ctrl.list"></task-list>
			<input class="addStuff" type="text" placeholder="Add your to-do" ng-model="$ctrl.addItem">
			<button ng-click="$ctrl.addList($ctrl.addItem)" click-directive>Add</button>
			</div>
			</div>
		`,
		controller: "FormController"
	}

angular
	.module("app")
	.component("taskForm", taskForm)
})();

