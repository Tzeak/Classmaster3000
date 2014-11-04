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
  })
  .controller('AboutCtrl', function ($timeout,$scope,$rootScope) {
    $scope.apselects = {};
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
      $rootScope.fallmath = 'MATH 11';
      $rootScope.wintermath = 'MATH 12';
      $rootScope.springmath = 'MATH 13';
      $rootScope.fallcoen = 'COEN 10';
      $rootScope.wintercoen = 'COEN 11';
      $rootScope.springcoen = 'COEN 12';
      $rootScope.fallscience = 'CHEM 11';
      $rootScope.winterscience = 'PHYS 31';
      $rootScope.springscience = 'PHYS 32';
      $rootScope.fallengr = 'ENGR 1';
      $rootScope.winterengr = '';
      $scope.bc = false;
      $scope.ab = false;

      $scope.click = function(){
        $timeout(function() {
          angular.forEach($scope.apselects, function(key,value){
            
            //if AB is checked
            if(value === 'Calculus AB' && key === true){
              $scope.ab = true;
              if($scope.bc === false){
                $rootScope.fallmath = 'MATH 12';
                $rootScope.wintermath = 'MATH 13';
                $rootScope.springmath = 'MATH 14';
              }
            }

            //if AB is not checked
            else if(value === 'Calculus AB'){
              $scope.ab = false;
              //check if BC is checked for no overwrite
              if($scope.bc === false){
                $rootScope.fallmath = 'MATH 11';
                $rootScope.wintermath = 'MATH 12';
                $rootScope.springmath = 'MATH 13';
              }
            }

            //if BC is checked
            if(value === 'Calculus BC' && key === true){
              $scope.bc = true;
              $rootScope.fallmath = 'MATH 13';
              $rootScope.wintermath = 'MATH 14';
              $rootScope.springmath = 'AMTH 106';
            }

            //if BC is not checked
            else if(value === 'Calculus BC'){
              $scope.bc = false;
              //check if AB is still checked
              if($scope.ab === true){ 
                $rootScope.fallmath = 'MATH 12';
                $scope.wintermath = 'MATH 13';
                $scope.springmath = 'MATH 14';
              }
              else{
                $rootScope.fallmath = 'MATH 11';
                $rootScope.wintermath = 'MATH 12';
                $rootScope.springmath = 'MATH 13';
              }
            }
          }); //end for each
        }, 0); //end timeout
      }; //end click
    })

.controller('ScheduleCtrl', function($rootScope) {
  });
