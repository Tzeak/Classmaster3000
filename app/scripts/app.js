'use strict';

angular.module('classmasterApp', ['ngAnimate','ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('MainCtrl', function() {
    console.log('in main');
  })
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.hello = 'hellooooo';
    console.log('in about');
    $scope.apclasses = [
        {
          name:'Calculus AB',
          score:4
        },
        {
          name:'Calculus BC',
          score:3
        },
        {
          name:'Computer Science A',
          score:3
        },
        {
          name:'Physics B',
        },
        {
          name:'Physics C: Mechanics',
          score:4
        },
        {
          name:'Physics C: Electricity & Magnetism',
          score:4
        },
        {
          name:'Chemistry',
          score:3
        },
        {
          name:'Environmental Science',
          score:4
        }
      ];
    }]);
