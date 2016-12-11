
var app = angular.module('App', ['ui.router'])
app.run(['$rootScope', function ($rootScope) {
    console.log('模块启动成功')
}])
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
        .state('image', {
            url: '/image',
            templateUrl: 'views/image.html'
        })
        .state('book', {
            url: '/book',
            templateUrl: 'views/book.html'
        })
        .state('miusc', {
            url: '/miusc',
            templateUrl: 'views/miusc.html'
        })
        .state('me', {
            url: '/me',
            templateUrl: 'views/me.html'
        })
}])
