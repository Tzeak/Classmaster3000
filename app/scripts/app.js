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
      $scope.chem = false;
      $scope.coen = false;
      $scope.fallcore = 0;
      $scope.wintercore = 0;
      $scope.fallco= true;
      $scope.winterco = true;
      $scope.fallsci = true;
      $scope.wintersci = true;
      $scope.falleng = true;

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

            if(value === 'Computer Science A' && key === true && $scope.chem === true){
              $scope.coen = true;
              if($rootScope.fallcoen === 'CORE'){
                $scope.fallcore--;
              }
              if($rootScope.winterscience === 'CORE'){
                $scope.wintercore--;
              }
              $rootScope.fallcoen = 'COEN 12';
              $rootScope.wintercoen = 'COEN 70';
              $rootScope.springcoen = 'COEN 20';
            }
            else if(value === 'Computer Science A' && key === true && $scope.chem === false){
              $scope.coen = true;
              $rootScope.fallcoen = 'CORE';
              $scope.fallco = false;
              $scope.fallcoencore = true;
              $scope.fallcore++;
              $rootScope.wintercoen = 'CORE';
              $scope.winterco = false;
              $scope.wintercoencore = true;
              $scope.wintercore++;
              $rootScope.springcoen = 'COEN 12';
            }
            else if(value === 'Computer Science A' && key === false){
              $scope.coen = false;
              if($rootScope.fallcoen === 'CORE'){
                $scope.fallcore--;
              }
              if($rootScope.wintercore === 'CORE'){
                $scope.wintercore--;
              }
              $rootScope.fallcoen = 'COEN 10';
              $rootScope.wintercoen = 'COEN 11';
              $rootScope.springcoen = 'COEN 12';
              $scope.fallco = true;
              $scope.fallcoencore = false;
              $scope.winterco = true;
              $scope.wintercoencore = false;
            }

            if(value === 'Chemistry' && key === true){
              $scope.chem = true;
              $rootScope.fallscience = 'CORE';
              $scope.fallsci = false;
              $scope.fallscicore = true;
              $scope.fallcore++;
            }
            else if(value === 'Chemistry' && key === false){
              $scope.chem = false;
              if($scope.fallscience === 'CORE'){
                $scope.fallcore--;
              }
              $rootScope.fallscience = 'CHEM 11';   
              $scope.fallsci = true;
              $scope.fallscicore = false;      
            }

            if(value === 'Physics C: Mechanics' && key === true){
              if($rootScope.wintercoen === 'CORE'){
                $scope.wintercore--;
                $rootScope.fallcoen = 'COEN 12';
                $rootScope.wintercoen = 'COEN 70';
                $rootScope.springcoen = 'COEN 20';
                $rootScope.winterscience = 'CORE';
                $scope.wintersci = false;
                $scope.winterscicore = true; 
                $scope.wintercore++;
              }
              else{
                $rootScope.winterscience = 'CORE';
                $scope.wintercore++;
                $scope.wintersci = false;
                $scope.winterscicore = true; 
              }
            }
            else if(value === 'Physics C: Mechanics' && key === false){
              if($scope.winterscience === 'CORE'){
                $scope.wintercore--;
              }
              $rootScope.winterscience = 'PHYS 31';
              $scope.wintersci = true;
              $scope.winterscicore = false; 
            }

            if($scope.wintercore > $scope.fallcore){
              $rootScope.winterengr = 'ENGR 1';
              $rootScope.fallengr = '';
              $scope.falleng = false;
              $scope.wintereng = true;
            }
            else if($scope.wintercore <= $scope.fallcore){
              $rootScope.winterengr = '';
              $rootScope.fallengr = 'ENGR 1';
              $scope.falleng = true;
              $scope.wintereng = false;
            }
          }); //end for each
        }, 0); //end timeout
      }; //end click
    })

.controller('ScheduleCtrl', function() {
  });
