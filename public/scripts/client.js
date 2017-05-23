var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/home', {
          templateUrl: '/views/home-view.html',
          controller: 'HomeController',
          controllerAs: 'home'
        })
        .when ('/upload', {
            templateUrl: '/views/upload.html',
            controller: 'UploadController',
            controllerAs: 'ul'
        })
        .when ('/download', {
            templateUrl: '/views/download.html',
            controller: 'DownloadController',
            controllerAs: 'dl'
        })
        .otherwise ( {
            redirectTo: '/home'
        });
}]);
