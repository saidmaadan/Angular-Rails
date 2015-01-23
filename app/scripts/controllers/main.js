'use strict';

/**
 * @ngdoc function
 * @name railsAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the railsAngularApp
 */
angular.module('railsAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
