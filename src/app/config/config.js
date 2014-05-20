/**
 * ng-scaffold
 * @module ngScaffold.config
 */
angular.module('ngScaffold.config', [
        'user',
        'template.app',
        'ui.router',
        'ngAnimate',
        'ngTouch'
    ])

    .constant('NAV_ITEMS', [
        {title: 'Home', state: 'home', sref: 'home', icon: 'glyphicon-home'},
        {title: 'Individual High Scores', state: 'individualHighScores', sref: 'individualHighScores', icon: 'glyphicon-list-alt'},
        {title: 'Team High Scores', state: 'contact', sref: 'contact', icon: 'glyphicon-stats'},
        {title: 'My account', state: 'user', sref: 'user.dashboard', icon: 'glyphicon-user'}
    ])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/view/home.tpl.html',
                controller: 'HomeCtrl'
            })
            .state('individualHighScores', {
                url: '/individualHighScores',
                templateUrl: 'app/view/individualHighScores.tpl.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/view/contact.tpl.html'
            });
    });
