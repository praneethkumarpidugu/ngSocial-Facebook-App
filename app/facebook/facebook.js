
'use strict';

angular.module('ngSocial.facebook', ['ngRoute', 'ngFacebook'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/facebook', {
            templateUrl: 'facebook/facebook.html',
            controller: 'facebookCtrl'
        });
    }])

    .config(function ($facebookProvider) {
        $facebookProvider.setAppId('YOUR_FACEBOOK_KEY');
        $facebookProvider.setPermissions('email', 'public_profile', 'user_posts', 'publish_actions', 'user_photos');
    })

    .run(function ($rootScope) {
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    })
    
    .controller('facebookCtrl', [ '$scope','$facebook',function($scope, $facebook) {
        $scope.isLoggedIn = false;
        $scope.login = function () {
            $facebook.login().then(function () {
                console.log('LOGGED IN');
            });
        }
    }]);