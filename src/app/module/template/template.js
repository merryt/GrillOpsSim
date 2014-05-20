angular.module('template.app', ['app/module/user/view/user-dashboard.tpl.html', 'app/module/user/view/user-profile.tpl.html', 'app/module/user/view/user-settings.tpl.html', 'app/module/user/view/user.tpl.html', 'app/view/contact.tpl.html', 'app/view/footer.tpl.html', 'app/view/header.tpl.html', 'app/view/home.tpl.html', 'app/view/individualHighScores.tpl.html']);

angular.module('app/module/user/view/user-dashboard.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/user/view/user-dashboard.tpl.html',
        '<h2>Your dashboard</h2><p>...</p>');
}]);

angular.module('app/module/user/view/user-profile.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/user/view/user-profile.tpl.html',
        '<h2>Manage your profile</h2><p>...</p>');
}]);

angular.module('app/module/user/view/user-settings.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/user/view/user-settings.tpl.html',
        '<h2>Manage your account settings</h2><p>...</p>');
}]);

angular.module('app/module/user/view/user.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/user/view/user.tpl.html',
        '<div class=page-header><h1>{{heading}}</h1></div><ul class="nav nav-tabs"><li ui-sref-active=active ng-repeat="module in userModules"><a ui-sref={{module.sref}}>{{module.title}}</a></li></ul><div id=user-modules ui-view=""></div>');
}]);

angular.module('app/view/contact.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/contact.tpl.html',
        '<div class=page-header><h1>Contact us!</h1></div><address>...</address>');
}]);

angular.module('app/view/footer.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/footer.tpl.html',
        '<div class="navbar navbar-inverse navbar-fixed-bottom" role=navigation><div class=container><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=.navbar-ex6-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span></button></div><div class="collapse navbar-collapse navbar-ex6-collapse"><ul class="nav navbar-nav"><li><a href=#contact><span class="glyphicon glyphicon-copyright-mark"></span> 2014</a></li></ul></div></div></div>');
}]);

angular.module('app/view/header.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/header.tpl.html',
        '<div ng-controller=NavigationCtrl class="navbar navbar-inverse navbar-fixed-top"><div class=container><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=.navbar-collapse><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand ui-sref=home>Grill Ops Simulator</a></div><div class="navbar-collapse collapse"><ul class="nav navbar-nav"><li ng-class="{active: $state.includes(\'{{item.state}}\')}" ng-repeat="item in navItems"><a ui-sref={{item.sref}}><span ng-show=item.icon class="glyphicon {{item.icon}}"></span> {{item.title}}</a></li></ul></div></div></div>');
}]);

angular.module('app/view/home.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/home.tpl.html',
        '<div class=jumbotron ng-controller=HomeCtrl><h1>{{heading}}</h1><p>1 + 2 = {{ 1 + 2 }}</p><p>{{text}}</p><p><a class="btn btn-lg btn-primary" href=#about>Learn more <span class="glyphicon glyphicon-chevron-right"></span></a></p></div>');
}]);

angular.module('app/view/individualHighScores.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/individualHighScores.tpl.html',
        '<div class=page-header><h1>Individual High Scores!</h1></div><div class=highScore><p class=pull-left>name</p><p class=pull-right>score</p></div><p>...</p>');
}]);
