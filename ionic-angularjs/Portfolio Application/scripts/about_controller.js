angular.module('portfolio-module')

.controller('aboutCtrl',['$scope',function($scope){
    
    $scope.web_skills=[
        "AngularJS",
        "Ionic",
        "Cordova",
        "JQuery", 
        "JavaScript", 
        "HTML5", 
        "CSS3", 
        "Bootstrap", 
        "LESS", 
        "SASS", 
        "GULP", 
        "GIT",
        "JSON", 
        "AJAX",
        "REST API",
        "WOWJS", 
        "Colorbox.js", 
        "Animate.css",
        "C#", 
        "MVC .NET", 
        "SQL"
    ];
    
    $scope.development_tools=[
        "Visual Studio",
        "Sublime",
        "Brackets"
    ];
    
}]);