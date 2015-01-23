'use strict';

/**
 * @ngdoc function
 * @name railsAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the railsAngularApp
 */
angular.module('railsAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
