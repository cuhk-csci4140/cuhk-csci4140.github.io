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
		});
	}]);

	// app.controller('projectInfoController', function($scope, $sce) {
	// 	this.projects = data;
	// 	// console.log(data);
	// 	$scope.trustSrc = function(src) {
	// 		return $sce.trustAsResourceUrl(src);
	// 	};
	// 	this.projects.sort(function(a,b) {
	// 		return a.name.localeCompare(b.name);
	// 	});
	// });

	// var data = [
	// 	{
	// 		name:  "Code Defense",
	// 		youtubeURL: "https://www.youtube.com/embed/SayvtqIVGRc",
	// 		repos: [
	// 			{ description: "Github repo", url: "https://github.com/cuhk-csci4140/codeDefense" }
	// 		],
	// 		description: "A tower-defense type of game which uses JavaScript codes as the only way to control to the game character to move, attack, and win the game!"
	// 	},
	// 	{
	// 		name: "N-Mario",
	// 		youtubeURL: "https://www.youtube.com/embed/cPkCh6Z9aQ4",
	// 		repos: [
	// 			{ description: "The client page", url: "https://github.com/cuhk-csci4140/N-Mario" }, 
	// 			{ description: "The Node JS server", url: "https://github.com/cuhk-csci4140/Node-Mario"}
	// 		],
	// 		description: "Not just a Mario clone. The game has introduced the awesome ingredients: multi-players on the same scene, cooperating to capture the flag, and, last but not least, betrayal!"
	// 	}
	// ];
})();