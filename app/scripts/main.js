//the app/scripts/main.js file, which defines our RequireJS config
require.config({
    paths: {
        angular: 'vendor/angular',
        jquery: 'vendor/jquery',
        domReady: 'vendor/domReady',
        angularAnimate: 'vendor/angularAnimate',
        angularCookies: 'vendor/angular-cookies',
        angularLoader: 'vendor/angular-loader',
        angularMessages: 'vendor/angular-messages',
        angularMocks: 'vendor/angular-mocks',
        angularResource: 'vendor/angular-resource',
        angularRoute: 'vendor/angular-route',
        angularSanitize: 'vendor/angular-sanitize',
        angularScenario: 'vendor/angular-scenario',
        angularTouch: 'vendor/angular-touch'
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        angularAnimate: {deps: ['angular']},
        angularCookies: {deps: ['angular']},
        angularLoader: {deps: ['angular']},
        angularMessages: {deps: ['angular']},
        angularMocks: {deps: ['angular']},
        angularResource: {deps: ['angular']},
        angularRoute: {deps: ['angular']},
        angularSanitize: {deps: ['angular']},
        angularScenario: {deps: ['angular']},
        angularTouch: {deps: ['angular']}
    }
});

require(
    [
        'angular',
        'app',
        'domReady',
        'angularRoute',
        'services/userService',
        'controllers/rootController',
        'directives/ngbkFocus'
        // Any individual controller, service, directive or filter file
        // that you add will need to be pulled in here.
    ],
    function (angular, app, domReady) {
        'use strict';
        app.config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider.when('/', {
                    templateUrl: 'views/root.html',
                    controller: 'RootCtrl'
                });
            }
        ]);
        domReady(function () {
            angular.bootstrap(document, ['MyApp']);
            // The following is required if you want AngularJS Scenario tests to work
            $('html').addClass('ng-app:MyApp');
        });
    }
);