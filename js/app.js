(function() {
	var app = angular.module('projectPage', ['ngSanitize']);

	app.controller('projectInfoController', [ '$scope', '$sce', '$http', function($scope, $sce, $http) {
		var info = this;
		info.projects = [];
		$scope.trustSrc = function(src) {
			return $sce.trustAsResourceUrl(src);
		};
		$http.get("js/projectInfo.js").success( function(data) {
			info.projects = data;
			info.projects.sort(function(a,b) {
				return a.name.localeCompare(b.name);
			});
		});
	}]);
})();