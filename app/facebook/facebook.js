/**
 * Created by praneethkumar on 28/07/16.
 */
'use strict';

angular.module('ngSocial.facebook', ['ngRoute', 'ngFacebook'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/facebook', {
            templateUrl: 'facebook/facebook.html',
            controller: 'facebookCtrl'
        });
    }])

    .config(function ($facebookProvider) {
        $facebookProvider.setAppId('1148847478491012');
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
    
    .controller('FacebookCtrl', [function() {

    }]);