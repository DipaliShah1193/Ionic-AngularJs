angular.module('portfolio-module')

.controller('portfolioCtrl',['$scope',function($scope){
    
    $scope.projects=[{
        "name":"Surevelox,Inc",
        "picture":"images/s-img.png",
        "imgUrl":"http://www.surevelox.com/",
        "descripation":"Developed from Scratch using Orchard CMS, HTML, CSS, JavaScript, JQuery"
    },{
        "name":"Hotel Classic",
        "picture":"images/HC_img.png",
        "imgUrl":"http://www.hotelclassicgandhinagar.com/",
        "descripation":"Developed from Scratch using Orchard CMS, HTML, CSS, JavaScript, JQuery"
    },{
        "name":"Portfolio App",
        "picture":"images/portfolio-img.png",
        "imgUrl":"",
        "descripation":"Developed from Scratch using Ionic, AngularJS, HTML, CSS"
    }];
        
}]);