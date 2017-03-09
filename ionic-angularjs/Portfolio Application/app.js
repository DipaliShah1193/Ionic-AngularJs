angular.module('porfolio_app', ['ionic','portfolio-module'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('tabs', {
        url: '/tab',
        abstract: true,
        templateUrl: 'tab.html'
    })
    .state('home', {
        url: '/home',
        views: {
        'home-tab': {
            templateUrl: "templates/home.html",
        }
        }
    })
    .state('portfolio', {
        url: '/portfolio',
        views: {
        'portfolio-tab': {
            templateUrl: "templates/portfolio.html",
            controller:"portfolioCtrl"
        }
        }
    })
    .state('about', {
        url: '/about',
        views: {
        'about-tab': {
            templateUrl: "templates/about.html",
            controller:"aboutCtrl"
        }
        }
    })
    .state('contact',{
        url:'/contact',
        views: {
        'contact-tab': {
            templateUrl: "templates/contact.html"
        }
        }
    });
    
  $urlRouterProvider.otherwise('/home');
});