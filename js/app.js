(function() {
	var app = angular.module('projectPage', ['ngSanitize']);

	// app.controller('projectInfoController', [ '$http', function($http) {
	// 	var info = this;
	// 	info.projects = [];
	// 	console.log("hey");
	// 	$http.get("js/projectInfo.js").success( function(data) {
	// 		info.projects = data;
	// 		console.log("hihi");
	// 		console.log(data);
	// 	});
	// }]);

	app.controller('projectInfoController', function($scope, $sce) {
		this.projects = data;
		console.log(data);
		$scope.trustSrc = function(src) {
			return $sce.trustAsResourceUrl(src);
		};
	});

	var data = [
		{
			name:  "Code Defense",
			youtubeURL: "https://www.youtube.com/embed/SayvtqIVGRc",
			repos: [
				{ description: "Github repo", url: "https://github.com/cuhk-csci4140/codeDefense" }
			],
			description: "A tower-defense type of game which uses JavaScript codes as the only way to control to the game character to move, attack, and win the game!"
		},
		{
			name: "N-Mario",
			youtubeURL: "https://www.youtube.com/embed/cPkCh6Z9aQ4",
			repos: [
				{ description: "The client page", url: "https://github.com/cuhk-csci4140/N-Mario" }, 
				{ description: "The Node JS server", url: "https://github.com/cuhk-csci4140/Node-Mario"}
			],
			description: "Not just a Mario clone. The game has introduced the awesome ingredients: multi-players on the same scene, cooperating to capture the flag, and, last but not least, betrayal!"
		}
	];

	console.log("hhhh");
})();