'use strict';

/**
 * @ngdoc function
 * @name starwarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the starwarApp
 */
angular.module('starwarApp')
  .controller('ListCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });