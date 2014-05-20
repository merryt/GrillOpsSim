/**
 * ng-scaffold
 * Unit Testing: Application/Controller
 */

describe('Unit Testing: Application/Controller', function () {
    'use strict';

    var $scope, $controller;

    beforeEach(module('ngScaffold'));

    beforeEach(inject(function ($injector) {
        $scope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
    }));

    describe('HomeCtrl', function () {
        it('should set the correct heading text "ng-scaffold"', function () {
            var expected = {
                heading: 'ng-scaffold'
            };

            var params = {
                $scope: $scope
            };

            $controller('HomeCtrl', params);

            expect($scope.heading).toBe(expected.heading);
        });
    });
});

