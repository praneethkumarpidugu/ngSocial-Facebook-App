'use strict';

// Declare app level module which depends on views, and components
angular.module('ngSocial', [
  'ngRoute',
  'ngSocial.facebook',
  'ngSocial.view1',
  'ngSocial.view2'
]).
config(['$routeProvider', function($routeProvider) {


  $routeProvider.otherwise({redirectTo: '/facebook'});
}]);
