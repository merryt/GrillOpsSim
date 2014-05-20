/**
 * ng-scaffold
 * @module ngScaffold
 */
angular.module('ngScaffold', [
        'ngScaffold.config'
    ])

    .run(function ($rootScope, $state, $stateParams) {
        'use strict';

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    })

    .controller('NavigationCtrl', function ($scope, NAV_ITEMS) {
        'use strict';

        $scope.navItems = NAV_ITEMS;
    })

    .controller('HomeCtrl', function ($scope) {
        'use strict';

        $scope.heading = 'ng-scaffold';
        $scope.text= 'Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper.'
    });
